import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';

//components
import Container from "./components/Container";
import ToDos from "./components/ToDos/ToDos";
import AddEditTodo from "./components/AddEditTodo";

//css files
import 'bootstrap/dist/css/bootstrap.min.css';

//redux config
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/';

const store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store} >
    <HashRouter onUpdate={console.log}>
            <Switch>
                <Container>
                    <Route exact path='/' component={ToDos}/>
                    <Route exact path='/create' component={AddEditTodo}/>
                    <Route exact path='/edit/:taskId' component={AddEditTodo}/>
                </Container>
            </Switch>
    </HashRouter>
</Provider>, document.querySelector("#root"));