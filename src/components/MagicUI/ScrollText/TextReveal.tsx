import { useTheme } from "@/context/ThemeContext";
import { TextRevealByWord } from "./ScrollTextComponent";

export const Slogan = () => {

  const { theme } = useTheme();

  return (
    <>
        <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} z-10 flex min-h-[16rem] items-center justify-center`}>
            <TextRevealByWord text="A new way to effortlessly explore and understand weather patterns." />
        </div>
    </>
  );
}
