import React from 'react';

let News_Display = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.data}
        </div>
    )
}

export default News_Display;
