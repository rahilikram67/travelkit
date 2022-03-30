import { InputLabel } from "@mui/material"
export default ({ label, star = "", children, className = "" }) => {
    return <div className={"flex flex-col " + className}>
        <InputLabel className="text-black mt-10 font-bold">
            {label}<span className="text-red-700">{star}</span>
        </InputLabel>
        {children}
    </div>
}