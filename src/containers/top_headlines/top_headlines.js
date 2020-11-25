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

    // componentWillReceiveProps(this.props.location.state.country) {
    //     this.setState({country: this.props.location.state.country})
    // }
    componentDidMount () {
        if(this.props.location.state.country!== 'in') {
            this.setState({country: this.props.location.state.country})
        }
        axios.get('https://newsapi.org/v2/top-headlines?country='+ this.props.location.state.country +'&category=&apiKey=' + process.env.REACT_APP_API_KEY)
        .then(res => {
            this.setState({headlines: res.data.articles})
        }).catch(err => console.error(err))
    }

    componentDidUpdate(prevProps) {
        if(this.props.location.state.country !== prevProps.location.state.country || this.props.match.params.CATEGORY!== prevProps.match.params.CATEGORY) {
            this.setState({country: this.props.location.state.country})
            let category = this.props.match.params.CATEGORY ? this.props.match.params.CATEGORY : '';
            axios.get('https://newsapi.org/v2/top-headlines?country='+ this.props.location.state.country +'&category='+ category +'&apiKey=' + process.env.REACT_APP_API_KEY)
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

