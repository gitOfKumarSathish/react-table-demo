import React from 'react'
import data from './../components/DeviceData.json'

import $ from 'jquery';
import dt from 'datatables.net';

export default function FunctinalTable() {

const datatabel = dt;
    clickHandler = () => {

        var table = $('#example').dt({

            data: data,
            columns: [
                { 'data': 'connectionControl' },
                { 'data': 'connectionStatus' },
                { 'data': 'deviceId' },
                { 'data': 'deviceName' },
                { 'data': 'deviceType' },
                { 'data': 'groupId' },
                { 'data': 'ipAddress' },
                { 'data': 'ssid' },
            ]
        });
        console.log('table', table)
        $('button').click(function () {
            var formData = JSON.parse(JSON.stringify(table.$('input, select').serializeArray())) // store json object
            console.log('data.substr(0, 120)', formData)
            return false;
        });
    }

    return (
        <div>

        </div>
    )
}
