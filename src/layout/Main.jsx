import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import routes from '../routes';
import {withRouter} from 'react-router-dom';

class Main extends Component {
    componentDidUpdate(e) {
        if (e.history.action === "PUSH") {
            document.documentElement.scrollTop = 0;
            this.container.scrollTop = 0;
        }
    }

    render() {
        return (
            <main className="content-wrapper" ref={container => this.container = container}>
                <Switch>
                    {routes.map((route, key) => {
                        if (!route.redirect) {
                            return <Route path={route.path} component={route.component} key={key} />
                        }

                        return (
                            <Redirect to={route.redirectTo} key={key} />
                        )
                    })}

                </Switch>
            </main>
        );
    }
}

export default withRouter(Main);