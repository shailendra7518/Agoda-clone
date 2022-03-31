import { LeftBox } from "./LeftBox";
import { RightBox } from "./RighBox";

export const Mainbox = () => {
    return (
        <div style={{display: "flex", width: "80%" , margin: "auto"}}>
            <LeftBox/>
            <RightBox/>
        </div>
    )
}