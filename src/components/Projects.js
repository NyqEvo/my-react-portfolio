import React from 'react';
import './Projects.css';
import taskGif from './images/task-gif.gif';
import thoughtsGif from './images/social-network-thoughts.gif';


const Projects = () => {

    return (
        <div className="project-container">
            <h3>Projects</h3>
            <p>This section will display all my relevant projects. "Task Sandwich will be the first one shown, with other projects such as mongoDB, mongoose, and back-end routing. Gifs or Pictures will be shown with short descriptions below each.</p>

            <h2>Task Sandwich</h2>
            <img src={taskGif} alt='gif demonstrating the Task Sandwich site'/>
            <p>Task Sandwich is a project managment site with a reward system included. Users can earn reward credits to spend however they agree on spending them for their own real life rewards. Using Apollo GraphQL and MongoDb, we were able to successfully store data (with encryption for passwords) and send data to front end with a viariety of typeDefs and resolvers.</p>

            <h2>"Social Network" Back-End</h2>
            <img src={thoughtsGif} alt='gif demonstrating the social network thoughts project'/>
            <p>This is a project done to demonstrate my ability to both create a functioning database as well as retrieve, update, add, and delete information in the database from the front end.</p>
        </div>
    )
}



export default Projects;