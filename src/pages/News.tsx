import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchedNews, fetchStatus } from "../features/NewsData/newsSlice";
import { getWeatherNews } from "../features/NewsData/newsThunk";
import { GlobalHub } from "../components/News/News";
import { Footer } from "../components/Footer/Footer";
import { RightArrow } from "../components/Icons/RightArrow";
import BlurFade from "../components/MagicUI/Blur/BlurFadeComponent";
import { useTheme } from "../context/ThemeContext";

export const News = () => {

    const dispatch = useAppDispatch();
    const data = useAppSelector(fetchedNews);
    const status = useAppSelector(fetchStatus);
    const { theme } = useTheme();

    useEffect(() => {
        if (status === "idle") {
            dispatch(getWeatherNews())
        }
    }, [status, dispatch])

    if (data && data[0] && data[0].articles) {
        const article1 = data[0].articles.slice(0, 4);
        const article2 = data[0].articles.slice(4);
        const articles = [article1, article2];

        const content = articles.map((articleGroup, index: number) => {
            return (
                <>
                    <article className={`${theme === "dark" ? "bg-[rgb(46,50,57,0.8)]" : "bg-[rgb(223,233,245,0.6)]"} z-10 w-[60%] max-1000:w-[95%] max-1000:max-w-[590px] mx-auto font-[Poppins] rounded-[12px] pb-[20px]`}>
                        <div className="border-b-2 border-black w-[98%] mx-auto mb-[30px]">
                            {index === 0 && (
                                <div className="p-[12px]">
                                    <h3 className={`${theme === "dark" ? "text-[#EDEDED]" : "text-[#002E48]"} text-[30px] font-semibold w-[98%] mx-auto`}>Featured news</h3>
                                </div> 
                            )}
                        </div>
                        <div>
                            <div className={`${theme === "dark" ? "text-[#EDEDED]" : "text-[#002E48]"} p-[12px] pl-[24px] pr-[24px]`}>
                                <div className="grid grid-cols-2 grid-rows-3 gap-x-[20px] gap-y-[20px] max-1000:flex max-1000:flex-col">
                                    <div className="row-span-3 mr-[30px]">
                                        <div className="flex flex-col">
                                            <img className="rounded object-cover mb-[10px] shadow-lg" src={articleGroup[0].image}/>
                                            <small className="mb-[10px]">{articleGroup[0].source.name}</small>
                                            <a href={articleGroup[0].url} rel="noopener noreferrer" target="_blank">
                                                <p className="text-[30px] font-semibold">{articleGroup[0].title}</p>
                                            </a>
                                            <small>{`Published at ${new Date(articleGroup[0].publishedAt).toISOString().substr(11, 8)}`}</small>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-col">
                                            <small>{articleGroup[1].source.name}</small>
                                            <a href={articleGroup[1].url} rel="noopener noreferrer" target="_blank" className="w-[80%]">
                                                <p className="text-[25px] font-medium max-1000:text-[20px] max-1000:font-light">{articleGroup[1].title}</p>
                                            </a>
                                            <small className="mb-[16px]">{`Published at ${new Date(articleGroup[1].publishedAt).toISOString().substr(11, 8)}`}</small>
                                            <a className="flex justify-end bg-white w-[18%] max-1000:w-[120px] p-[3px] rounded-[12px] self-start" href={articleGroup[1].url} target="_blank" rel="noopener no referrer">
                                                <p className="text-[#002E48]">Learn More</p>
                                                <RightArrow />
                                                </a>
                                        </div>
                                    </div>
                                    <div className="col-start-2 row-start-2">
                                        <div className="flex flex-col">
                                            <small>{articleGroup[2].source.name}</small>
                                            <a href={articleGroup[2].url} rel="noopener noreferrer" target="_blank" className="w-[80%]">
                                                <p className="text-[25px] font-medium max-1000:text-[20px] max-1000:font-light">{articleGroup[2].title}</p>
                                            </a>
                                            <small className="mb-[16px]">{`Published at ${new Date(articleGroup[2].publishedAt).toISOString().substr(11, 8)}`}</small>
                                            <a className="flex justify-end bg-white w-[18%] max-1000:w-[120px] p-[3px] rounded-[12px] self-start" href={articleGroup[2].url} target="_blank" rel="noopener no referrer">
                                                <p className="text-[#002E48]">Learn More</p>
                                                <RightArrow />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-start-2 row-start-3">
                                        <div className="flex flex-col">
                                            <small>{articleGroup[3].source.name}</small>
                                            <a href={articleGroup[3].url} rel="noopener noreferrer" target="_blank" className="w-[80%]">
                                                <p className="text-[25px] font-medium max-1000:text-[20px] max-1000:font-light">{articleGroup[3].title}</p>
                                            </a>
                                            <small className="mb-[16px]">{`Published at ${new Date(articleGroup[3].publishedAt).toISOString().substr(11, 8)}`}</small>
                                            <a className="flex justify-end bg-white w-[18%] max-1000:w-[120px] p-[3px] rounded-[12px] self-start" href={articleGroup[3].url} target="_blank" rel="noopener no referrer">
                                                <p className="text-[#002E48]">Learn More</p>
                                                <RightArrow />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </>
            )
        })

    return <>
        <Navbar />
        <MainHeader title="News & Updates" />
        <main className="mt-20 mb-10">
            <section className={`${theme === "dark" ? "bg-[url(/skynight.webp)]" : "bg-[url(/sky.webp)]"} relative w-full bg-cover bg-center flex flex-col`}>
                <div className={`${theme === "dark" ? "absolute inset-1 bg-gradient-to-r from-[#26292B] via-transparent to-[#26292B]" : "absolute inset-1 bg-gradient-to-r from-[#EDEDED] via-transparent to-[#EDEDED]"}`}></div>
                <BlurFade delay={0.25 + 1 * 0.05} inView className="flex flex-row justify-center">
                    {content}
                    <div className="mt-[78px]">
                        <h1 className={`${theme === "dark" ? "text-[#EDEDED]" : "text-[#002E48]"} font-[Poppins] text-[44px] max-1000:text-[38px] font-semibold`}>Global News Hub</h1>
                    </div>
                    <GlobalHub data={data}/>
                </BlurFade>
                <div className={`${theme === "dark" ? "absolute inset-0 bg-gradient-to-b from-[#26292B] via-transparent to-[#26292B]" : "absolute inset-0 bg-gradient-to-b from-[#EDEDED] via-transparent to-[#EDEDED]"}`}></div>
            </section>
        </main>
        <Footer />
    </>
    }
}