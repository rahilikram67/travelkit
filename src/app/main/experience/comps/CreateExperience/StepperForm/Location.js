import { Typography, InputLabel,Autocomplete,TextField } from "@mui/material"
import { useContext } from "react"

import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
export default () => {
    const { step } = useContext(Context)
    const places = ["pakistan", "india", "bangladesh", "china"]
    return <div className={`pl-32 pt-20 ${(step === 3) ? "" : 'hidden'}`}>
        <h4 className="font-bold">Location</h4>
        <Typography variant="body1" className="italic text-gray-700">
            Choose the correct location for your experience.
        </Typography>

        <InputCover label="Location" className="mt-10">
            <Autocomplete
                disablePortal
                options={places}
                renderInput={(params) => <TextField {...params} fullWidth
                    size="small"
                    className="max-w-screen-sm mt-8"
                />}
            />
        </InputCover>

        <NavButtons />
    </div >
}

function InputCover({ label, children, className = "" }) {
    return <div className={"flex flex-col " + className}>
        <InputLabel className="text-black mt-10 text-sm font-bold">
            {label}
        </InputLabel>
        {children}
    </div>
}
