import React, { useState } from 'react';
import DisplayCard from '../display_card/display_card';
import './news_image.css';

let News_Images = (props) => {
    let [display, setDisplay] = useState('hide');
    let handleNewsClick = () => {
        if(display == 'hide') {
            setDisplay('show')
        }
        if(display == 'show') {
            setDisplay('hide')
        }
    }
    return (
        <div className="NewsData">
            <img className="Images"
            onClick={handleNewsClick}
            src={props.ImageSource ? props.ImageSource : 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png'}
            alt="Not Loaded" />
            <DisplayCard CloseDisplay={handleNewsClick} Display={display} Data={props.Data} />
        </div>
    )
}
export default News_Images;