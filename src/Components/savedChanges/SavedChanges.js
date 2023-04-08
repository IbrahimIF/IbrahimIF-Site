// SavedChanges.js
import { useEffect, useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import Navbar from "../navbar/Navbar";

const Saved = () => {
  const { isDarkMode, setIsDarkMode, isLeftMode, setIsLeftMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    document.querySelector(".navbar").classList.toggle("visible", isLeftMode);
    document.querySelector(".navbutton").classList.toggle("visible", isLeftMode);
    document.querySelector(".dark-button").classList.toggle("visible", isLeftMode);
    document.querySelector(".container").classList.toggle("visible", isLeftMode);
  }, [isLeftMode]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Saved;