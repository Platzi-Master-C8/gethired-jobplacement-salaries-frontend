import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Salaries from 'Pages/Salaries';
import NotFound from 'Pages/NotFound';

const Routes = () => (
    <BrowserRouter basename="/salaries/">
        <Switch>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Salaries />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
