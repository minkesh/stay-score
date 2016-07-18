import React, {Component} from 'react';

export default class Results extends Component {
    render(){
        return (
            <div className="result-div">
                <div className="param-table-div">
                    <table>
                        <tr className="top-row">
                            <td>
                                <span className="field-one">
                                    Stay Parameters
                                </span>
                                <span className="field-two">
                                    Value
                                </span>
                                <span className="field-three">
                                    Weight
                                </span>
                            </td>
                        </tr>
                        <tr >
                            <td className="data-row">
                                <span className="field-one">
                                    Number of rooms
                                </span>
                                <span className="field-two">
                                    2
                                </span>
                                <span className="field-three">
                                    0.44
                                </span>
                            </td>

                        </tr>

                    </table>
                </div>
                <div className="circle">
                    <span className="bold-label">Probability </span>
                    <span className="label">of getting a booking</span>
                    <span className="value"> 31%</span>
                </div>
                </div>
        );
    }
}
