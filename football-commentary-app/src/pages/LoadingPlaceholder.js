import styles from '@/styles/LoadingPlaceholder.module.css';

export default function LoadingPlaceholder({ generationLabel }) {
  return (
    <>
      <div className={styles.loadingAnimation}>
        <div className={styles.loadingSpinner}></div>
        <p>Generating {generationLabel}</p>
      </div>
    </>
  );
}
