import { Typography, TextField, InputLabel } from "@mui/material"
import { useContext, useState } from "react"

import NavButtons from "../BottomNavButtons/NavButtons"
import Context from "../context"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default () => {
    const { step } = useContext(Context)
    const [state, setState] = useState(EditorState.createEmpty())
    return <div className={`pl-32 pt-20 ${(step === 4) ? "" : 'hidden'}`}>
        <h4 className="font-bold">Description</h4>
        <Typography variant="body1" className="italic text-gray-700">
            Describe what you'll do.
        </Typography>
        <InputCover label="Short Description" className="mt-10">
            <Typography variant="body1" className="italic text-gray-500">
                Brief overview of the experience. This will be displayed on the product cards in search results.
            </Typography>
            <TextField
                fullWidth
                size="small"
                className="max-w-screen-sm mt-8"
            />
        </InputCover>
        <InputCover label="Describe">
            <Editor
                editorState={state}
                toolbarClassName="max-w-screen-sm mt-8"
                onChange={(blocks)=>{}}
                editorClassName="border-[1px] rounded  max-w-screen-sm mt-[-6px] min-h-[200px]"
                onEditorStateChange={(EditState) => setState(EditState)}
            />
        </InputCover>
        <NavButtons />
    </div>
}
function InputCover({ label, children, className = "" }) {
    return <div className={"flex flex-col " + className}>
        <InputLabel className="text-black mt-10 text-sm font-bold">
            {label}
        </InputLabel>
        {children}
    </div>
}