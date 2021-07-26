import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Page from './common/Page';
import Login from './components/login/Login';
import Index from './Index';
import HomeWrap from './components/HomeWrap';
import Admins from './components/admin/Admins';
import AdminEdit from "./components/admin/AdminEdit";
import Roles from "./components/admin/Roles";
import RoleEdit from "./components/admin/RoleEdit";
import Stream from './components/stream/Stream';
import Home from './components/home/Home';

const routes = (
    <HashRouter>
        <Switch>
            <Route path='/' children={() => (
                <Page>
                    <Index >

                        <Switch>
                            <Route path='/login' exact component={Login} />

                            <Route  children={() => (
                                <Switch>
                                    <Route path={'/app/streaming/home'} exact component={Home} />
                                    <Route path={'/app/streaming/stream'} component={Stream} />
                                    <Redirect  path='/' to='/app/streaming/home' />

                                </Switch>
                        )} />
                        </Switch>
                    </Index>
                </Page>
            )}>
            </Route>
        </Switch>
    </HashRouter>
);


export default routes;
