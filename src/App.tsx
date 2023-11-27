import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/common/header';
import { Meteors } from './components/common/meteor-effect';
import AppContextProvider from './helpers/hooks/AppContext';
import ScrollToTopOnNavigate from './helpers/hooks/useScrollTop';
import notify from './helpers/toastify-helper';
import RoutesComp from './router/routes';
import './styles/App.scss';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      notify({ message: 'Geolocation not supported', severity: 'error', dismissible: true });
    }
  }, []);

  function success(position: GeolocationPosition) {
    notify({ message: 'Location fetched successfully!', severity: 'success', dismissible: true });
    const latitude = position?.coords?.latitude;
    const longitude = position.coords?.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    notify({ message: 'Unable to retrieve your location', severity: 'error' });
  }

  return (
    <main className="app" data-theme={theme}>
      <HelmetProvider>
        <Router>
          <AppContextProvider>
            <Meteors number={10} />
            <Header theme={theme} setTheme={setTheme} />
            <RoutesComp />
            <ScrollToTopOnNavigate />
            <ToastContainer
              autoClose={4000}
              position="top-center"
              closeButton={false}
              hideProgressBar
              pauseOnFocusLoss={false}
              closeOnClick={false}
              limit={3}
            />
          </AppContextProvider>
        </Router>
      </HelmetProvider>
    </main>
  );
}

export default App;
