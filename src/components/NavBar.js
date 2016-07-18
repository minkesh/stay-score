import React, {Component} from 'react';

export default class NavBar extends Component {
    render(){
        return(
            <div className="top">
                <div className="stayzilla-logo">
                    <img src="/img/Extranetlogo.png"/>
                </div>
                <div className="stay-rating">Rating</div>
                <div className="profile">
                    <img src="/img/profile.png" className="pic-circle"/>
                    <span className="caret"/>
                </div>
            </div>
        );
    }
}