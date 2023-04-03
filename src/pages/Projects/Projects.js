import React, { useState } from 'react';
//image of projects
import bulkProjects from './bulkProjects';
import projectData from './projects.json'
import projectCard from './projectCard';

function projects() {
    let [projectsArray] = useState(projectData)

    return
    <div className='layout'>
        <section className="projectsData"> 
        {projectsArray.map(props) => (
            <projectCard
            id={props.id}
            title={props.title}
            image={props.image}
            github={props.github}
            />
        ))
        
        </section>
    </div>
    
};




{/* // // export default function projects() { */}
{/* //     return (
//     <div className='bulkProjectsDisplay'>
//         {bulkProjects.map((img) => ( */}
{/* //         <img key={img} src={img} alt={img} className="bulkProject" />
    
//     ))}
//     </div>
//     );
// } */}





export default projects;