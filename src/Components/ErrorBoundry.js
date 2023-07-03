import React, { Component } from 'react';

class Error extends Component {
    state={
        hasError:false
    }
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render() {
        let {hasError}=this.state;
        if(hasError){
            return (
                <h1>Oops! This is not good..</h1>
            );
        }
        return this.props.children
    }
}

export default Error;