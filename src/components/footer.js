import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return(
            <div>
                <div className="div-one">
                    <div className="img-div">
                        <img src="/img/stayzilla.png" />
                        <span>
                            Yaadhum Oorey. Yaavarum Kaelir.
                        </span>
                    </div>
                    <div className="about">
                        <span>About</span>
                        <div className="terms">Terms and Conditions</div>
                    </div>
                    <div className="support-div">
                        <span>MAIL US AT</span>
                        <div>
                            <img src="/img/mail.png"/>
                            <span className="support">Support@stayzilla.com</span>
                        </div>
                    </div>
                    <div className="call-div">
                        <span>REACH US AT</span>
                        <div>
                            <img src="/img/phone.png"/>
                            <span className="line-two">044-46946000</span>
                        </div>
                    </div>
                </div>
                <div className="div-two">
                    Copyright © 2015 Inasra Technologies Private Limited
                </div>
            </div>
        );
    }
}