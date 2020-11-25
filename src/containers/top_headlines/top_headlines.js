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
            this.setState({country: 'in'});
        }).catch(err => console.error(err))
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.location.state && this.props.match.params) {
            if(this.props.location.state.country || this.props.match.params.CATEGORY) {
                if (this.props.location.state.country !== prevProps.location.state.country || this.props.match.params.CATEGORY !== prevProps.match.params.CATEGORY) {
                    this.setState({country: this.props.location.state.country})
                    let category = this.props.match.params.CATEGORY ? this.props.match.params.CATEGORY : '';
                    axios.get('https://newsapi.org/v2/top-headlines?country='+ this.props.location.state.country +'&category='+ category +'&apiKey=' + process.env.REACT_APP_API_KEY)
                    .then(res => {
                        this.setState({headlines: res.data.articles})
                    }).catch(err => console.error(err))
                }
            }
        }
    }

    render() {
        let data = [];
        if(this.state.headlines) {
            data = this.state.headlines;
        };
        return (
            <div className="Main">
                <News_Display title={this.props.match.params.CATEGORY ? (this.props.match.params.CATEGORY).toUpperCase() : "TOP-HEADLINES"} Data={data} />
            </div>
        )
    }
}

export default News_Content;

