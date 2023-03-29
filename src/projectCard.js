/* eslint-disable no-unused-vars */
import React from "react";
import projectCard from '../src/projectCard';
import { useParams } from "react-router-dom";
import projects from '../src/pages/Projects/projects.json';



function ProjectDisplay() {
     const { id } = useParams();
    let project = projects.find((p) => p.id === parseInt(id));
    // console.log(projects);
    // console.log(project);
}
// SECTION NEEDS CHANGING


export default projectCard;