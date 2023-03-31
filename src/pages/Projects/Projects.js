import React from 'react';

//image of projects
import bulkProjects from './bulkProjects';

export default function projects() {
    return (
    <div className='bulkProjectsDisplay'>
        {bulkProjects.map((img) => (
        <img key={img} src={img} alt={img} className="bulkProject" />
    
    ))}
    </div>
    );
}





// export default Projects;