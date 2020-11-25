import React, { Component } from 'react';
import axios from 'axios';
import News_Display from "../../components/news_display/news_display";
import './top_headlines.css';

class News_Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headlines: [],
            country: 'in',
            category: '',
        }
    }

    componentDidMount () {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category=&apiKey=' + process.env.REACT_APP_API_KEY)
        .then(res => {
            this.setState({headlines: res.data.articles})
        }).catch(err => console.error(err))
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.CATEGORY!== prevProps.match.params.CATEGORY) {
            let category = this.props.match.params.CATEGORY ? this.props.match.params.CATEGORY : '';
            axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+ category +'&apiKey=' + process.env.REACT_APP_API_KEY)
            .then(res => {
                this.setState({headlines: res.data.articles})
            }).catch(err => console.error(err))
        }
    }

    render() {
        let news = this.state.headlines.map(data => {
            return (<img key={data.title} className="Images" src={data.urlToImage ? data.urlToImage : 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png'} alt="Not Loaded" />)
        })
        // console.log(this.props.match.params.CATEGORY);
        return (
            <div className="Main">
                <News_Display title={this.props.match.params.CATEGORY ? (this.props.match.params.CATEGORY).toUpperCase() : "TOP-HEADLINES"} data={news} />
            </div>
        )
    }
}

export default News_Content;

