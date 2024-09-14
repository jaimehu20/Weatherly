import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../lib/utils";
import { RightArrow } from "../Icons/RightArrow";
import Marquee from "../MagicUI/Marquee/MarqueeComponent";

export function MarqueeDemo(props : any) {

  const { theme } = useTheme();

  if (!props.data || !props.data[0]?.articles) {
    return <div>Loading...</div>;
}

    const filteredArticles = props.data[0].articles.filter((article : any) => article.title !== '[Removed]' && article.urlToImage != null);
    
    const news = filteredArticles.map((article : any) => {
        return (
            <>
                <figure className={cn(`${theme === "dark" ? "bg-[rgb(46,50,57,0.8)] text-[#EDEDED]" : "bg-[rgb(223,233,245,0.6)] text-[#002E48]"} flex flex-col justify-around relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15] shadow-md`)}>
                    <img src={article.urlToImage} className="mt-[20px] rounded"/>
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

/*  */