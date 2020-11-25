import React from 'react';
import Image from './news_image/news_image';

let News_Display = (props) => {

    let Images = props.Data.map((data, index) => {
        return (
            <Image key={index} ImageSource={data.urlToImage} Data={data} />
        )
    })
    return (
        <div>
            <h1>{props.title}</h1>
            {Images}
        </div>
    )
}

export default News_Display;
