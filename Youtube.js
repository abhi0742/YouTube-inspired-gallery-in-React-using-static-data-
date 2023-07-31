import React from "react";

function Youtube(props) {

    return (

        < div className="container" >
            <h2>YouTube <span><img className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png" width="40px" height="40px"></img></span></h2>
            <img src={props.video.Poster} />
            <p>{props.video.Title}</p>
            <h3>Likes:{props.video.likes}</h3>
            <h3>Views:{props.video.Views}</h3>
        </div>
    )
}

export default Youtube