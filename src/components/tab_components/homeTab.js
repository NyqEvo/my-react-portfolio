import React, { useState } from "react";

const HomeTab = (props) => {

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
            name="home"
            value="home"
            onClick={() => props.setPage('home')}>Home
        </li>
    )
}

export default HomeTab;