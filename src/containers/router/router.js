import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from '../../components/layout/layout';
import SideContent from '../../components/side_content/side_content';
import * as Routes from "../../constants/routes/routes";
import HeadLines from '../top_headlines/top_headlines';
import Search_Results from '../search_results/search_results';

let Router = (props) => {
    let [country, setCountry] = useState('in');
    let changeCountry = (event) => {
        setCountry(event.target.value)
    }
    return (
        <Layout CountryChangedHandler={(event) => changeCountry(event)}>
          <SideContent />
            <Switch>
                <Route path={Routes.HOME} exact component={HeadLines} />
                <Route path={'/top-headlines/:CATEGORY' } exact component={HeadLines} />
                <Route path={'/search/:Q'} exact component={Search_Results} />
            </Switch>
        </Layout>
    )
}

export default Router;
