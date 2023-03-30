import styles from '@/styles/FootballCommentaryAnalysisText.module.css';

export default function FootballCommentaryAnalysisText({ text }) {
  return <p className={styles.commentaryText}>{text}</p>;
}
