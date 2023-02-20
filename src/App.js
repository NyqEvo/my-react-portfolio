import './App.css';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Portfolio from './components/Portfolio';

function App() {

    const pages = ["home", "projects", "contact"]

    const [currentPage, setCurrentPage] = useState(pages[0]);  

    return (
        <div className="portfolio-main">
            <header className="Header">
                <h1 className='name-title'>Xavier Vergara</h1>
                <p className='header-description'>Back-end Programmer</p>
                <Tabs page={currentPage} setPage={setCurrentPage}/>
            </header>
            <Portfolio  page={currentPage} />
           
           <footer>
            <p>Made Using React</p>
           </footer>
        </div>
    )
}

export default App;