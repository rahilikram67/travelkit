import { useState } from "react"
import TopToolbar from "./comps/CreateExperience/Toolbar/toolbar"

import StepList from "./comps/CreateExperience/List/List"
import NextContext from "./comps/CreateExperience/context"

import Location from "./comps/CreateExperience/StepperForm/Location"
import { Grid, Paper } from "@mui/material"
import TitleAndType from "./comps/CreateExperience/StepperForm/TitleAndType"
import Duration from "./comps/CreateExperience/StepperForm/Duration"
import CategoriesAndThemes from "./comps/CreateExperience/StepperForm/Categories&themes"
import Description from "./comps/CreateExperience/StepperForm/Description"
import Photos from "./comps/CreateExperience/StepperForm/Photos"



export default () => {
    const [step, nextStep] = useState(5)
    const [formData,setFormData] = useState({})
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <TopToolbar />
                </Grid>
                <Grid item md={2} className="hidden md:block">
                    <StepList step={step} nextStep={nextStep} />
                </Grid>
                <Grid item md={10}>
                    <Paper className="bg-white mt-1 border-l-2 w-full h-full rounded-none">
                        <div className="px-10 md:pl-32 pt-20">
                            <NextContext.Provider value={{ step, nextStep,formData,setFormData }}>
                                <TitleAndType />
                                <Duration />
                                <CategoriesAndThemes />
                                <Location />
                                <Description />
                                <Photos />
                            </NextContext.Provider>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}