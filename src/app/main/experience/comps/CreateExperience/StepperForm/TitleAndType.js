import { TextField, Typography, Box, Radio, ListItemText, Stack, Switch, Button } from "@mui/material"
import { useContext, useEffect } from "react"
import { goNext } from "../helperFunctions"
import Context from "../context"
import InputCover from "../InputCover/InputCover"
export default function () {
    const { step, nextStep, formData, setFormData } = useContext(Context)
    console.log(formData)  
    useEffect(() => setFormData({ ...formData, type: "Tour / Activity" }), [])
    
    const setType = (e) => {
        setFormData({ ...formData, type: e })
    }
    let types = [
        {
            primary: "Tour / Activity",
            secondary: "if your experience is tour or an activity, select this option."
        },
        {
            primary: "Attraction",
            secondary: "something to see? Beautiful landscape or historic marks? Attraction it is."
        },
        {
            primary: "Event",
            secondary: "if your experience is an event then this would be perfect option"
        },
    ]
    return (
        <div className={`${(step === 0) ? "" : 'hidden'}`}>
            <h4 className="font-bold">Title and type</h4>
            <InputCover label="Title" star="*" >
                <TextField
                    fullWidth
                    size="small"
                    className="max-w-screen-sm mt-8"
                    value={formData.title||""}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </InputCover>
            <InputCover label="Product Code" className="mt-20">
                <Typography variant="body1" className="italic text-gray-400">
                    (Optional) Add your internal product code
                </Typography>
                <TextField
                    fullWidth
                    size="small"
                    className="max-w-screen-sm mt-8"
                    value={formData.productCode || ""}
                    onChange={(e) => setFormData({ ...formData, productCode: e.target.value })}
                />
            </InputCover>
            <InputCover label="Type" star="*" className="mt-20">
                {
                    types.map((item, index) => {
                        return <Box key={index} onClick={() => setType(item.primary)} padding={1} border={(formData.type === item.primary) ? "2px solid #22D3EE" : "1px solid #9B728C"} className="max-w-screen-sm rounded mt-8 flex cursor-pointer">
                            <Radio checked={formData.type === item.primary} value={item.primary} />
                            <ListItemText primary={<div className="font-bold">{item.primary}</div>} secondary={item.secondary} />
                        </Box>
                    })
                }
            </InputCover>
            <InputCover label="Private Experience" className="mt-8">
                <Typography variant="body2" className="italic text-gray-400 max-w-screen-sm">
                    Private experiences only accommodate one group per booking and are not shared with others. This does not automatically close out the departure when you receive a booking.
                </Typography>
                <Stack direction="row" spacing={0} alignItems="center">
                    <Switch onChange={(e)=>setFormData({...formData,private:e.target.checked})} />
                    <Typography>Show as Private</Typography>
                </Stack>
            </InputCover>
            <div className="w-full max-w-screen-sm">
                <Button disabled={!formData.title} onClick={() => goNext(nextStep)} variant="contained" className="block ml-auto rounded" color="info">Continue</Button>
            </div>
        </div >
    )
}

