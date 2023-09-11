import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/common/header';
import { Meteors } from './components/common/meteor-effect';
import AppContextProvider from './helpers/hooks/AppContext';
import ScrollToTopOnNavigate from './helpers/hooks/useScrollTop';
import './styles/App.scss';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <main className="app" data-theme={theme}>
      <HelmetProvider>
        <Router>
          <AppContextProvider>
            <Meteors number={10} />
            <Header theme={theme} setTheme={setTheme} />
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
