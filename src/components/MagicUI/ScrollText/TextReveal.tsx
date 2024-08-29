import { TextRevealByWord } from "./ScrollTextComponent";

export const TextRevealDemo = () => {
  return (
    <>
        <div className="z-10 flex min-h-[16rem] items-center justify-center bg-white ">
            <TextRevealByWord text="A new way to effortlessly explore and understand weather patterns." />
        </div>
    </>
  );
}
