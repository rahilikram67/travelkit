import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "@mui/material"
import { useState, useEffect } from "react"
import data from "./data.js"
import { useTranslation } from 'react-i18next';



export default function DataTable({ search }) {
    const { t } = useTranslation('examplePage');
    const columns = [
        { field: 'id', headerName: 'TravelKit ID', width: 100 },
        { field: 'cover_photo', headerName: '', width: 90, renderCell: ({ value }) => <img className='h-36 w-9/12 mx-auto' src={value} alt="Photo" /> },
        { field: 'status', headerName: 'Status', width: 90 },
        { field: 'experience_code', headerName: 'Product Code', width: 120 },
        { field: 'experience_type', headerName: 'Title', width: 590 },
        {
            field: 'btns', headerName: '', width: 100, renderCell: (p) => <div className='flex items-center content-center'>
                <Link href='#' className='mr-2 a-link-text-no-underline'>{p.value.split(",")[0]}</Link>
                <Link href='#' className='mx-10 a-link-text-no-underline a-link-text-red'>{p.value.split(",")[1]}</Link>
            </div>
        },
    ];
    const [rows, setRows] = useState(data.data.map(el => Object.assign(el, { btns: "Edit,Delete" })));

    useEffect(() => {

    }, [search])

    // useEffect(() => {
    //     fetch("https://f032a252-02be-4a16-8263-ac4e23e135c1.mock.pstmn.io/api/experiences/")
    //         .then(res => res.json())
    //         .then(data => {
    //             setRows(data.data);
    //         })
    // }, [])
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                componentsProps={{ toolbar: (local) => <div>loca</div> }}
                rowsPerPageOptions={[5]}
                checkboxSelection
                showCellRightBorder
                className='mx-32 mt-20'
            />
        </div>
    );
}
