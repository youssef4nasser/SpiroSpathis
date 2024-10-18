import styles from './Hand.module.css';

const Hand = () => {
  return (
    <div className="bg-white w-full h-screen fixed top-0 bottom-0 z-50 flex justify-center items-center">
    <div className={styles.hand}>
      <div className={styles.finger}></div>
      <div className={styles.finger}></div>
      <div className={styles.finger}></div>
      <div className={styles.finger}></div>
      <div className={styles.palm}></div>
      <div className={styles.thumb}></div>
    </div>
    </div>
  );
};

export default Hand;
