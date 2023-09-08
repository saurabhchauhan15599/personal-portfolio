/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useCallback } from 'react';
import { useBeforeUnload } from 'react-router-dom';

function useBeforeUnloadAndNavigate(
  callback?: (event: BeforeUnloadEvent) => void,
  options?: { capture?: boolean }
) {
  const beforeUnload = useCallback((event: BeforeUnloadEvent) => {
    const confirmationMessage = 'Are you sure to leave the page?';
    (event ?? window.event).returnValue = confirmationMessage;
    return confirmationMessage;
  }, []);
  useBeforeUnload(callback ?? beforeUnload, options);
}

export default useBeforeUnloadAndNavigate;
