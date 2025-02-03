import { useState, useCallback, useEffect } from 'react';
import { LOCAL_KEYS } from '@constants/localStorage';
import { getLocalTheme, setLocalState } from '@utils/helper';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(getLocalTheme);
  const toggleIsDark = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setLocalState(LOCAL_KEYS.DARK_MODE, isDark);
  }, [isDark]);

  return { isDark, toggleIsDark };
};

export default useDarkMode;
