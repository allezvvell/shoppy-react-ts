import { useState, useCallback } from 'react';

const useToggle = () => {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

  return { active, toggleActive };
};

export default useToggle;
