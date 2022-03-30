import { Typography, InputLabel } from "@mui/material"
import { useContext } from "react"

import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
import ReactAutoComplete from "react-google-autocomplete"
import InputCover from "../InputCover/InputCover";
export default () => {
    const { step,formData,setFormData } = useContext(Context)
    const places = ["pakistan", "india", "bangladesh", "china"]
    return <div className={`${(step === 3) ? "" : 'hidden'}`}>
        <h4 className="font-bold">Location</h4>
        <Typography variant="body1" className="italic text-gray-700">
            Choose the correct location for your experience.
        </Typography>

        <InputCover label="Location" className="mt-10">
            <ReactAutoComplete
                apiKey="AIzaSyBi6TZ639BVwEASDI3q4HDCk6YKTdiA4Sg"
                onPlaceSelected={(place) =>setFormData({...formData,location:place.formatted_address})}
                className="border-2 rounded border-gray-700 mt-10 h-20 px-8 py-[17px] max-w-screen-sm"
                placeholder="Start typing and select location"
            />
        </InputCover>

        <NavButtons />
    </div >
}

