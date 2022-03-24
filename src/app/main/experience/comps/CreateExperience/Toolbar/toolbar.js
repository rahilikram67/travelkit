import * as React from 'react';

import { ListItemText, Avatar, Chip, Link, Typography, Box, AppBar, Toolbar } from '@mui/material';

export default function TopToolbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='bg-white'>
                <Toolbar>
                    <Avatar
                        src='https://picsum.photos/200'
                        variant='square'
                        className='mr-10 rounded'
                    />
                    <ListItemText disableTypography primary={
                        <Typography variant="h6" className='text-black'>
                            Ooty <Chip label="Active" color="success" className='h-24' />
                        </Typography>
                    }
                        secondary={
                            <>
                                <Link to='/' className='text-sm a-link-text-no-underline'>
                                    Go to overview <span className='font-bold text-gray-500 ml-4'>TravelKit Id: </span>
                                    <span className="text-gray-500">677827</span>
                                </Link>
                            </>
                        }
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}