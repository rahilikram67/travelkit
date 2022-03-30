import { Typography, TextField, InputLabel, Autocomplete } from "@mui/material"
import { useContext } from "react"

import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
import InputCover from "../InputCover/InputCover";
export default () => {
    const { step, formData, setFormData } = useContext(Context)
    const Categories = ["Alone", "Solo", "Group", "Family"]
    return <div className={`${(step === 2) ? "" : 'hidden'}`}>
        <h4 className="font-bold">Categories & themes</h4>
        <Typography variant="body1" className="italic text-gray-700">
            Categories your tour so customers can easily navigate and find the experiences based upon their likings.
        </Typography>

        <InputCover label="Categories" className="mt-10">
            <Typography variant="body1" className="italic text-gray-500">
                Help your customers to understand what type of experience is this.
            </Typography>
            <Autocomplete
                multiple
                freeSolo
                options={Categories}
                onChange={(event, value) => setFormData({ ...formData, categories: value })}
                renderInput={params => (
                    <TextField
                        {...params}
                        fullWidth
                        size="small"
                        className="max-w-screen-sm mt-8"
                    />
                )}
            />
        </InputCover>
        <InputCover label="Themes" className="mt-10">
            <Typography variant="body1" className="italic text-gray-500">
                Select the themes that apply for this experience.
            </Typography>
            <Autocomplete
                multiple
                freeSolo
                options={Categories}
                onChange={(event, value) => setFormData({ ...formData, themes: value })}
                renderInput={params => (
                    <TextField
                        {...params}
                        fullWidth
                        size="small"
                        className="max-w-screen-sm mt-8"
                    />
                )}
            />
        </InputCover>
        <NavButtons />
    </div >
}
