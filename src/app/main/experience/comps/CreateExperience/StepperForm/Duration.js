import { Typography, TextField } from "@mui/material"
import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
import { useContext } from "react"
export default () => {
    const { step } = useContext(Context)
    return <div className={`${(step === 1) ? "" : 'hidden'}`}>
        <h4 className="font-bold">Duration</h4>
        <Typography variant="body1" className="italic text-gray-700">
            Set the duration length for your experience. you should include the travel time so your customer knows exactly how long it will take.
        </Typography>
        <div className="flex flex-row mt-20">
            <TextField InputProps={{inputProps:{min:1}}} helperText={<span className="font-medium ml-[-4px] italic text-base mt-[-5px]">Days</span>} size="small" variant="outlined" className="w-72" type="number" />
            <TextField InputProps={{inputProps:{min:1}}} helperText={<span className="font-medium ml-[-4px] italic text-base mt-[-5px]">Hours</span>} size="small" variant="outlined" className="w-72 mx-10" type="number" />
            <TextField InputProps={{inputProps:{min:1}}} helperText={<span className="font-medium ml-[-10px] italic text-base mt-[-5px]">Minutes</span>} size="small" variant="outlined" className="w-72" type="number" />
        </div>
        <NavButtons />
    </div >

}