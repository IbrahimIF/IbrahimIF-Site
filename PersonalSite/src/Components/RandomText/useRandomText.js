import { useState, useEffect } from "react";

export const useRandomText = () => {
  const [unknownText, setUnknownText] = useState(generateRandomString(6));
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnknownText(generateRandomString(6));
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  function generateRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  return unknownText;
};