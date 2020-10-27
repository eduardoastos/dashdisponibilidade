import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Checklist from '../pages/CheckList/index';
import Maintenance from '../pages/Maintenance/index';


export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Checklist} />
            <Route path="/manutencoes" component={Maintenance} />
            {/* <Route path="/manutencoes" exact component={Maintenance} /> */}
        </Switch>
    );

}