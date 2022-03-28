
import { Icon, Paper, Input, Select, MenuItem, Button,IconButton } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default ({search,setSearch}) => {    
    return <>
        <Paper
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
            className="flex items-center px-4 md:px-8  py-0  rounded shadow h-52"
        >
            <Icon color="action">search</Icon>

            <Input
                placeholder="Start typing to search or filter your experiences"
                className="flex mx-8 h-20"
                disableUnderline
                fullWidth
                value={search.value}
                onChange={(ev) => setSearch({...Object.assign(search,{value:ev.target.value})})}/>
            <div className="hidden md:flex border-r-2 border-l-2">
                <Select
                    value={search.select}
                    onChange={(ev) => setSearch({...Object.assign(search,{select:ev.target.value})})}
                    placeholder="Status"
                    className="my-8 h-40 w- mx-8"
                >
                    <MenuItem value="status">Status</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="offline">Offline</MenuItem>
                </Select>
            </div>

            <Button className=" hidden md:flex rounded-16 ml-8" color='info' variant='contained'>Products</Button>
            <Button className=' hidden md:flex bg-gray-200 text-black font-bold mx-4 hover:bg-gray-400 rounded-16 mx-8' variant='contained'>Boxes</Button>
            <div className="h-52 border-l-2 flex items-center content-center">
                <IconButton className="mx-8" >
                        <MoreHorizIcon />
                </IconButton>
            </div>
        </Paper>



    </>
}