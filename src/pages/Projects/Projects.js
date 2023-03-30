import React from 'react';

//images of projects
import bulkImages from './bulkImages';

export default function Projects() {
    return (
    <div className='bulkImagesDisplay'>
        {bulkImages.map((img) => (
        <img key={img} src={img} alt={img} className="bulkImage" />
    
    ))}
    </div>
    );
}





// export default Projects;