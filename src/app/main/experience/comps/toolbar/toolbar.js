import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ListItemText } from '@mui/material';

export default function ButtonAppBar() {
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

                    <Button className="rounded" color='info' variant='contained'>Create Experience</Button>
                    <Button className='bg-gray-200 text-black font-bold mx-4 rounded' variant='contained'>Import from File</Button>
                    <Button className='bg-gray-200 text-black font-bold rounded' variant='contained'>Import from Viator</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}