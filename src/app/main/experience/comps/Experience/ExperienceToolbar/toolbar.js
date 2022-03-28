import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ListItemText } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import Menubar from './Menu';
export default function ButtonAppBar() {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='bg-white'>
                <Toolbar>
                    <ListItemText disableTypography primary={
                        <Typography variant="h6" className='text-black'>
                            Experience
                        </Typography>
                    }
                        secondary={
                            <Typography className='text-black text-sm'>
                                create and manage your experience of TravelKit
                            </Typography>
                        }
                    />

                    <Button onClick={() => navigate("/createExp")} className="hidden md:block rounded" color='info' variant='contained'>Create Experience</Button>
                    <Button className='hidden md:block bg-gray-200 hover:bg-gray-500 text-black font-bold mx-4 rounded' variant='contained'>Import from File</Button>
                    <Button className='hidden md:block bg-gray-200 hover:bg-gray-500 text-black font-bold rounded' variant='contained'>Import from Viator</Button>
                    <Menubar className="block md:hidden" />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

