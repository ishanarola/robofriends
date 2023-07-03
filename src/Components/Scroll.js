import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return (
            <div className='scroll'>
                {this.props.children}    
            </div>
        );
    }
}

export default Scroll;