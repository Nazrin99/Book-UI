import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Button from "../components/Button";
import {backButtonHandler} from "../handler/buttonHandler";
import InputField from "../components/InputField";
import SubmitBookPage from "../pages/SubmitBookPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Button">
                <Button text={"Back"} onClickHandler={backButtonHandler}/>
            </ComponentPreview>
            <ComponentPreview path="/InputField">
                <InputField hint={"This is hint"}/>
            </ComponentPreview>
            <ComponentPreview path="/SubmitBookPage">
                <SubmitBookPage/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;