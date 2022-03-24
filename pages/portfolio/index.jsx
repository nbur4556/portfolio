import styles from '../../styles/Portfolio.module.scss';
import { PortfolioPost } from "../../components/PortfolioPost";

const Portfolio = () => {
    return <main className={styles.page}>
        <PortfolioPost title="Dev Issue Tracker"
            techList={['React', 'Sass', 'Node', 'Express', 'Mongoose', 'JWT']}
            websiteLink="https://devissuetracking.herokuapp.com/"
            repoLink="https://github.com/nbur4556/issue_reporter"
            image={{ src: "/mountain_bg.png", txt: "Mountain background temporary" }}
        >
            <p>Dev issue tracker is a resource for organizing bugs, issues, and features on development projects. The application features robust state management implementing React&apos;s Context API, making state easily accessible across the various components of the project.</p>
        </PortfolioPost>
    </main>
}

export default Portfolio;