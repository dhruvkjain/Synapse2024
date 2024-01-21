import React from "react";

import downarrow from "../../assets/down-arrow.png";

function ScrollToBottom() {
    function scrollToBottom () {
        window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    }
    return (
        <div className="scrolltobottom" >
            <img src={downarrow} onClick={scrollToBottom}></img>
        </div>
    )
}

export default ScrollToBottom;