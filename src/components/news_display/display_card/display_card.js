import React from 'react';
import './display_card.css';

let Display_Card = (props) => {
    let Classes = ["DisplayCard", props.Display]
    return (
    <div className={Classes.join(' ')}>
        <p onClick={props.CloseDisplay} className="CloseButton">X</p>
        <img className="CardImage" src={props.Data.urlToImage ? props.Data.urlToImage : 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png'}
         alt="Not Loaded"/>
        <div className="CardData">
            <h2 className="CardTitle">{props.Data.title}</h2>
            <h4 className="CardDesc">{props.Data.description}</h4>
            <p className="CardContent">{props.Data.content}</p>
            
            <footer className="Footer">
                <button className="LinkButton"><a href={props.Data.url} target="_blank" rel="noopener noreferrer">Open Link</a></button>
                <p>{props.Data.author}</p>
            </footer>
        </div>
    </div>
    )
}

export default Display_Card;