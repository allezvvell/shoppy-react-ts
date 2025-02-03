import { LocalKey, LocalValue } from '@constants/localStorage';

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
