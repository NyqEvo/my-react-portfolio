import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
//import "./Portfolio.css"


const Portfolio = (props) => {
    
    const renderPage = (page) => {
        

        if (page === 'home') {
            return <Home />
        } else if (page === 'projects') {
            return <Projects />
        } else {
            return <Contact />
        }
    }

    let page = props.page

    return (
        <div className="portfolio-container container-lg">
            <div>
            {renderPage(page)}
            </div>

        </div>
    )
}



export default Portfolio;