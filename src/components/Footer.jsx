import React from "react";

const Footer = () => {
    const currentYear = new Date();
    return <footer>
        <p>Copyright © {currentYear.getFullYear()}</p>
    </footer>
}

export default Footer;