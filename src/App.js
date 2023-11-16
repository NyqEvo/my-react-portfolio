import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer'
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

    return (
        <div className="portfolio-main d-flex flex-column min-vh-100">
            <Header />
            <Router basename='/my-react-portfolio'>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}

export default App;