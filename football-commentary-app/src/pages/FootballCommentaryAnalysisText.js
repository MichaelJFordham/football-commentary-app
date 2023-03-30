import styles from '@/styles/FootballCommentaryAnalysisText.module.css';

export default function FootballCommentaryAnalysisText({ text }) {
  return (
    <>{text !== null && <p className={styles.commentaryText}>{text}</p>}</>
  );
}
