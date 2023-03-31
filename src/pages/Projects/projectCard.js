/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
// import projectCard from './projectCard';
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import projectData from './projects.json'


function ProjectDetails() {
    const { id } = useParams();
    // eslint-disable-next-line no-undef
    array.forEach(element => {
        let project = projectData.find((p) => p.id === parseInt(id));
    });
    // console.log(projects);
    // console.log(project);
}
// SECTION NEEDS CHANGING


export default projectCard;