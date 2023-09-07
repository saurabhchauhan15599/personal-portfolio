import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollToTopOnNavigate() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]); // This effect runs whenever the `navigate` function changes

  return null;
}

export default ScrollToTopOnNavigate;
