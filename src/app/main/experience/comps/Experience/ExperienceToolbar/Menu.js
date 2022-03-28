import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import {useNavigate} from "react-router-dom"
export default function Menubar({ className }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={className}
            >
                <MenuIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>navigate("/createExp")}>Create Experience</MenuItem>
                <Divider className='my-[-5px]' />
                <MenuItem onClick={handleClose}>Import from File</MenuItem>
                <Divider className='my-[-5px]' />
                <MenuItem onClick={handleClose}>Import from Viator</MenuItem>
            </Menu>
        </div>
    );
}
