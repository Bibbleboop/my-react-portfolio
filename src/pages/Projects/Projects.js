import { useState } from "react";
// import React from "react";
import project1 from '../../assets/portfolio/JSF Just Search Films.png';
import project2 from '../../assets/portfolio/Random Password Generator.png';
import project3 from '../../assets/portfolio/Scheduler Planner.png';
import project4 from '../../assets/portfolio/Bootstrap Portfolio.png';
// import project5 from '../../assets/portfolio/image5.jpg';

function Projects() {
    let data=[
        {
            id: 1,
            image: project1,
            title: 'JSF Just Search Films',
            github: 'https://github.com/Bibbleboop/Just-Search-Films'
        },
        {
            id: 2,
            image: project2,
            title: 'Random Password Generator',
            github: 'https://github.com/Bibbleboop/Password-Generator-Module-5-Challenge'
        },
        {
            id: 3,
            image: project3,
            title: 'Scheduler Planner',
            github: 'https://github.com/Bibbleboop/Daily-Planner-App'
        },
        {
            id: 4,
            image: project4,
            title: 'Bootstrap Portfolio',
            github: 'https://github.com/Bibbleboop/Bootstrap-Portfolio'
        },
        // {
        //     id: 1,
        //     image: project1,
        //     title: 'JSF Just Search Films',
        //     github: 'https://github.com/Bibbleboop/Just-Search-Films'
        // },
    ]
};





export default Projects;