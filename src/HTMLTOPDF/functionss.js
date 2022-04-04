import React, { Component, useEffect, useState } from 'react'
import $ from 'jquery';
import MockJson from './mockData.json'

export default function Functionss() {


    useEffect(() => {
        // Update the document title using the browser API
        buildHtmlTable('#excelDataTable')
    });
    // myList = [
    //             { "name": "abc", "age": 50 },
    //             { "age": "25", "hobby": "swimming" },
    //             { "name": "xyz", "hobby": "programming" }
    //         ];
    var myList = [MockJson.traffic_details];
    console.log('myList', myList)


    function buildHtmlTable(selector) {
        var columns = addAllColumnHeaders(myList, selector);
        console.log('columns', columns)
        for (var i = 0; i < myList.length; i++) {
            var row = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = myList[i][columns[colIndex]];
                console.log('cellValue', cellValue)
                for (const key in cellValue) {
                    if (Object.hasOwnProperty.call(cellValue, key)) {
                        const element = cellValue[key];
                        console.log('element',key,element)
                    }
                }
                if (cellValue == null) cellValue = "";
                row.append($('<td/>').html(cellValue));
            }
            console.log('row', row)
            $(selector).append(row);
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
                    headerTr.append($('<th/>').html(key));
                }
            }
        }
        $(selector).append(headerTr);
        console.log('columnSet', columnSet)
        return columnSet;
    }

    return (
        <div>
            <table id="excelDataTable" border="1" className='excelDataTable'>
            </table>
        </div>
    )
}
