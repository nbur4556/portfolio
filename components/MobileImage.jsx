import Image from "next/image";
import styles from '../styles/MobileImage.module.scss';

export const MobileImage = ({ imageUrl, altText }) => {
    return <section className={styles.mobileImage}>
        <Image src={imageUrl} alt={altText} />
    </section>
}