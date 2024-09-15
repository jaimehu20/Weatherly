import { useTheme } from "../../../context/ThemeContext";
import { BorderBeam } from "./BorderBeamComponent";

type BorderTitle = {
  title: string; }

export function HeaderStyledTitle(props : BorderTitle) {

  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} relative flex w-[1000px] max-1000:w-[90%] flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl mx-auto mt-[60px] py-5 px-0`}>
      <span className={`${theme === "dark" ? "text-[#EDEDED]" : "text-[#2E3239]"} pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl max-1000:text-[58px] font-semibold leading-none text-transparent`}>
        {props.title}
      </span>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
