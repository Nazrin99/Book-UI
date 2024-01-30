import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Button from "../components/Button";
import InputField from "../components/InputField";
import SubmitBookPage from "../pages/SubmitBookPage";
import {BookLibraryPage} from "../pages/BookLibraryPage";
import TextView from "../components/TextView";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Button">
                <Button text={"Back"} onClickHandler={() => {}}/>
            </ComponentPreview>
            <ComponentPreview path="/InputField">
                <InputField hint={"This is hint"}/>
            </ComponentPreview>
            <ComponentPreview path="/SubmitBookPage">
                <SubmitBookPage/>
            </ComponentPreview>
            <ComponentPreview path="/BookLibraryPage">
                <BookLibraryPage/>
            </ComponentPreview>
            <ComponentPreview path="/TextView">
                <TextView text={"Text Here"}/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;