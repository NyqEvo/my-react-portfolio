import React, { useState } from "react";

const ContactTab = (props) => {

    const style1 = {
        backgroundColor: 'blue'
    }

    const style2 = {
        backgroundColor: 'red'
    }

    const [style, setStyle] = useState(style1)

    // state hook that keeps track of the style
    // the current state will be the style you want for all buttons
    // onMouseEnter setState to style2
    // apply the style to that element

    // onMouseLeave setState to style1
    //
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