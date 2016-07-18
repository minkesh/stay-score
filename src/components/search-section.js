import React, {Component} from 'react';
import {form, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import Request from 'superagent';

var response = {};

export default class Search extends Component {
    constructor() {
        super();
        this.state = {hid: ''}
    }

    handleSubmit(e){
        Request.get('http://ec2-52-41-2-132.us-west-2.compute.amazonaws.com:3100/29915')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
            .end((err, res) =>{
            console.log(res, err)
        })

    }


    render(){
        return(
            <div className="search-div">
                <div className="label-HID">
                    HID
                </div>
                <div className="search-bar">
                    <form>
                        <FormGroup>
                            <InputGroup>
                                <FormControl bsClass="input-box" type="text" onChange={(e) => {this.setState({ hid: e.target.value });}}/>
                                <InputGroup.Button>
                                    <Button bsClass="button" onClick={this.handleSubmit.bind(this)}>GO</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </form>

                </div>

                <div className="property-details ">
                    <img src="/img/property.png" className="picture"/>
                    <span className="label-name">Art House</span>
                    <div className="link">
                        <a href="stayzilla.com">View Property Page</a>
                    </div>
                </div>
            </div>
        )
    }
}
