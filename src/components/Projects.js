import React from 'react';
import './Projects.css'
import gif from './images/task-gif.gif';


const Projects = () => {

    return (
        <div className="project-container">
            <h3>Projects</h3>
            <p>This section will display all my relevant projects. "Task Sandwich will be the first one shown, with other projects such as mongoDB, mongoose, and back-end routing. Gifs or Pictures will be shown with short descriptions but I'm not sure what is most professional atm.</p>

            <h2>Task Sandwich</h2>
            <img src={gif} alt='gif demonstrating the Task Sandwich site'/>
            <p>Task Sandwich is a project managment site with a reward system included. Users can earn reward credits to spend however they agree on spending them for their own real life rewards. Using Apollo GraphQL and MongoDb, we were able to successfully store data (with encryption for passwords) and send data to front end with a viariety of typeDefs and resolvers.</p>

        </div>
    )
}



export default Projects;