import { Typography, Avatar } from "@mui/material"
import { useContext, useState } from "react"

import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
import React from 'react'
import Dropzone from 'react-dropzone'


export default () => {
    const { step } = useContext(Context)
    const [files, setFiles] = useState([])
    const [error, setError] = useState(true)
    return <div className={`${(step === 5) ? "" : 'hidden'}`}>
        <h4 className="font-bold">Photos</h4>
        <Typography variant="body1" className="italic text-gray-700">
            Customer purchase with their eyes. choose good photos that highlights the experience (optimized for landscape photos).
        </Typography>
        <Dropzone accept="image/*" onDrop={acceptedFiles => {
            if (!acceptedFiles[0].size > 17000000) {
                setError(false)
                setTimeout(() => setError(true), 3000)
            }
            else if (files.length < 3) setFiles(files.concat(acceptedFiles.slice(0,3)))
        }}>
            {({ getRootProps, getInputProps }) => (
                <section className="border-2 border-dotted hover:bg-gray-400 hover:text-white rounded mt-40 h-auto grid place-items-center max-w-screen-sm">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p className="text-lg font-bold">Drag 'n' drop some files here, or click to select files</p>
                        <p className="text-base text-center">Supported files types: PNG,JPEG,JPG</p>
                        <p className="text-sm text-center my-10">Max files 3</p>
                    </div>
                </section>
            )}
        </Dropzone>
        <Typography hidden={error} variant="h6" color="red" className="text-center max-w-screen-sm">
            File size more than 17 mb
        </Typography>
        <div className="flex justify-center flex-wrap items-center mt-10 max-w-screen-sm">
            {
                files.map((file, index) => {
                    return <div key={index}>
                        <Typography hidden={index!==0} className="bg-blue-400 text-white">cover</Typography>
                    <Avatar src={URL.createObjectURL(file)} className="h-80 w-80 rounded border-2 mx-4" />
                    </div>
                })
            }
        </div>
        <NavButtons />
    </div>
}
