import React, { Component } from 'react'
import data from './../components/DeviceData.json'

import $ from 'jquery';

// var DataTable = require('datatables.net');



export default class TableWithOwnData extends Component {
    componentDidMount() {
        this.clickHandler();
    }
    clickHandler = () => {
        $(document).ready(function () {

            var table = $('#example').DataTable({
                scrollY: 200,
                scrollCollapse: true,
                data: data,
                "searching": false,
                columns: [
                    {
                        'data': 'connectionControl',
                        render: function (connectionControl) {
                            return connectionControl = `<select name="connectionControl" class='connectionControl'>
                            <option value="ATF">ATF</option>
                            <option value="User">User</option>
                          </select>`
                        }
                    },
                    {
                        'data': 'deviceId',
                        render: function (deviceId) {
                            return deviceId = `<input type="text" class='deviceId NonEditable'name="deviceId" value=${deviceId} readonly />`
                        }
                    },
                    {
                        'data': 'deviceName',
                        render: function (deviceName) {
                            return deviceName = `<input type="text" class='deviceName NonEditable'name="deviceName" value=${deviceName} readonly />`
                        }
                    },
                    {
                        'data': 'deviceType',
                        render: function (deviceType) {
                            return deviceType = `<input type="text" class='deviceType NonEditable'name="deviceType" value=${deviceType} readonly />`
                        }
                    },
                    {
                        'data': 'groupId',
                        render: function (groupId) {
                            return groupId = `<input type="text" class='groupId' name="groupId" value=${groupId} />`
                        }
                    },
                    {
                        'data': 'version',
                        render: function (version) {
                            return version = `<input type="text" class='version NonEditable' name="version" value=${version} readonly />`
                        }
                    },
                    {
                        'data': 'ipAddress',
                        render: function (ipAddress) {
                            return ipAddress = `<input type="text" class='ipAddress NonEditable' name="ipAddress" value=${ipAddress} readonly />`
                        }
                    },
                    {
                        'data': 'ssid',
                        render: function (ssid) {
                            return ssid = `<input type="text" class='ssid NonEditable' name="ssid" value=${ssid} readonly />`
                        }
                    },
                    {
                        'data': 'connectionStatus',
                        render: function (connectionStatus) {
                            return connectionStatus = `<input type="text" class='connectionStatus NonEditable' name="connectionStatus" value=${connectionStatus} readonly />`
                        },
                    },
                ],
                columnDefs: [{
                    orderable: true,
                    targets: [1, 2, 3, 4]
                }]
            });
            $('button').click(function () {
                var formData = JSON.parse(JSON.stringify(table.$('input,select').serializeArray())) // store json object
                console.log('formData', formData)

                var getGroupArray = [];
                var i, j, temparray, chunk = 9;
                for (i = 0, j = formData.length; i < j; i += chunk) {
                    temparray = formData.slice(i, i + chunk);
                    getGroupArray.push(temparray);
                }
                console.log('getGroupArray', getGroupArray);
                let ConversionArray = [];
                let localObj = {}
                getGroupArray.map(x => {
                    console.log(x.length)
                    x.map(y => {
                        localObj[y.name] = y.value
                    })
                    ConversionArray.push(localObj)
                })
                console.log('ConversionArray', ConversionArray)
                return false;
            });
        });

    }
    render() {
        return (
            <div>
                <button type="submit">Submit form</button>
                <table id="example" className="display">
                    <thead>
                        <tr>
                            <th>connectionControl</th>
                            <th>deviceId</th>
                            <th>deviceName</th>
                            <th>deviceType</th>
                            <th>groupId</th>
                            <th style={{ display: 'none' }} >version</th>
                            <th style={{ display: 'none' }}>ipAddress</th>
                            <th style={{ display: 'none' }} >ssid</th>
                            <th style={{ display: 'none' }}>connectionStatus</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}



