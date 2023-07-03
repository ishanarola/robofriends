import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className='pb4'>
               <input
               className='pa2 ba b-green' 
               type="search" 
               placeholder='Search here...'
               onChange={this.props.searchChange}
               />
            </div>
        );
    }
}

export default SearchBox;