import styles from '../styles/PortfolioPost.module.scss';

export const PortfolioPost = (props) => {
    const { title, techList } = props;

    return <article className={styles.portfolioPost}>
        <h1>{title}</h1>
        <ul>
            {techList.map((tech, i) => {
                return <li key={i}>{tech}</li>
            })}
        </ul>

        <PortfolioPostContent
            content={props.children}
            websiteLink={props.websiteLink}
            repoLink={props.repoLink}
        />

    </article>
}

const PortfolioPostContent = (props) => {
    const { content, websiteLink, repoLink } = props

    return <section>
        {content}

        <a href={websiteLink} target="_blank" rel="noreferrer">Website</a>
        <a href={repoLink} target="_blank" rel="noreferrer">Repository</a>
    </section>
}