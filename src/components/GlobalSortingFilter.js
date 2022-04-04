import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters, useSortBy } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './Table.css'
import { GlobalFilter } from './GlobalFilter'

export const GlobalFilteringComponent = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    }, useFilters,
        useGlobalFilter,
        useSortBy,
    )
    const { globalFilter } = state
    return (
        <>
            {console.log('useTable', useTable)}
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps)}>{column.render('Header')}
                                    {column.isSorted ? (column.isSortedDesc ? <span><i className="fa fa-sort-amount-asc" aria-hidden="true"></i></span> : <span><i className="fa fa-sort-amount-desc" aria-hidden="true"></i></span>) : ''}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map(column => (
                                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                            ))}
                        </tr>
                    ))}
                </tfoot>
            </table>
        </>
    )
}
