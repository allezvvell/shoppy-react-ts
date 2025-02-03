import { useState, useCallback, useEffect } from 'react';
import { LOCAL_KEYS } from '@constants/localStorage';
import { getLocalState, setLocalState } from '@utils/helper';

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

function getLocalTheme() {
  const dark = getLocalState(LOCAL_KEYS.DARK_MODE);
  const isDark = dark !== null ? dark : true;
  if (isDark) document.documentElement.classList.add('dark');
  return isDark;
}
