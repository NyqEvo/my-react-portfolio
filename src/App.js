//import './App.css';
//import { useState } from 'react';
import Nav from './components/Nav';
//import Portfolio from './components/Portfolio';
import Footer from './components/Footer'

function App() {

    // const pages = ["home", "projects", "contact"]

    // const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div className="portfolio-main container-fluid bg-dark">
            <header className="Header container-sm bg-secondary">
                <h1 className='name-title h1'>Xavier Vergara</h1>
                <p className='header-description h2'>Full-Stack Developer</p>
                {/* <Nav page={currentPage} setPage={setCurrentPage} /> */}
            </header>
            <Nav/>
            {/* <Portfolio page={currentPage} /> */}
            <Footer />
        </div>
    )
}

export default App;