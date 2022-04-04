import React, { Component } from 'react'
import MOCK_DATA from './../components/MOCK_DATA.json'

import $ from 'jquery';
import DataTable from 'datatables.net';

const data = MOCK_DATA

export default class JqueryTable extends Component {

    componentDidMount() {
        this.clickHandler();
    }
    clickHandler = () => {
        console.log(data)
        $(document).ready(function () {
            var table = $('#example').DataTable({
                columnDefs: [{
                    orderable: false,
                    targets: [1, 2, 3]
                }]
            });
            console.log('table',table)
            $('button').click(function () {
                var formData = JSON.parse(JSON.stringify(table.$('input, select').serializeArray())) // store json object

                console.log('data.substr(0, 120)', formData)
                return false;
            });
        });
    }
    render() {
        return (
            <div>
                <button type="submit">Submit form</button>
                <table id="example" class="display">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Office</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td><input type="text" id="row-1-age" name="row-1-age" defaultValue="61" /></td>
                            <td><input type="text" id="row-1-position" name="row-1-position" defaultValue="System Architect" /></td>
                            <td><select size="1" id="row-1-office" name="row-1-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Garrett Winters</td>
                            <td><input type="text" id="row-2-age" name="row-2-age" defaultValue="63" /></td>
                            <td><input type="text" id="row-2-position" name="row-2-position" defaultValue="Accountant" /></td>
                            <td><select size="1" id="row-2-office" name="row-2-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo" selected="selected">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Ashton Cox</td>
                            <td><input type="text" id="row-3-age" name="row-3-age" defaultValue="66" /></td>
                            <td><input type="text" id="row-3-position" name="row-3-position" defaultValue="Junior Technical Author" /></td>
                            <td><select size="1" id="row-3-office" name="row-3-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Cedric Kelly</td>
                            <td><input type="text" id="row-4-age" name="row-4-age" defaultValue="22" /></td>
                            <td><input type="text" id="row-4-position" name="row-4-position" defaultValue="Senior Javascript Developer" /></td>
                            <td><select size="1" id="row-4-office" name="row-4-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Airi Satou</td>
                            <td><input type="text" id="row-5-age" name="row-5-age" defaultValue="33" /></td>
                            <td><input type="text" id="row-5-position" name="row-5-position" defaultValue="Accountant" /></td>
                            <td><select size="1" id="row-5-office" name="row-5-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo" selected="selected">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Brielle Williamson</td>
                            <td><input type="text" id="row-6-age" name="row-6-age" defaultValue="61 " /></td>
                            <td><input type="text" id="row-6-position" name="row-6-position" defaultValue="Integration Specialist" /></td>
                            <td>
                                <select size="1" id="row-6-office" name="row-6-office">
                                    <option defaultValue="Edinburgh">
                                        Edinburgh
                                    </option>
                                    <option defaultValue="London">
                                        London
                                    </option>
                                    <option defaultValue="New York" selected="selected">
                                        New York
                                    </option>
                                    <option defaultValue="San Francisco">
                                        San Francisco
                                    </option>
                                    <option defaultValue="Tokyo">
                                        Tokyo
                                    </option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Herrod Chandler</td>
                            <td><input type="text" id="row-7-age" name="row-7-age" defaultValue="59 " /></td>
                            <td><input type="text" id="row-7-position" name="row-7-position" defaultValue="Sales Assistant " /></td>
                            <td><select size="1" id="row-7-office" name="row-7-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Rhona Davidson</td>
                            <td><input type="text" id="row-8-age" name="row-8-age" defaultValue="55" /></td>
                            <td><input type="text" id="row-8-position" name="row-8-position" defaultValue="Integration Specialist" /></td>
                            <td><select size="1" id="row-8-office" name="row-8-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo" selected="selected">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Colleen Hurst</td>
                            <td><input type="text" id="row-9-age" name="row-9-age" defaultValue="39 " /></td>
                            <td><input type="text" id="row-9-position" name="row-9-position" defaultValue="Javascript Developer " /></td>
                            <td><select size="1" id="row-9-office" name="row-9-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Sonya Frost</td>
                            <td><input type="text" id="row-10-age" name="row-10-age" defaultValue="23 " /></td>
                            <td><input type="text" id="row-10-position" name="row-10-position" defaultValue="Software Engineer " /></td>
                            <td><select size="1" id="row-10-office" name="row-10-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Jena Gaines</td>
                            <td><input type="text" id="row-11-age" name="row-11-age" defaultValue="30 " /></td>
                            <td><input type="text" id="row-11-position" name="row-11-position" defaultValue="Office Manager " /></td>
                            <td><select size="1" id="row-11-office" name="row-11-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Quinn Flynn</td>
                            <td><input type="text" id="row-12-age" name="row-12-age" defaultValue="22 " /></td>
                            <td><input type="text" id="row-12-position" name="row-12-position" defaultValue="Support Lead " /></td>
                            <td><select size="1" id="row-12-office" name="row-12-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Charde Marshall</td>
                            <td><input type="text" id="row-13-age" name="row-13-age" defaultValue="36 " /></td>
                            <td><input type="text" id="row-13-position" name="row-13-position" defaultValue="Regional Director " /></td>
                            <td><select size="1" id="row-13-office" name="row-13-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Haley Kennedy</td>
                            <td><input type="text" id="row-14-age" name="row-14-age" defaultValue="43 " /></td>
                            <td><input type="text" id="row-14-position" name="row-14-position" defaultValue="Senior Marketing Designer " /></td>
                            <td><select size="1" id="row-14-office" name="row-14-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Tatyana Fitzpatrick</td>
                            <td><input type="text" id="row-15-age" name="row-15-age" defaultValue="19 " /></td>
                            <td><input type="text" id="row-15-position" name="row-15-position" defaultValue="Regional Director " /></td>
                            <td><select size="1" id="row-15-office" name="row-15-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Michael Silva</td>
                            <td><input type="text" id="row-16-age" name="row-16-age" defaultValue="66 " /></td>
                            <td><input type="text" id="row-16-position" name="row-16-position" defaultValue="Marketing Designer " /></td>
                            <td><select size="1" id="row-16-office" name="row-16-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Paul Byrd</td>
                            <td><input type="text" id="row-17-age" name="row-17-age" defaultValue="64 " /></td>
                            <td><input type="text" id="row-17-position" name="row-17-position" defaultValue="Chief Financial Officer (CFO) " /></td>
                            <td><select size="1" id="row-17-office" name="row-17-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Gloria Little</td>
                            <td><input type="text" id="row-18-age" name="row-18-age" defaultValue="59 " /></td>
                            <td><input type="text" id="row-18-position" name="row-18-position" defaultValue="Systems Administrator " /></td>
                            <td><select size="1" id="row-18-office" name="row-18-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Bradley Greer</td>
                            <td><input type="text" id="row-19-age" name="row-19-age" defaultValue="41 " /></td>
                            <td><input type="text" id="row-19-position" name="row-19-position" defaultValue="Software Engineer " /></td>
                            <td><select size="1" id="row-19-office" name="row-19-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Dai Rios</td>
                            <td><input type="text" id="row-20-age" name="row-20-age" defaultValue="35 " /></td>
                            <td><input type="text" id="row-20-position" name="row-20-position" defaultValue="Personnel Lead " /></td>
                            <td><select size="1" id="row-20-office" name="row-20-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Jenette Caldwell</td>
                            <td><input type="text" id="row-21-age" name="row-21-age" defaultValue="30 " /></td>
                            <td><input type="text" id="row-21-position" name="row-21-position" defaultValue="Development Lead " /></td>
                            <td><select size="1" id="row-21-office" name="row-21-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Yuri Berry</td>
                            <td><input type="text" id="row-22-age" name="row-22-age" defaultValue="40 " /></td>
                            <td><input type="text" id="row-22-position" name="row-22-position" defaultValue="Chief Marketing Officer (CMO) " /></td>
                            <td><select size="1" id="row-22-office" name="row-22-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Caesar Vance</td>
                            <td><input type="text" id="row-23-age" name="row-23-age" defaultValue="21 " /></td>
                            <td><input type="text" id="row-23-position" name="row-23-position" defaultValue="Pre-Sales Support " /></td>
                            <td><select size="1" id="row-23-office" name="row-23-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Doris Wilder</td>
                            <td><input type="text" id="row-24-age" name="row-24-age" defaultValue="23 " /></td>
                            <td><input type="text" id="row-24-position" name="row-24-position" defaultValue="Sales Assistant " /></td>
                            <td><select size="1" id="row-24-office" name="row-24-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Angelica Ramos</td>
                            <td><input type="text" id="row-25-age" name="row-25-age" defaultValue="47 " /></td>
                            <td><input type="text" id="row-25-position" name="row-25-position" defaultValue="Chief Executive Officer (CEO) " /></td>
                            <td><select size="1" id="row-25-office" name="row-25-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Gavin Joyce</td>
                            <td><input type="text" id="row-26-age" name="row-26-age" defaultValue="42 " /></td>
                            <td><input type="text" id="row-26-position" name="row-26-position" defaultValue="Developer " /></td>
                            <td><select size="1" id="row-26-office" name="row-26-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Jennifer Chang</td>
                            <td><input type="text" id="row-27-age" name="row-27-age" defaultValue="28 " /></td>
                            <td><input type="text" id="row-27-position" name="row-27-position" defaultValue="Regional Director " /></td>
                            <td><select size="1" id="row-27-office" name="row-27-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Brenden Wagner</td>
                            <td><input type="text" id="row-28-age" name="row-28-age" defaultValue="28 " /></td>
                            <td><input type="text" id="row-28-position" name="row-28-position" defaultValue="Software Engineer " /></td>
                            <td><select size="1" id="row-28-office" name="row-28-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Fiona Green</td>
                            <td><input type="text" id="row-29-age" name="row-29-age" defaultValue="48 " /></td>
                            <td><input type="text" id="row-29-position" name="row-29-position" defaultValue="Chief Operating Officer (COO) " /></td>
                            <td><select size="1" id="row-29-office" name="row-29-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Shou Itou</td>
                            <td><input type="text" id="row-30-age" name="row-30-age" defaultValue="20 " /></td>
                            <td><input type="text" id="row-30-position" name="row-30-position" defaultValue="Regional Marketing " /></td>
                            <td><select size="1" id="row-30-office" name="row-30-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo" selected="selected">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Michelle House</td>
                            <td><input type="text" id="row-31-age" name="row-31-age" defaultValue="37 " /></td>
                            <td><input type="text" id="row-31-position" name="row-31-position" defaultValue="Integration Specialist " /></td>
                            <td><select size="1" id="row-31-office" name="row-31-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Suki Burks</td>
                            <td><input type="text" id="row-32-age" name="row-32-age" defaultValue="53 " /></td>
                            <td><input type="text" id="row-32-position" name="row-32-position" defaultValue="Developer " /></td>
                            <td><select size="1" id="row-32-office" name="row-32-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Prescott Bartlett</td>
                            <td><input type="text" id="row-33-age" name="row-33-age" defaultValue="27 " /></td>
                            <td><input type="text" id="row-33-position" name="row-33-position" defaultValue="Technical Author " /></td>
                            <td><select size="1" id="row-33-office" name="row-33-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Gavin Cortez</td>
                            <td><input type="text" id="row-34-age" name="row-34-age" defaultValue="22 " /></td>
                            <td><input type="text" id="row-34-position" name="row-34-position" defaultValue="Team Leader " /></td>
                            <td><select size="1" id="row-34-office" name="row-34-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Martena Mccray</td>
                            <td><input type="text" id="row-35-age" name="row-35-age" defaultValue="46 " /></td>
                            <td><input type="text" id="row-35-position" name="row-35-position" defaultValue="Post-Sales support " /></td>
                            <td><select size="1" id="row-35-office" name="row-35-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Unity Butler</td>
                            <td><input type="text" id="row-36-age" name="row-36-age" defaultValue="47 " /></td>
                            <td><input type="text" id="row-36-position" name="row-36-position" defaultValue="Marketing Designer " /></td>
                            <td><select size="1" id="row-36-office" name="row-36-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Howard Hatfield</td>
                            <td><input type="text" id="row-37-age" name="row-37-age" defaultValue="51 " /></td>
                            <td><input type="text" id="row-37-position" name="row-37-position" defaultValue="Office Manager " /></td>
                            <td><select size="1" id="row-37-office" name="row-37-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Hope Fuentes</td>
                            <td><input type="text" id="row-38-age" name="row-38-age" defaultValue="41 " /></td>
                            <td><input type="text" id="row-38-position" name="row-38-position" defaultValue="Secretary " /></td>
                            <td><select size="1" id="row-38-office" name="row-38-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Vivian Harrell</td>
                            <td><input type="text" id="row-39-age" name="row-39-age" defaultValue="62 " /></td>
                            <td><input type="text" id="row-39-position" name="row-39-position" defaultValue="Financial Controller " /></td>
                            <td><select size="1" id="row-39-office" name="row-39-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Timothy Mooney</td>
                            <td><input type="text" id="row-40-age" name="row-40-age" defaultValue="37 " /></td>
                            <td><input type="text" id="row-40-position" name="row-40-position" defaultValue="Office Manager " /></td>
                            <td><select size="1" id="row-40-office" name="row-40-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Jackson Bradshaw</td>
                            <td><input type="text" id="row-41-age" name="row-41-age" defaultValue="65 " /></td>
                            <td><input type="text" id="row-41-position" name="row-41-position" defaultValue="Director " /></td>
                            <td><select size="1" id="row-41-office" name="row-41-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Olivia Liang</td>
                            <td><input type="text" id="row-42-age" name="row-42-age" defaultValue="64 " /></td>
                            <td><input type="text" id="row-42-position" name="row-42-position" defaultValue="Support Engineer " /></td>
                            <td><select size="1" id="row-42-office" name="row-42-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Bruno Nash</td>
                            <td><input type="text" id="row-43-age" name="row-43-age" defaultValue="38 " /></td>
                            <td><input type="text" id="row-43-position" name="row-43-position" defaultValue="Software Engineer " /></td>
                            <td><select size="1" id="row-43-office" name="row-43-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Sakura Yamamoto</td>
                            <td><input type="text" id="row-44-age" name="row-44-age" defaultValue="37 " /></td>
                            <td><input type="text" id="row-44-position" name="row-44-position" defaultValue="Support Engineer " /></td>
                            <td><select size="1" id="row-44-office" name="row-44-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo" selected="selected">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Thor Walton</td>
                            <td><input type="text" id="row-45-age" name="row-45-age" defaultValue="61 " /></td>
                            <td><input type="text" id="row-45-position" name="row-45-position" defaultValue="Developer " /></td>
                            <td><select size="1" id="row-45-office" name="row-45-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Finn Camacho</td>
                            <td><input type="text" id="row-46-age" name="row-46-age" defaultValue="47 " /></td>
                            <td><input type="text" id="row-46-position" name="row-46-position" defaultValue="Support Engineer " /></td>
                            <td><select size="1" id="row-46-office" name="row-46-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Serge Baldwin</td>
                            <td><input type="text" id="row-47-age" name="row-47-age" defaultValue="64 " /></td>
                            <td><input type="text" id="row-47-position" name="row-47-position" defaultValue="Data Coordinator " /></td>
                            <td><select size="1" id="row-47-office" name="row-47-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Zenaida Frank</td>
                            <td><input type="text" id="row-48-age" name="row-48-age" defaultValue="63 " /></td>
                            <td><input type="text" id="row-48-position" name="row-48-position" defaultValue="Software Engineer " /></td>
                            <td><select size="1" id="row-48-office" name="row-48-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Zorita Serrano</td>
                            <td><input type="text" id="row-49-age" name="row-49-age" defaultValue="56 " /></td>
                            <td><input type="text" id="row-49-position" name="row-49-position" defaultValue="Software Engineer " /></td>
                            <td><select size="1" id="row-49-office" name="row-49-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Jennifer Acosta</td>
                            <td><input type="text" id="row-50-age" name="row-50-age" defaultValue="43 " /></td>
                            <td><input type="text" id="row-50-position" name="row-50-position" defaultValue="Junior Javascript Developer " /></td>
                            <td><select size="1" id="row-50-office" name="row-50-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Cara Stevens</td>
                            <td><input type="text" id="row-51-age" name="row-51-age" defaultValue="46 " /></td>
                            <td><input type="text" id="row-51-position" name="row-51-position" defaultValue="Sales Assistant " /></td>
                            <td><select size="1" id="row-51-office" name="row-51-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Hermione Butler</td>
                            <td><input type="text" id="row-52-age" name="row-52-age" defaultValue="47 " /></td>
                            <td><input type="text" id="row-52-position" name="row-52-position" defaultValue="Regional Director " /></td>
                            <td><select size="1" id="row-52-office" name="row-52-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Lael Greer</td>
                            <td><input type="text" id="row-53-age" name="row-53-age" defaultValue="21 " /></td>
                            <td><input type="text" id="row-53-position" name="row-53-position" defaultValue="Systems Administrator " /></td>
                            <td><select size="1" id="row-53-office" name="row-53-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London" selected="selected">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Jonas Alexander</td>
                            <td><input type="text" id="row-54-age" name="row-54-age" defaultValue="30 " /></td>
                            <td><input type="text" id="row-54-position" name="row-54-position" defaultValue="Developer " /></td>
                            <td><select size="1" id="row-54-office" name="row-54-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco" selected="selected">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Shad Decker</td>
                            <td><input type="text" id="row-55-age" name="row-55-age" defaultValue="51 " /></td>
                            <td><input type="text" id="row-55-position" name="row-55-position" defaultValue="Regional Director " /></td>
                            <td><select size="1" id="row-55-office" name="row-55-office">
                                <option defaultValue="Edinburgh" selected="selected">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Michael Bruce</td>
                            <td><input type="text" id="row-56-age" name="row-56-age" defaultValue="29 " /></td>
                            <td><input type="text" id="row-56-position" name="row-56-position" defaultValue="Javascript Developer " /></td>
                            <td><select size="1" id="row-56-office" name="row-56-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                        <tr>
                            <td>Donna Snider</td>
                            <td><input type="text" id="row-57-age" name="row-57-age" defaultValue="27 " /></td>
                            <td><input type="text" id="row-57-position" name="row-57-position" defaultValue="Customer Support " /></td>
                            <td><select size="1" id="row-57-office" name="row-57-office">
                                <option defaultValue="Edinburgh">
                                    Edinburgh
                    </option>
                                <option defaultValue="London">
                                    London
                    </option>
                                <option defaultValue="New York" selected="selected">
                                    New York
                    </option>
                                <option defaultValue="San Francisco">
                                    San Francisco
                    </option>
                                <option defaultValue="Tokyo">
                                    Tokyo
                    </option>
                            </select></td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Office</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
