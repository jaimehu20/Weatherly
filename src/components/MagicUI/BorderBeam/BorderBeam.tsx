import { useTheme } from "../../../context/ThemeContext";
import { BorderBeam } from "./BorderBeamComponent";

type BorderTitle = {
  title: string; }

export function BorderBeamDemo(props : BorderTitle) {

  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} relative flex w-[1000px] flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl mx-auto mt-[60px] py-5 px-0`}>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/100">
        {props.title}
      </span>
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
