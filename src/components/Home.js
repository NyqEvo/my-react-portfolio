//import './Home.css'
import Resume from './Resume';
const Home = () => {

    return (
        <div className="home-container container-xl">
            <h3>About Me</h3>

            <p>I am a back-end programmer fluent in javascript and python. I have compeleted projects using React, MongoDB, mySQL, Mongoose, and GraphQL. Below are my Academic and Work Experiences.</p>

            <Resume />

        </div>
    )
}



export default Home;