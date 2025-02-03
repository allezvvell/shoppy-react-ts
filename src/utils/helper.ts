import { LocalKey, LocalValue, LOCAL_KEYS } from '@constants/localStorage';

export const getLocalState = <K extends LocalKey>(
  name: K
): LocalValue<K> | null => {
  const state = localStorage.getItem(name);
  return state ? JSON.parse(state) : null;
};

export const setLocalState = <K extends LocalKey>(
  name: K,
  value: LocalValue<K>
) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalTheme = (): boolean => {
  const dark = getLocalState(LOCAL_KEYS.DARK_MODE);
  const isDark = dark !== null ? dark : true;
  if (isDark) document.documentElement.classList.add('dark');
  return isDark;
};
