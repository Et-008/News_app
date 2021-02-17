import React, { useState } from 'react';
import Image from './news_image/news_image';
import './news_display.css';

let News_Display = (props) => {
    let [page, setPage] = useState(true);

    let Images = props.Data.map((data, index) => {
        return (
            <Image key={index} ImageSource={data.urlToImage} Data={data} />
        )
    });

    let firstPage = Images.slice(0, 10);
    let secondPage = Images.slice(10, 20);

    let pageChangeHandler = () => {
        if(page === true) {
            setPage(false);
        }
        if(page === false) {
            setPage(true);
        }
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <div className="NewsDisplay">
                {page ? firstPage: secondPage}
                <p>Total Pages: {Images.length/10}</p>
                <button className="ChangePageButton" onClick= {() => pageChangeHandler()}> Change Page </button>
            </div>
        </div>
    )
}

export default News_Display;
