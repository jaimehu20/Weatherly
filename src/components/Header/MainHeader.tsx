import { BorderBeamDemo } from "../MagicUI/BorderBeam/BorderBeam"

type MainHeaderprops = {
    title: string }

export const MainHeader = (props : MainHeaderprops) => {
    return <>
        <header>
            <BorderBeamDemo title={props.title} />
        </header>
    </>
}