import { useState, createContext } from "react"
import TopToolbar from "./comps/CreateExperience/Toolbar/toolbar"
import StepList from "./comps/CreateExperience/List/List"

import { Grid, Paper } from "@mui/material"
import TitleAndType from "./comps/CreateExperience/StepperForm/TitleAndType"
import Duration from "./comps/CreateExperience/StepperForm/Duration"
import CategoriesAndThemes from "./comps/CreateExperience/StepperForm/Categories&themes"


import NextContext from "./comps/CreateExperience/context"
import Location from "./comps/CreateExperience/StepperForm/Location"
export default () => {
    const [step, nextStep] = useState(0)
    return (
        <>

            <Grid container>
                <Grid item xs={12}>
                    <TopToolbar />
                </Grid>
                <Grid item md={2}>
                    <StepList step={step} nextStep={nextStep} />
                </Grid>
                <Grid item md={10}>
                    <Paper className="bg-white mt-1 border-l-2 w-full h-full rounded-none">
                        <NextContext.Provider value={{ step, nextStep }}>
                            <TitleAndType />
                            <Duration />
                            <CategoriesAndThemes />
                            <Location />
                        </NextContext.Provider>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}