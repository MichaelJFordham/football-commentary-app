import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import FootballDataInput from './FootballDataInput';
import { useState } from 'react';
import FootballCommentaryAnalysisText from './FootballCommentaryAnalysisText';
import FootballCommentaryAudio from './FootballCommentaryAudio';

export default function Home() {
  const [currentText, setCurrentText] = useState('');
  const [currentCommentaryAnalysis, setCurrentCommentaryAnalysis] =
    useState('');
  const [currentCommentaryAudio, setCurrentCommentaryAudio] = useState(null);

  function handleCommentaryRequest() {
    console.log('Commentary requested for: ' + currentText);

    fetch('/api/analyse-commentary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ footballData: currentText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentCommentaryAnalysis(data.message);
        handleCommentaryAudio(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleCommentaryAudio(commentary) {
    fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${process.env.NEXT_PUBLIC_ELEVEN_LABS_VOICE_ID}`,
      {
        method: 'POST',
        headers: {
          accept: 'audio/mpeg',
          'xi-api-key': process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: commentary,
          voice_settings: {
            stability: 0.6,
            similarity_boost: 0.75,
          },
        }),
      },
    )
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setCurrentCommentaryAudio(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const onTextChange = (e) => {
    setCurrentText(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Football Commentary Generator</title>
        <meta
          name="description"
          content="An app that generates football commentary from raw football data."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <FootballDataInput
          text={currentText}
          onCommentaryRequested={() => handleCommentaryRequest()}
          onTextChange={onTextChange}
        />

        <FootballCommentaryAnalysisText text={currentCommentaryAnalysis} />

        <FootballCommentaryAudio audio={currentCommentaryAudio} />
      </div>
    </>
  );
}
