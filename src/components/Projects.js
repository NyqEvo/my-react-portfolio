import React, { useEffect, useState } from 'react';
import taskGif from './images/task-gif.gif';
import thoughtsGif from './images/social-network-thoughts.gif';

const Projects = () => {
    const [isSmallViewport, setIsSmallViewport] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallViewport(window.innerWidth <= 768)
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="project-container container-md">
            <h2 className='my-4 border-bottom border-light border-2'>Task Sandwich</h2>
            <div id='project-one' className={isSmallViewport ? 'container-fluid' : 'row' }>
                <div className={isSmallViewport ? 'pic-div' : 'pic-div container-sm col'}>
                    <img src={taskGif} alt='gif demonstrating the Task Sandwich site' className='img-fluid' />
                </div>
                <p className={isSmallViewport ? 'my-2 px-5 container-fluid text-center' : 'my-2 px-2 col'}>Task Sandwich is a project managment site with a reward system included. Users can earn reward credits to spend however they agree on spending them for their own real life rewards. Using Apollo GraphQL and MongoDb, we were able to successfully store data (with encryption for passwords) and send data to front end with a viariety of typeDefs and resolvers.</p>
            </div>

            <h2 className='my-4 border-bottom border-light border-2'>"Social Network" Back-End</h2>
            <div id='project-two' className={isSmallViewport ? 'container-fluid' : 'row' }>
                <div className={isSmallViewport ? 'pic-div' : 'pic-div container-sm col'}>
                    <img src={thoughtsGif} alt='gif demonstrating the social network thoughts project' className='img-fluid' />
                </div>
                <p className={isSmallViewport ? 'my-2 px-5 text-center container-fluid' : 'my-2 px-2 col'}>This is a project done to demonstrate my ability to both create a functioning database as well as retrieve, update, add, and delete information in the database from the front end.</p>
            </div>
        </div>
    )
}

export default Projects;