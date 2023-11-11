import Resume from './Resume';
import '../styles/home.scss';
const Home = () => {

    return (
        <div className="home-container container-fluid justify-content-center">
            <h3 className='justify-content-center'>About Me</h3>

            <p className='justify-content-center'>I am a back-end programmer fluent in javascript and python. I have compeleted projects using React, MongoDB, mySQL, Mongoose, and GraphQL. Below are my Academic and Work Experiences.</p>

            <Resume />

        </div>
    )
}



export default Home;