import { useEffect, useMemo, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/common/header';
import Seo from './components/common/seo';
import AppContextProvider from './helpers/hooks/AppContext';
import notify from './helpers/toastify-helper';
import RoutesComp from './router/routes';
import { getCurrentWeather } from './services/weather.service';
import './styles/App.scss';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'light');
  const [weatherTag, setWeatherTag] = useState('rainy');
  const weatherApiKey = import.meta.env.REACT_APP_OPEN_WEATHER_API;
  const weatherEnabled = useMemo(() => Boolean(weatherApiKey), [weatherApiKey]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!weatherEnabled || !navigator.geolocation) return;

    const onSuccess = async (position: GeolocationPosition) => {
      try {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const data = await getCurrentWeather(`${latitude}`, `${longitude}`);
        const currentWeather = (data as { weather?: Array<{ main?: string }> })?.weather?.[0]?.main
          ?.toLowerCase?.() ?? 'default';

        if (currentWeather.includes('rain')) setWeatherTag('rainy');
        else if (currentWeather.includes('cloud')) setWeatherTag('cloudy');
        else if (currentWeather.includes('clear')) setWeatherTag('clear');
        else setWeatherTag('default');
      } catch {
        setWeatherTag('default');
      }
    };

    const onError = () => {
      setWeatherTag('default');
      notify({
        message: 'Location access denied. Using default portfolio theme.',
        severity: 'info',
        dismissible: true
      });
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 5000 });
  }, [weatherEnabled]);

  const themeClassName = theme === 'dark' ? 'dark' : '';

  return (
    <main className={`app ${themeClassName}`} data-theme={theme} data-weather={weatherTag}>
      <HelmetProvider>
        <Seo title="Frontend Engineer">
          <meta
            name="description"
            content="Portfolio of Saurabh Chauhan - Frontend Engineer building high-traffic e-commerce experiences."
          />
        </Seo>
        <Router>
          <AppContextProvider>
            <Header theme={theme} setTheme={setTheme} />
            <RoutesComp />
            {/* <ScrollToTopOnNavigate /> */}
            <ToastContainer
              autoClose={3000}
              position="top-center"
              closeButton={false}
              hideProgressBar
              pauseOnFocusLoss={false}
              closeOnClick={false}
              limit={2}
            />
          </AppContextProvider>
        </Router>
      </HelmetProvider>
    </main>
  );
}

export default App;
