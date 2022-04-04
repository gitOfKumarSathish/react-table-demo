import React, { useEffect } from 'react'
import $ from 'jquery';
import MockJson from './mockData.json'

export let TemplateEngine = () => {
    const dataHandlerForReports = MockJson
    
    useEffect(() => {
        if (dataHandlerForReports.hasOwnProperty('testConfig') || dataHandlerForReports.hasOwnProperty('testInfo') || dataHandlerForReports.hasOwnProperty('results')) {
            buildHtmlTable('#excelDataTable')
        }
    }, [MockJson]);

    console.log('dataHandlerForReports', MockJson)

    const reportDataCollection = { testConfig: dataHandlerForReports.testConfig, testInfo: dataHandlerForReports.testInfo, results: dataHandlerForReports.results };
    function printPDF() {
        const source = window.document.getElementById("tableToPdf");
        const newWindowPrint = window.open('', 'tableToPdf', "width=1500,height=1000");
        newWindowPrint.document.open();
        newWindowPrint.document.write(`<html><style>table td, table th{border:1px solid #ddd;padding:8px;width:49%}table th{padding-top:12px;padding-bottom:12px;text-align:center}table#excelDataTable tr{width:100%;display:block}#excelDataTable td, #excelDataTable th{width:49% !important;display:inline-block;text-align:left;height:40px}table#excelDataTable th{text-transform:capitalize}table#excelDataTable div{font-size:42px;display:block;margin:10px auto;padding:10px;text-align:left}table{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%}</style><body onload="window.print()"> ${source.innerHTML}</body></html>`);
        newWindowPrint.document.close();
        // ?: this Comment is need for Print window auto close
        // setTimeout(function () { console.log('object'); newWindowPrint.close(); }, 100);
        window.onfocus = function () { newWindowPrint.close(); }
    }

    function buildHtmlTable(selector) {
        function eachTableObject(eachObjectHandler, eachKeyName = '') {
            const row = $(`<table class="eachTableCss" style="margin: 2% auto;"/>`);
            row.append($('<p class="eachTitle" style="font-size: 26px;text-align: left;margin: 10px;font-weight: bold;text-transform: capitalize;"/>').html(eachKeyName));
            for (const key in eachObjectHandler) {
                if (Object.hasOwnProperty.call(eachObjectHandler, key)) {
                    if (key !== 'durationPerResolution') {
                        row.append($('<tr><td>' + key + '</td><td>' + eachObjectHandler[key] + '</td></tr>'))
                    }
                    $(selector).append(row);
                }
            }
        }
        for (const key in reportDataCollection) {
            if (Object.hasOwnProperty.call(reportDataCollection, key)) {
                const eachReportSection = reportDataCollection[key];
                if (key === 'testConfig') {
                    eachTableObject(eachReportSection, 'Test Configuration')
                } else if (key === 'testInfo') {
                    eachTableObject(eachReportSection, 'Test Information')
                } else if (key === 'results') {
                    eachReportSection.map(eachReports => {
                        eachTableObject(eachReports.trafficConfig, 'Traffic Configurations')
                        eachTableObject(eachReports.overAllResult, 'Test Results')
                        eachReports.resultPerDeviceType.map(eachDeviceType => {
                            eachTableObject(eachDeviceType, eachDeviceType.deviceType)
                            if (eachDeviceType.hasOwnProperty('durationPerResolution')) {
                                eachTableObject(eachDeviceType.durationPerResolution, 'Duration Per Resolution')
                            }
                        });
                        const tableHeadCreation = Object.keys(eachReports.resultPerDevice[0] || [])
                        const row = $(`<table class="eachTableCss singleTable" style="margin: 0"/>`);
                        row.append($('<p class="eachTitle" style="font-size: 26px;text-align: left;margin: 10px;font-weight: bold;text-transform: capitalize;"/>').html('Per Client Reports'));
                        tableHeadCreation.map(eachValue => {
                            console.log('eachValue', eachValue)
                            if (eachValue === 'durationPerResolution') {
                                return $(row).append($('<th style="width:49.2% !important">' + eachValue + '</th>'))
                            } else {
                                return $(row).append($('<th>' + eachValue + '</th>'))
                            }
                        })
                        $(selector).append(row);
                        return eachReports.resultPerDevice.map(eachresultPerDevice => {
                            const row = $(`<table class="eachTableCss singleTable" style="margin: 0"/>`);
                            for (const key in eachresultPerDevice) {
                                if (Object.hasOwnProperty.call(eachresultPerDevice, key)) {
                                    if (key === 'durationPerResolution') {
                                        for (const newKey in eachresultPerDevice[key]) {
                                            if (Object.hasOwnProperty.call(eachresultPerDevice[key], newKey)) {
                                                const element = eachresultPerDevice[key][newKey];
                                                console.log('element', element, eachresultPerDevice[key][newKey])
                                                $(row).append($('<span class="changeSingle">' + newKey + ': ' + '<b>' + element + '</b>' + '</span>'))
                                            }
                                        }
                                    } else {
                                        let printValue = eachresultPerDevice[key] || '-';
                                        console.log('printValue', printValue)
                                        $(row).append($('<td>' + JSON.stringify(printValue) + '</td>'))
                                    }

                                    $(selector).append(row);
                                }
                            }
                        });
                    })
                }
            }
        }
    }
    if (dataHandlerForReports.hasOwnProperty('testConfig') || dataHandlerForReports.hasOwnProperty('testInfo') || dataHandlerForReports.hasOwnProperty('results')) {
        return (
            <div>
                <button onClick={printPDF}>printPDF</button>
                <div className='tableLooper' id='tableToPdf' style={{ width: '95%', margin: '0 auto', position: 'relative' }}>
                    <div className='FlexHandler' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/*<img src={Logo} alt='LOGO' style={{ width: '20%' }} />*/}
                        <h1 className='pdfTitle' style={{
                            textAlign: 'center', color: '#81bef7', textDecoration: 'underline', fontWeight: 'bolder'
                        }}>WiCheck Traffic Report</h1>
                        <div style={{ width: '19%' }}>&nbsp;</div>
                    </div>
                    <table id="excelDataTable">
                    </table>
                </div>
            </div>

        )
    } else {
        return (<p>Data Missing</p>)
    }

}


export default TemplateEngine