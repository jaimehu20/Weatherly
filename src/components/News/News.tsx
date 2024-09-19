import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useTheme } from "@/context/ThemeContext";
import { fetchedGlobal } from "@/features/NewsData/newsSlice";
import { cn } from "@/lib/utils";
import { RightArrow } from "@/components/Icons/RightArrow";
import Marquee from "@/components/MagicUI/Marquee/MarqueeComponent";
import { getNews } from "@/features/NewsData/newsThunk";
import { Article, NewsResponse } from "@/interfaces/interfaces";

export function GlobalHub() {

  const dispatch = useAppDispatch();
  const data : NewsResponse[] = useAppSelector(fetchedGlobal);
  const{ theme } = useTheme();
  
  const getRandomTopics = (topicsArray : string[]) => {
    const shuffled = topicsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  };

  useEffect(() => {
    const topics = ["technology", "sports", "politics", "entertainment", "science", "health"];
    
    const [topic1, topic2] = getRandomTopics(topics);

      dispatch(getNews(topic1));
      dispatch(getNews(topic2));

  }, [dispatch]);

  const news = data.map((article : any) => {

    return (
        <>
            <figure className={cn(`${theme === "dark" ? "bg-[rgb(46,50,57,0.8)] text-[#EDEDED]" : "bg-[rgb(223,233,245,0.6)] text-[#002E48]"} flex flex-col justify-around relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15] shadow-md`)}>
                <img src={article.image} className="mt-[20px] rounded h-[116px] object-cover"/>
                <p className="mt-[20px] font-semibold">{article.title}</p>
                <a className="flex justify-end bg-white w-[58%] p-[3px] rounded-[12px] self-end" href={article.url} target="_blank" rel="noopener noreferrer">
                    <p className="text-[#002E48]">Learn More</p>
                    <RightArrow />
                </a>
            </figure>
        </>
    )
})

  return (
    <div className="relative flex h-[736px] p-[12px] mx-auto w-[90%] flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl z-10 font-[Poppins] text-black mt-[30px]">
      <Marquee pauseOnHover className="[--duration:700s]">
       {news}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:700s]">
      {news}
      </Marquee>
    </div>
  );
}