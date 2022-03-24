import styles from '../styles/MobileImage.module.scss';

export const MobileImage = ({ imageUrl, altText, position = {} }) => {
    const styleOverrides = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: position.width || '1920px',
        backgroundPositionY: position.top || 'center',
        backgroundPositionX: position.left || 'center'
    }

    return <div className={styles.imageContainer}>
        <span role="img" aria-label={altText} style={styleOverrides}>{altText}</span>
    </div>
}