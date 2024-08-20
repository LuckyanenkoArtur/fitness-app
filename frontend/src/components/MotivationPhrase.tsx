import { useState, useEffect } from "react";
import motivations from "../data/motivationPhrases";
import "./MotivationPhrase.scss";

interface MotivationPhrase {
  id: number;
  phrase: string;
}

const MotivationPhrase = () => {
  const [phrase, setPhrase] = useState("Ну же ты сможешь!");

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random number between 1 (inclusive) and the length of the array (inclusive)
      const randomId = Math.floor(Math.random() * motivations.length) + 1;

      // Find the phrase with the random ID
      const randomPhrase = motivations.find(
        (motivation) => motivation.id === randomId
      );

      // Set the phrase if a matching phrase is found
      if (randomPhrase) {
        setPhrase(randomPhrase.phrase);
      }
    }, 5000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array [] ensures this effect runs only once on mount

  return <div className="motivation-phrase">{phrase}</div>;
};

export default MotivationPhrase;
