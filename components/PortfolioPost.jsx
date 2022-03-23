export const PortfolioPost = (props) => {
    const { title, techList, websiteLink, repoLink, imageUrl, imageAlt } = props;

    return <article>
        <h1>{title}</h1>
        <ul>
            {techList.map((tech, i) => {
                return <li key={i}>{tech}</li>
            })}
        </ul>

        <section>
            {props.children}

            <a href={websiteLink} target="_blank" rel="noreferrer">Website</a>
            <a href={repoLink} target="_blank" rel="noreferrer">Repository</a>
        </section>
    </article>
}