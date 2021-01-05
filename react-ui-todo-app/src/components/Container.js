import React from 'react';
import Header from './Header';

import '../styles/global.css'

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    render(){
        return(
            <div>
                <Header />
                <div className="container todo-container m-t-header">
                    { this.props.children }
                </div>
            </div>
        );
    }

}

export default Container;