import React, { Component } from 'react'
import MOCK_DATA from './../components/MOCK_DATA.json'

import $ from 'jquery';
import DataTable from 'datatables.net';

export default class Selection extends Component {

    componentDidMount() {
        this.clickHandler();
    }
    clickHandler = () => {
        $(document).ready(function () {
            var table = $('#example').DataTable({
                'ajax': 'https://gyrocode.github.io/files/jquery-datatables/arrays_id.json',
                'columnDefs': [
                    {
                        'targets': 0,
                        'checkboxes': {
                            'selectRow': true
                        }
                    }
                ],
                'select': {
                    'style': 'multi'
                },
                'order': [[1, 'asc']]
            });

            // Handle form submission event 
            $('#frm-example').on('submit', function (e) {
                var form = this;

                var rows_selected = table.column(0).checkboxes.selected();

                // Iterate over all selected checkboxes
                $.each(rows_selected, function (index, rowId) {
                    // Create a hidden element 
                    $(form).append(
                        $('<input>')
                            .attr('type', 'hidden')
                            .attr('name', 'id[]')
                            .val(rowId)
                    );
                });

                // FOR DEMONSTRATION ONLY
                // The code below is not needed in production

                // Output form data to a console     
                $('#example-console-rows').text(rows_selected.join(","));

                // Output form data to a console     
                $('#example-console-form').text($(form).serialize());

                // Remove added elements
                $('input[name="id\[\]"]', form).remove();

                // Prevent actual form submission
                e.preventDefault();
            });
        });



    }
    render() {
        return (
            <div>
                <button type="submit">Submit form</button>

                <table id="example" className="display" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Extn</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot>
                </table>

                <hr />

                <p>Press <b>Submit</b> and check console for URL-encoded form data that would be submitted.</p>

                <p><button>Submit</button></p>

                <p><b>Selected rows data:</b></p>
                <pre id="example-console-rows"></pre>

                <p><b>Form data as submitted to the server:</b></p>
                <pre id="example-console-form"></pre>

            </div>


        )
    }
}
