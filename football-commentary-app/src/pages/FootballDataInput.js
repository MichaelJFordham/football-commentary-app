import styles from '@/styles/FootballDataInput.module.css';

export default function FootballDataInput({
  text,
  onCommentaryRequested,
  onTextChange,
}) {
  return (
    <>
      <div className={styles.container}>
        <h1>Football Data Input</h1>
        <p>Enter the football data here</p>
        <input type="text" value={text} onChange={onTextChange}></input>
        <button onClick={onCommentaryRequested}>Get commentary</button>
      </div>
    </>
  );
}
