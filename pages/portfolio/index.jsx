import styles from '../../styles/Portfolio.module.scss';
import { PortfolioPost } from "../../components/PortfolioPost";

const Portfolio = () => {
    return <main className={styles.page}>
        {/* Dev Issue Tracker */}
        <PortfolioPost title="Dev Issue Tracker"
            techList={['React', 'Sass', 'Node', 'Express', 'Mongoose', 'JWT']}
            websiteLink="https://devissuetracking.herokuapp.com/"
            repoLink="https://github.com/nbur4556/issue_reporter"
            image={{
                src: "/projects/dev-issue-main.png",
                txt: "Issue reporter landing page.",
                position: { width: '1200px', top: '200px' }
            }}
        >
            <p>Dev issue tracker is a resource for organizing bugs, issues, and features on development projects. The application features robust state management implementing React&apos;s Context API, making state easily accessible across the various components of the project.</p>
        </PortfolioPost>

        {/* SurvEasy */}
        <PortfolioPost title="SurvEasy"
            techList={['React', 'Sass', 'Node', 'Express', 'Chart.js', 'Axios', 'Bootstrap']}
            websiteLink="https://surveasy.herokuapp.com/"
            repoLink="https://github.com/Sakiskid/Surveasy"
            image={{
                src: "/projects/surveasy-main.png",
                txt: "SurvEasy landing page.",
                position: { width: '1300px' }
            }}
        >
            <p>SurvEasy makes it easy to know what your target market is thinking. The application provides a simple solution for creating and providing surveys to your intended audience. This project is built with a React client, and Node JS for the server. In creating SurvEasy, I was able to provide a secure and full featured user authorization process involving encrypted passwords, and JSON web tokens for authentication. Users can create and provide surveys with a dedicated link, and data and analytics from the surveys are provided using Chart.js to display on the front end.</p>
        </PortfolioPost>
    </main>
}

export default Portfolio;