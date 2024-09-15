import React, { useState } from "react";

const FlagCard = ({ flag, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = () => {
    const isCorrect = userAnswer.toLowerCase() === flag.name.toLowerCase();
    onAnswer(isCorrect, flag.name); // Pass the correct answer to onAnswer
    setUserAnswer(""); // Reset the input field after submission
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(); // Trigger the submit function if Enter is pressed
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers the flag, input, and button horizontally
        justifyContent: "center", // Centers the flag, input, and button vertically (optional)
        marginBottom: "20px",
      }}
    >
      <img
        src={flag.image}
        alt={flag.name}
        style={{
          width: "300px",
          height: "200px",
          marginBottom: "20px", // Adds space between the flag and input
        }}
      />
      <input
        type='text'
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        onKeyDown={handleKeyDown} // Listen for key presses in the input field
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "10px", // Space between input and button
          color: "black",
        }}
      />
      <button
        onClick={handleSubmit} // Add onClick to trigger handleSubmit when button is clicked
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Svar
      </button>
    </div>
  );
};

export default FlagCard;
