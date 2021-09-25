import React from 'react'
import {FaWhatsapp} from "react-icons/fa"
function Fab() {
    return (
        <a href="https://api.whatsapp.com/send?phone=919123456789" className="whatsapp_btn">
                        <FaWhatsapp/>
            </a>
    )
}

export default Fab
