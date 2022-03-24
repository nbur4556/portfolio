import styles from '../styles/PortfolioPost.module.scss';
import { MobileImage } from './MobileImage';

export const PortfolioPost = (props) => {
    const { title, techList, websiteLink, repoLink, image } = props;

    return <article className={styles.portfolioPost}>
        <MobileImage imageUrl={image.src} altText={image.txt} position={image.position} />

        <section className={styles.titleSection}>
            <h1>{title}</h1>
            <ul>
                {techList.map((tech, i) => {
                    return <li key={i}>{tech}</li>
                })}
            </ul>
        </section>

        <section className={styles.textSection}>
            {props.children}
            <section>
                <a href={websiteLink} target="_blank" rel="noreferrer">Website</a>
                <a href={repoLink} target="_blank" rel="noreferrer">Repository</a>
            </section>
        </section>
    </article>
}