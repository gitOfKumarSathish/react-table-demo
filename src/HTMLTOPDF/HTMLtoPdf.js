import React, { Component, PropTypes } from 'react';
import { jsPDF } from "jspdf";
import MockJson from './mockData.json'


export default class HTMLtoPdf extends Component {
    constructor(props) {
        console.log('MockJson', MockJson)
        super(props);
    }

    printDocument() {

        // Default export is a4 paper, portrait, using millimeters for units
        const doc = new jsPDF();
        const a = document.getElementById('capture')
        doc.text(`${<h4>Hello world!</h4>}`, 10, 10);
        doc.save("a4.pdf");
    }

    render() {
        for (const key in MockJson) {
            if (Object.hasOwnProperty.call(MockJson, key)) {
                const element = MockJson[key];
                if (key === 'traffic_details') {
                    console.log('elements', element)
                    for (const innerLoop in element) {
                        if (Object.hasOwnProperty.call(element, innerLoop)) {
                            const eachloopData = element[innerLoop];
                            console.log('eachloopData', eachloopData)
                            return (
                                <div class="container">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                {console.log('innerLoop', innerLoop)}
                                                <th>{innerLoop}</th>
                                            </tr>
                                        </thead>
                                       
                                    </table>
                                </div>
                            )
                        }
                    }
                }

            }
        }
        return (
            <div>
                <div className="mb5">
                    <button onClick={this.printDocument}>Print</button>
                </div>
                <div id="capture">
                    <h4>Hello world!</h4>
                </div>
            </div>);
    }
}