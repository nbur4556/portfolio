import styles from '../styles/MobileImage.module.scss';

export const MobileImage = ({ imageUrl, altText = '' }) => {
    return <div className={styles.imageContainer}>
        <span role="img" aria-label={altText} style={{ backgroundImage: `url(${imageUrl})` }} />
    </div>
}