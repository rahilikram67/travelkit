import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from "@mui/material"

//let list = ["Title and type", "Duration ", "Categories & themes", "Location ", "Time zone ", "Itinerary ", "Description ", "Photos ", "Videos ", "Inclusions ", "Exclusions ", "Know before you go ", "What to bring ", "Tickets ", "Extras ", "Translations ", "Advanced ", "Tripadvisor review", "MS Google ", "Things to do"]
let list = ["Title and type", "Duration ", "Categories & themes", "Location ",  "Description ", "Photos ", "Videos ", "Inclusions ", "Exclusions ", "Know before you go ", "What to bring ", "Tickets ", "Extras ", "Translations ", "Advanced ", "Tripadvisor review", "MS Google ", "Things to do"]
export default function DenseMenu({ step, nextStep }) {

    return (
        <Paper className='mt-1 rounded-none'>
            <MenuList dense>
                <MenuItem className="bg-black mx-6 rounded h-15 pointer-events-none">
                    <ListItemText primary={<Typography variant='h6' className='text-white text-left'>
                        Experience
                    </Typography>} />
                </MenuItem>
                {
                    list.map((item, index) => <MenuItem key={index}>
                        <ListItemText onClick={()=>nextStep(index)} primary={<div className={(step === index) ? 'font-black' : ''}>
                            {item}
                        </div>} className="ml-6" />
                    </MenuItem>)
                }
            </MenuList>
        </Paper>
    );
}
