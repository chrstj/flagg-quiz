import Head from "next/head";
import Quiz from "./components/Quiz"; // Import the Quiz component

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Head>
        <title>Flagg Quiz</title>
        <meta name='description' content='A fun flag quiz' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        Europa flagg-quiz
      </h1>
      <p style={{ fontSize: "18px" }}>15 spørsmål</p>

      <Quiz />
    </div>
  );
}
