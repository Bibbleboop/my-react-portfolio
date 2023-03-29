/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom';
import { useState } from "react";
import React from "react";
import project from './projects.json'
import projectCard from '../../projectCard';
import projectData from './projects.json'
// import project1 from '../../assets/portfolio/JSF Just Search Films.png';
// import project2 from '../../assets/portfolio/Random Password Generator.png';
// import project3 from '../../assets/portfolio/Scheduler Planner.png';
// import project4 from '../../assets/portfolio/Bootstrap Portfolio.png';
// import project5 from '../../assets/portfolio/image5.jpg';
// import projectData from '../Projects/projects.json';

function Projects() {
    // let [projects, ] = useState(projectData);
    let [projects, setProjects] = useState(projectData);
    return (
        <div>
        <container>
            {projects.map((project) => (
            <div className='item-container'>
                {/* <Link to="/src/pages/Projects/Projects.js" */}
            <projectCard>
            id={project.id}
            image={project.image}
            title={project.title}
            github={project.github} </projectCard> 
            </div>
            ))}

        </container>
        </div> );
}






export default Projects;