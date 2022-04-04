import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters, usePagination, useSortBy } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'
import './Table.css'
import { GlobalFilter } from './GlobalFilter'

export const Pagination = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    console.log('columns', columns)
    console.log('data', data)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        prepareRow,
        state,
        pageOptions,
        setPageSize,
        setGlobalFilter,
    } = useTable({
        columns,
        data
    }, useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    )
    const { globalFilter, pageIndex, pageSize } = state
    return (
        <div>
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
                    {page.map(row => {
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
            </table>
            <div className='footerSectionTable'>
                <div className='pageShowing'>
                    Showing{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                    {' '}entries
                </div>
                <div className='PerPageCount'>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {[10, 20, 50, 100].map(pageSize => {
                            return <option key={pageSize} value={pageSize}>Show {pageSize}</option>
                        })}
                    </select>
                </div>
                <div className='buttonSectionTable'>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                </div>
            </div>
        </div>
    )
}
