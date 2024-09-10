import { cn } from "../../lib/utils";
import { RightArrow } from "../Icons/RightArrow";
import Marquee from "../MagicUI/Marquee/MarqueeComponent";

export function MarqueeDemo(props : any) {

  if (!props.data || !props.data[0]?.articles) {
    return <div>Loading...</div>;  // O algún otro mensaje de carga
}

    const filteredArticles = props.data[0].articles.filter(article => article.title !== '[Removed]' && article.urlToImage != null);
    
    const news = filteredArticles.map((article : any) => {
        return (
            <>
                <figure className={cn( "flex flex-col justify-around relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4", "border-gray-950/[.1] bg-black","dark:border-gray-50/[.1] bg-[rgb(223,233,245,0.6);] dark:hover:bg-gray-50/[.15] shadow-md",)}>
                    <img src={article.urlToImage} className="mt-[20px] rounded"/>
                    <p className="mt-[20px] font-semibold">{article.title}</p>
                    <a className="flex justify-end bg-white w-[58%] p-[3px] rounded-[12px] self-end" href={article.url} target="_blank">
                        <p>Learn More</p>
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
