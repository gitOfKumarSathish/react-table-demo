import React, { useEffect } from 'react'
import $ from 'jquery';
import MockJson from './mockData.json'
import Logo from '../assets/img/logo.png'

export default function Testing() {


    useEffect(() => {
        buildHtmlTable('#excelDataTable')
    });
    delete MockJson['msgType']
    delete MockJson['statusMessage']
    delete MockJson['status']
    // console.log('MockJson', MockJson)
    const old_obj = MockJson;
    const {
        testConfig: Test_Configuration,
        testInfo: Test_Information,
        results: Test_Results,
    } = { ...old_obj }
    const new_obj = Object.assign(
        {},
        {
            Test_Configuration,
            Test_Information,
            Test_Results
        }
    );
    var myList = [new_obj];
    console.log('myList', myList)


    function buildHtmlTable(selector) {
        var columns = addAllColumnHeaders(myList, selector);
        for (var i = 0; i < myList.length; i++) {

            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = myList[i][columns[colIndex]];
                var row = $(`<tr/>`);
                // var row = $(`<h1>${columns[colIndex]}</h1> <tr/>`);
                row.append($('<div/>').html(columns[colIndex]))

                if (columns[colIndex] === 'Test_Results') {
                    cellValue.forEach((elementss, index) => {
                        row.append($('<div/>').html(`Traffic ${index + 1}`))
                        for (const key in elementss) {
                            if (Object.hasOwnProperty.call(elementss, key)) {
                                const vlauess = elementss[key];
                                if (typeof vlauess === 'object' && !key.includes('Per')) {
                                    for (const eachKey in vlauess) {
                                        if (Object.hasOwnProperty.call(vlauess, eachKey)) {
                                            const newChange = vlauess[eachKey];
                                            row.append($('<tr>' + '<td>' + eachKey + '</td>' + '<td>' + newChange + '</td>' + '</tr>'))
                                        }
                                    }
                                    row.append($('<div/>'))
                                } else if (key.includes('Per')) {
                                    vlauess.forEach(newele => {
                                        for (const eachEleKey in newele) {
                                            if (Object.hasOwnProperty.call(newele, eachEleKey)) {
                                                // row.append($('<div/>').html(newele['deviceType']));
                                                const checkFinal = newele[eachEleKey];
                                                console.log('checkFinal', checkFinal, eachEleKey)

                                                row.append($('<tr>' + '<td>' + eachEleKey + '</td>' + '<td>' + checkFinal + '</td>' + '</tr>'))
                                            }
                                        }
                                        row.append($('<div/>'))

                                    });

                                } else {
                                    // row.append($('<tr>' + '<td>' + key + '</td>' + '<td>' + vlauess + '</td>' + '</tr>'))
                                    // row.append($('<div/>'))
                                }
                            }
                        }
                        row.append($('<div/>'))
                    });
                } else {
                    for (const key in cellValue) {
                        if (Object.hasOwnProperty.call(cellValue, key)) {
                            const element = cellValue[key];
                            row.append($('<tr>' + '<td>' + key + '</td>' + '<td>' + element + '</td>' + '</tr>'))

                            // row.append($('<td/>').html(key));
                            // row.append($('<td/>').html(element));
                        }
                    }
                }
                // row.append($('<div/>'))
                // if (cellValue == null) { cellValue = "" };
                // row.append($('<td/>').html(cellValue));
                $(selector).append(row);

            }
            console.log('row', row)
        }
    }

    // Adds a header row to the table and returns the set of columns.
    // Need to do union of keys from all records as some records may not contain
    // all records.
    function addAllColumnHeaders(myList, selector) {
        var columnSet = [];
        var headerTr = $('<tr/>');

        for (var i = 0; i < myList.length; i++) {
            var rowHash = myList[i];
            for (var key in rowHash) {
                if ($.inArray(key, columnSet) == -1) {
                    columnSet.push(key);
                    headerTr.append($('<td/>').html(key));
                }
            }
        }
        // $(selector).append(headerTr);
        console.log('columnSet', columnSet)
        return columnSet;
    }

    return (
        <div className='tableLooper'>
            <div className='FlexHandler'>
                <img src={Logo} alt='LOGO' />
                <h1 className='pdfTitle'>WiCheck Traffic Report</h1>
                <div style={{width: '19%'}}>&nbsp;</div>
            </div>

            <table id="excelDataTable" className="">
            </table>
        </div>
    )
}
