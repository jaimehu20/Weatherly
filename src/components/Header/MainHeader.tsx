import { HeaderStyledTitle } from "../MagicUI/BorderBeam/BorderBeam"

type MainHeaderprops = {
    title: string }

export const MainHeader = (props : MainHeaderprops) => {
    return <>
        <header className="z-10">
            <HeaderStyledTitle title={props.title} />
        </header>
    </>
}