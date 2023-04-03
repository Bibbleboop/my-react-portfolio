/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
// import projectCard from './projectCard';
import { useParams } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import projectData from './projects.json';

// function projectCard() {

export default function projectCard() {
    const [currentPage, setCurrentPage] useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About/>;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
    }

}
    // const [projectArray] = useState(projectData);
    // eslint-disable-next-line no-undef
    array.forEach(element => {
        let project = projectData.find((p) => p.id === parseInt(id));
    });
    // console.log(projects);
    // console.log(project);
}
// SECTION NEEDS CHANGING


// export default projectCard;