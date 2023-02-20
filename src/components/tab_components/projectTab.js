import React, { useState } from "react";

const ProjectTab = (props) => {

    const style1 = {
        backgroundColor: 'white'
    }

    const style2 = {
        backgroundColor: 'grey'
    }

    const [style, setStyle] = useState(style1)

    const tabHovered = () => {
        setStyle(style2)
    }
    const unHovered = () => {
        setStyle(style1)
    }


    return (
        <li
            onMouseEnter={tabHovered}
            onMouseLeave={unHovered}
            style={style}
            className='link'
            name="projects"
            value="projects"
            onClick={() => props.setPage('projects')}>Projects
            </li>
    )
}

export default ProjectTab;