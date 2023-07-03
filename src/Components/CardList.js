import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
    render() {
        // For testing error boundries
        // if(true){
        //     throw new Error("nooooo");
        // }
        const cardsArray=this.props.robots.map((robot)=>{
            return <Card key={robot.id} robot={robot} />
           })
        return (
            <div>
                 {cardsArray}
            </div>
        );
    }
}

export default CardList;