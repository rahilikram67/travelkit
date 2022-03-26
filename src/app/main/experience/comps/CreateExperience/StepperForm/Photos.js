import { Typography, TextField, InputLabel, Autocomplete } from "@mui/material"
import { useContext } from "react"

import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
import React from 'react'
import Dropzone from 'react-dropzone'


export default () => {
    const { step } = useContext(Context)
    
    return <div className={`pl-32 pt-20 ${(step === 5) ? "" : 'hidden'}`}>
        <h4 className="font-bold">Photos</h4>
        <Typography variant="body1" className="italic text-gray-700">
            Customer purchase with their eyes. choose good photos that highlights the experience (optimized for landscape photos).
        </Typography>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
                <section  className="border-2 border-dotted hover:bg-gray-400 hover:text-white rounded mt-40 h-96 grid place-items-center max-w-screen-sm">
                    <div   {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className="text-lg">Drag 'n' drop some files here, or click to select files</p>
                    </div>
                </section>
            )}
        </Dropzone>
        <NavButtons />
    </div>
}    