import React, { Component } from 'react';
import axios from 'axios';
import NewsDisplay from "../../components/news_display/news_display";

class Search_Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            headlines: [],
            country: 'in',
            category: '',
        }
    }

    componentDidMount () {
        console.log(this.props)
        let query = 'q='+ this.props.match.params.Q +'&';
        let source = 'source=' +this.props.location.state.Source+ '&'
        let sort = 'sortBy='+this.props.location.state.SortBy+ '&';
        let everything = axios.get('https://newsapi.org/v2/everything?'+ query + source + sort +'apiKey=' + process.env.REACT_APP_API_KEY)
        let top_headlines = axios.get('https://newsapi.org/v2/top-headlines?'+ query + source + sort +'apiKey=' + process.env.REACT_APP_API_KEY)
        
        Promise.all([everything, top_headlines])
        .then(res => {
                let everythingArr = res[0].data.articles;
                let everythingFilteredArr = everythingArr.filter((item,index,self) => self.indexOf(item)===index);
                let headlinesArr = res[1].data.articles;
                let headlinesFilteredArr = headlinesArr.filter((item,index,self) => self.indexOf(item)===index);
                this.setState({searchResults: everythingFilteredArr})
                this.setState({headlines: headlinesFilteredArr})
        })
    }

    componentDidUpdate (prevProps) {
        console.log(this.props)
        let query = 'q='+ this.props.match.params.Q +'&';
        let source = 'source=' +this.props.location.state.Source+ '&'
        let sort = 'sortBy='+this.props.location.state.SortBy+ '&';
        if(prevProps.match.params.Q !== this.props.match.params.Q) {
            let everything = axios.get('https://newsapi.org/v2/everything?'+ query + source + sort +'apiKey=' + process.env.REACT_APP_API_KEY)
            let top_headlines = axios.get('https://newsapi.org/v2/top-headlines?'+ query + source + sort +'apiKey=' + process.env.REACT_APP_API_KEY)
            
            Promise.all([everything, top_headlines])
            .then(res => {
                let everythingArr = res[0].data.articles;
                let everythingFilteredArr = everythingArr.filter((item,index,self) => self.indexOf(item)===index);
                let headlinesArr = res[1].data.articles;
                let headlinesFilteredArr = headlinesArr.filter((item,index,self) => self.indexOf(item)===index);
                this.setState({searchResults: everythingFilteredArr})
                this.setState({headlines: headlinesFilteredArr})
            })
        }
    }

    render() {
        let allNews = this.state.searchResults ? (this.state.searchResults.map((data, index) => {
            return (<img key={index} className="Images" src={data.urlToImage ? data.urlToImage : 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png'} alt="Not Loaded" />)
        })) : {title: "Search Results",
                data: ""}
        let topNews = this.state.headlines ? (this.state.headlines.map((data, index) => {
            return (<img key={index} className="Images" src={data.urlToImage ? data.urlToImage : 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png'} alt="Not Loaded" />)
        })) : {title: "Search Results",
                data: ""}
        return (
            <div className="Main">
                <NewsDisplay title={"TOP-HEADLINES"} data={topNews} />
                <NewsDisplay title={"EVERYTHING"} data={allNews} />
            </div>
        )
    }
}

export default Search_Results;
