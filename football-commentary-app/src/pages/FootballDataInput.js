import styles from '@/styles/FootballDataInput.module.css';

export default function FootballDataInput({
  text,
  onCommentaryRequested,
  onTextChange,
}) {
  return (
    <>
      <h1 className={styles.commentaryHeading}>Generate Football Commentary</h1>
      <p>
        Enter football data here and it will be automatically analysed and
        turned into real commentary.
      </p>

      <textarea
        className={styles.footballData}
        type="text"
        value={text}
        onChange={onTextChange}
      ></textarea>

      <button
        className={styles.getCommentaryBtn}
        onClick={onCommentaryRequested}
      >
        Get commentary
      </button>
    </>
  );
}
