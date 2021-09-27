import React from 'react';

function Footer(){
    let footerStyle = {
        position: "absolute",
        top: "100vh",
        width: "100%",
        border: "2px solid red"
    }
    return(
        <div className="bg-dark text-light py-3">
            <p className="text-center">
                Copyright &copy; MyBlogList.com
            </p>
        </div>
    )
}

export default Footer;