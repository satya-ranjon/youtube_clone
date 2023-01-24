// @ts-nocheck
import { useState } from "react";
/**
 * @returns  el = any
 * @returns open = boolean
 * @returns handleClick function
 * @returns handleClose function
 */
const useToggle = () => {
  const [el, setEl] = useState(null);

  const open = Boolean(el);

  /**
   * @param {boolean} event
   */
  const handleClick = (event) => {
    setEl(event.currentTarget);
  };

  const handleClose = () => {
    setEl(null);
  };

  return { el, open, handleClick, handleClose };
};

export default useToggle;
