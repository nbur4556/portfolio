import styles from '../styles/MobileImage.module.scss';

export const MobileImage = ({ imageUrl }) => {
    return <div className={styles.imageContainer} style={{ backgroundImage: `url(${imageUrl})` }} />
}