"use client";
import React, { useState, useEffect } from "react";
import FlagCard from "./FlagCard";
import flagData from "../../../public/data"; // Rename imported flags to flagData to avoid conflict

const Quiz = () => {
  const [flags, setFlags] = useState([]);
  const [currentFlagIndex, setCurrentFlagIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [feedback, setFeedback] = useState(""); // New state for feedback
  const [feedbackColor, setFeedbackColor] = useState("black"); // New state for feedback color

  useEffect(() => {
    // Shuffle the flags array to randomize the quiz order
    const shuffledFlags = [...flagData].sort(() => 0.5 - Math.random()); // Use flagData from import
    setFlags(shuffledFlags.slice(0, 15)); // Select 15 random flags
  }, []);

  const handleAnswer = (isCorrect, correctAnswer) => {
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Riktig");
      setFeedbackColor("green"); // Set feedback color to green for correct answers
    } else {
      setFeedback(`${correctAnswer}.`);
      setFeedbackColor("red"); // Set feedback color to red for incorrect answers
    }

    if (currentFlagIndex < flags.length - 1) {
      setTimeout(() => {
        setFeedback(""); // Clear feedback after a short delay
        setCurrentFlagIndex(currentFlagIndex + 1);
      }, 1000); // Delay of 1 second before moving to the next flag
    } else {
      setTimeout(() => {
        setIsQuizOver(true);
      }, 1000); // Delay of 1 second before ending the quiz
    }
  };

  const handlePlayAgain = () => {
    const shuffledFlags = [...flagData].sort(() => 0.5 - Math.random());
    setFlags(shuffledFlags.slice(0, 15)); // Reset flags
    setCurrentFlagIndex(0); // Reset flag index
    setScore(0); // Reset score
    setIsQuizOver(false); // Reset quiz over state
    setFeedback(""); // Reset feedback
    setFeedbackColor("black"); // Reset feedback color
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {isQuizOver ? (
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
            {score} av 15 riktige.
          </h2>
          <button
            onClick={handlePlayAgain}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Spill igjen
          </button>
        </div>
      ) : (
        flags.length > 0 && (
          <div>
            <FlagCard
              flag={flags[currentFlagIndex]}
              onAnswer={(isCorrect) =>
                handleAnswer(isCorrect, flags[currentFlagIndex].name)
              }
            />
            {feedback && (
              <p
                style={{
                  fontSize: "18px",
                  color: feedbackColor,
                  marginTop: "10px",
                }}
              >
                {feedback}
              </p>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
