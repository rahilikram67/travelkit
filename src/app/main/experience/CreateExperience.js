import { useState } from "react"
import TopToolbar from "./comps/CreateExperience/Toolbar/toolbar"
import StepList from "./comps/CreateExperience/List/List"

import { Grid,Paper } from "@mui/material"
import TitleAndType from "./comps/CreateExperience/StepperForm/TitleAndType/TitleAndType"
export default () => {
    const [bold, setBold] = useState(0)
    return (
        <>

            <Grid container>
                <Grid item xs={12}>
                    <TopToolbar />
                </Grid>
                <Grid item md={2}>
                    <StepList bold={bold} setBold={setBold} />
                </Grid>
                <Grid item md={10}>
                    <Paper className="bg-white mt-1 border-l-2 w-full h-full rounded-none">
                          <TitleAndType show={true} />  
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}