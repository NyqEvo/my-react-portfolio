import React, { useState } from "react";

const ContactTab = (props) => {

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
            name="contact"
            value="contact"
            onClick={() => props.setPage('contact')}>Contact
        </li>
    )
}

export default ContactTab;