import React from "react";

    const MovieCard = ( props ) => {
    return (
    <div>
        <img src={props?.posterURL} style={{width:'350px'}} alt={props?.title} />
        <h3>{props?.title}</h3>
        <p>{props?.description}</p>
        <p>Rating: {props?.rating}</p>
    </div>
    );
    };
    export default MovieCard;