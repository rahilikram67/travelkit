import functions from "../helperFunctions"
import { Button } from "@mui/material"
import Context from "../context"
import { useContext } from "react"
export default function ({ className = "mt-96 max-w-screen-sm" }) {
    const { nextStep } = useContext(Context)
    return (<div className={"flex flex-row mb-10 " + className}>
        <Button onClick={() => functions.goBack(nextStep)} variant="contained" className="bg-gray-600 text-white mr-auto">Back</Button>
        <Button onClick={() => functions.goNext(nextStep)} variant="contained" color="info" className="justify-self-end	ml-auto">Continue</Button>
    </div>);
}