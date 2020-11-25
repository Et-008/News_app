import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as Routes from '../../constants/routes/routes';
import News_Display from '../../components/news_display/news_display';
import './side_content.css';

class Side_Content extends Component {
    state = {
        sources: [],
        searchText: '',
        // languages: ['ar', 'de', 'en', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud', 'zh'],
        // countries: [ { name: "Argentina", id: "ar"}, { name: "India", id: "in"}, { name: "United States", id: "us"}, 
        //             { name: "Australia", id: "au"}, { name: "Honk Kong", id: "hk"}, { name: "China", id: "cn"}, 
        //             { name: "Italy", id: "it"}, { name: "Japan", id: "jp"}, { name: "Singapore", id: "sg"} ]
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/sources?apiKey=' + process.env.REACT_APP_API_KEY)
        .then(res => {
            this.setState({sources: res.data.sources})
        }).catch(err => console.error(err));
    }

    inputChangeHandler = (event) => {
        this.setState({searchText: event.target.value});
    }

    render () {
        let OptionalSources = [];
        if (this.state.sources) {
            OptionalSources = this.state.sources.map(source => {
                return (<option key={source.id} value ={source.name}>{source.name}</option>)
            })
        }
        // let OptionalLanguages = this.state.languages.map(lang => {
        //     return (<option key={lang}>{lang}</option>)
        // })
        // let OptionalCountries = this.state.countries.map(country => {
        //     return (<option key={country.id}>{country.name}</option>)
        // })

        return (
            <div className="Side-Content">
                <form className="filter-options">
                    {/* <label> Select Country </label>
                     <select>
                         {OptionalCountries}
                     </select>
                     <label> Select Language </label>
                     <select>
                         {OptionalLanguages}
                     </select> */}
                    <label> Select Source </label>
                    <select>
                        {OptionalSources}
                    </select>
                    <input value={this.state.searchText} onChange={this.inputChangeHandler.bind(this)} type="text"></input>
                    <Link to={'/search/'+ this.state.searchText}>
                        <button>Search</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Side_Content;
