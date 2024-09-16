import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useTheme } from "../../context/ThemeContext";
import { fetchedGlobal, fetchStatus } from "../../features/NewsData/newsSlice";
import { cn } from "../../lib/utils";
import { RightArrow } from "../Icons/RightArrow";
import Marquee from "../MagicUI/Marquee/MarqueeComponent";
import { getNews } from "../../features/NewsData/newsThunk";

export function GlobalHub(props : any) {

  const dispatch = useAppDispatch();
  const data = useAppSelector(fetchedGlobal);
  const status = useAppSelector(fetchStatus);
  const [ dispatchCount, setDispatchCount ] = useState<number>(0)
  const { theme } = useTheme();

  useEffect(() => {
    const fetchNews = async () => {
      if (status === "fulfilled") {
        const responses = await Promise.all([
          dispatch(getNews("news")),
          dispatch(getNews("politics")),
        ]);
      }
    };
  
    fetchNews();
  }, [status, dispatch]);
    
  return (
    <div className="relative flex h-[736px] p-[12px] mx-auto w-[90%] flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl z-10 font-[Poppins] text-black mt-[30px]">
      <Marquee pauseOnHover className="[--duration:90s]">
       
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:90s]">
      
      </Marquee>
    </div>
  );
}