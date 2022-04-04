import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id',
        Filter: ColumnFilter
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Filter: ColumnFilter,
        // Cell: row => (

        //     <select>
        //         <option value='first_name'>firs_nam</option>
        //         <option value='first_name'>Secod</option>
        //     </select>
        //   ),
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Date of Birth',
        accessor: 'date_of_birth',
        Filter: ColumnFilter
    },
    {
        Header: 'Country',
        accessor: 'Country',
        Filter: ColumnFilter
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        Filter: ColumnFilter
    }
]