
import React from 'react';


export default class Speaker extends React.Component {
    render() {
        return (
            <div className="Speaker">
                <img src={this.props.image} alt="speaker"/>
                <p>{this.props.text}</p>
            </div>
        );
    }
}
