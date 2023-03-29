import styles from '@/styles/FootballCommentaryAnalysisText.module.css';

export default function FootballCommentaryAnalysisText({ text }) {
  return (
    <>{text.length !== 0 && <p className={styles.commentaryText}>{text}</p>}</>
  );
}
