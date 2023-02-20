import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'

function App() {

    const pages = ["home", "projects", "contact"]

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div className="portfolio-main">
            <header className="Header">
                <h1 className='name-title'>Xavier Vergara</h1>
                <p className='header-description'>Back-end Programmer</p>
                <Nav page={currentPage} setPage={setCurrentPage} />
            </header>
            <Portfolio page={currentPage} />
            <Footer />
        </div>
    )
}

export default App;