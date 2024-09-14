import { BorderBeamDemo } from "../MagicUI/BorderBeam/BorderBeam"

type MainHeaderprops = {
    title: string }

export const MainHeader = (props : MainHeaderprops) => {
    return <>
        <header className="z-10">
            <BorderBeamDemo title={props.title} />
        </header>
    </>
}