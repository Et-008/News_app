import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as Routes from '../../constants/routes/routes';
import './side_content.css';

class Side_Content extends Component {
    state = {
        sources: [All],
        source: '',
        searchText: null,
        sortBy: 'publishedAt',
        
        sortingOptions: [{PublishedAt: 'publishedAt'},
                        {Relevant: 'relevancy'},
                        {Popular: 'popularity'}]
    }


    componentDidMount() {
        axios.get('https://newsapi.org/v2/sources?apiKey=' + process.env.REACT_APP_API_KEY)
        .then(res => {
            this.setState({sources: res.data.sources})
            this.setState({source: res.data.sources[0].name})
        }).catch(err => console.error(err));
    }

    inputChangeHandler = (event) => {
        this.setState({searchText: event.target.value});
    }
    SourceChangeHandler = (event) => {
        this.setState({source: event.target.value});
    }
    SortByChangeHandler = (event) => {
        this.setState({sortBy: event.target.value});
    }

    render () {
        let OptionalSources = [];
        let SortByOptions = [];
        if (this.state.sources) {
            OptionalSources = this.state.sources.map(source => {
                return (<option key={source.id} value ={source.name}>{source.name}</option>)
            })
        }
        if (this.state.sortingOptions) {
            SortByOptions = this.state.sortingOptions.map(options => {
                let Key = Object.keys(options)[0];
                return (<option key={Key} value ={options[Key]}>{Key}</option>)
            })
        }

        return (
            <div className="Side-Content">
                <form className="filter-options">
                    <input value={this.state.searchText} onChange={this.inputChangeHandler.bind(this)} type="text"></input>
                    <div>
                    <label> Select Source </label>
                    <select onChange={this.SourceChangeHandler.bind(this)} >
                        {OptionalSources}
                    </select>
                    </div>
                    <div>
                    <label> Sort By </label>
                    <select onChange={this.SortByChangeHandler.bind(this)}>
                        {SortByOptions}
                    </select>
                    </div>
                    <Link to={
                        {
                            pathname:'/search/'+ this.state.searchText,
                            state: {
                                Source: this.state.source,
                                SortBy: this.state.sortBy
                            }
                        }
                            }>
                        <button>Search</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Side_Content;
