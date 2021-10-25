import React from 'react';

import empty from './empty.svg';

function mergeTableData(columns = [], data = []) {
    return data.map((item, index) => {
        return (
            <tr key={String(index)}>
                {columns.map((item2) => {
                    const itemKey = item2.field || '';
                    const itemValue = item[itemKey] || '';
                    const itemComponentFn = item2.component;
                    const itemRenderFn = item2.render;
                    return (
                        <td key={itemKey}>
                            {itemRenderFn ? itemRenderFn(item) : false ||
                                itemComponentFn ? itemComponentFn(item) : false ||
                            itemValue}
                        </td>
                    )
                })}
            </tr>
        );
    });
}

export default function Table(props) {
    let { columns, data, pagination, loading, rowClassName, emptyRender } = props;
    columns = columns || [];
    data = data || [];
    console.log('table-c', columns);
    const plview = ({ emptyRender }) => {
        const defaultView = () => {
            return (
                <td style={{
                    textAlign: 'center'
                }} colSpan="5">
                    <div style={{
                        padding: '4rem 0'
                    }}>
                        <div style={{
                            height: '2rem',
                            color: 'rgba(0, 0, 0, .7)',
                            marginBottom: '1rem'
                        }}>
                            <img src={empty} style={{ height: '100%' }} alt='nodata' />
                        </div>
                        <h5>No data available</h5>
                    </div>
                </td>
            );
        }
        return (
            <tr>
                {emptyRender?emptyRender():defaultView()}
            </tr>
        );
    }
    return (
        <div>
            <table className="table mb-0">
                <thead>
                    <tr>
                        {columns.map((item) => {
                            let { field, name } = item;
                            field = field || '';
                            name = name || '';
                            return (
                                <th key={field}>{name}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {!data || data.length === 0 ? plview({ emptyRender }) : mergeTableData(columns, data)}
                </tbody>
            </table>
        </div>
    );
}