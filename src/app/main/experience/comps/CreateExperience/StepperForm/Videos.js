
import { Typography, Avatar, Button, TextField, CircularProgress } from "@mui/material"
import { useContext, useState } from "react"

import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
import React from 'react'
import InputCover from "../InputCover/InputCover"
import { Box } from "@mui/system"
import functions from "../helperFunctions"
import axios from "axios"


export default () => {
  const { step, formData, setFormData } = useContext(Context)
  const [showInput, setShowInput] = useState(false)
  const [showProgress, setShowProgress] = useState(false)
  const insertVideoData = ({ url, thumbnail, title }) => {
    let array = (formData.videolinks || []).slice()
    setFormData({
      ...formData,
      videolinks: [...array, {
        url: url,
        thumbnail: thumbnail,
        title: title
      }]
    })
  }
  return <div className={`${(step === 6) ? "" : 'hidden'}`}>
    <h4 className="font-bold">Videos</h4>
    <Typography variant="body1" className="italic text-gray-700 max-w-screen-sm">
      Add videos to your experience by adding video URLs below, the first video you add will show up on the widgets (Supported video links are youtube/vimeo).
    </Typography>
    <InputCover label="Video Links" className="font-bold" >
      <Typography variant="body2" className="italic text-gray-700">
        Paste in the links from youtube or vimeo.
      </Typography>
      {
        (formData.videolinks) ? formData.videolinks.map((link, index) => (
          <Box key={index} className="w-full max-w-screen-sm border-2 border-gray-400 px-6 py-6 my-10 rounded bg-[#F7F7F7]">
            <div className="flex items-center">
              <Avatar className="rounded" imgProps={{ width: 200, height: 200 }} src={link.thumbnail} />
              <Typography variant="body1" className="ml-10 font-bold">
                {link.title}
              </Typography>
            </div>
            <Typography variant="body2" className="mt-5">
              {link.url}
            </Typography>
          </Box>
        )) : null
      }
    </InputCover>
    <div className="max-w-screen-sm flex justify-center my-5">
      <CircularProgress className={(showProgress) ? "block" : "hidden"} />
    </div>
    <TextField onKeyUp={async (ev) => {
      let value = ev.target.value
      if (ev.key !== "Enter" || !value) return
      setShowProgress(true)
      if (value.includes("youtube.com")) insertVideoData(await functions.getYTVideoData(value, axios))
      else if (value.includes("vimeo.com")) insertVideoData(await functions.getVimeoVideoData(value, axios))
      ev.target.value = ""
      setShowProgress(false)
      setShowInput(false)
    }} fullWidth placeholder="Paste in the links from youtube or vimeo." size="small" className={`my-10 max-w-screen-sm ${(showInput) ? "block" : "hidden"}`} />

    <Button onClick={() => setShowInput(!showInput)} variant="contained" color="info" className="w-full bg-[#F5F5F5] text-gray-700 max-w-screen-sm hover:text-white h-28 text-base rounded">
      {(!showInput) ? "+ Add another one" : "Hide"}
    </Button>
    <NavButtons />
  </div>
}
