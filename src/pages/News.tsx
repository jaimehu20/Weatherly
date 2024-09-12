import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { MainHeader } from "../components/Header/MainHeader";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchedNews, fetchStatus, prueba } from "../features/NewsData/newsSlice";
import { getNews } from "../features/NewsData/newsThunk";
import { MarqueeDemo } from "../components/News/News";
import { Footer } from "../components/Footer/Footer";
import { RightArrow } from "../components/Icons/RightArrow";
import BlurFade from "../components/MagicUI/Blur/BlurFadeComponent";

export const News = () => {

    const dispatch = useAppDispatch();
    const data = useAppSelector(fetchedNews);
    const status = useAppSelector(fetchStatus);

    useEffect(() => {
        if (status === "idle") {
            dispatch(getNews("weather"))
        }
    }, [status, dispatch])

    const getRandomArticles = (articles : any, count = 4) => {
        const filteredArticles = articles.filter((article : any) => article.title !== '[Removed]' && article.urlToImage != null);
        return [...filteredArticles].sort(() => Math.random() - 0.5).slice(0, count);
    };

    if (data && data[0] && data[0].articles) {
        const article1 = getRandomArticles(data[0].articles);
        const article2 = getRandomArticles(data[0].articles);

        const combinedArticles = [[...article1], [...article2]];

        const content = combinedArticles.map((articleGroup, index) => {
            return (
                <>
                    <article className="z-10 w-[60%] mx-auto bg-[rgb(223,233,245,0.6)] font-[Poppins] rounded-[12px] pb-[20px]">
                        <div className="border-b-2 border-black w-[98%] mx-auto mb-[30px]">
                            {index === 0 && (
                                <div className="p-[12px]">
                                    <h3 className="text-[30px] font-semibold w-[98%] mx-auto">Featured news</h3>
                                </div> 
                            )}
                        </div>
                        <div>
                            <div className="p-[12px] pl-[24px] pr-[24px]">
                                <div className="grid grid-cols-2 grid-rows-3 gap-x-[20px] gap-y-[20px]">
                                    <div className="row-span-3 mr-[30px]">
                                        <div className="flex flex-col">
                                            <img className="rounded object-cover mb-[10px] shadow-lg" src={articleGroup[0].urlToImage}/>
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
                                                <p className="text-[25px] font-medium">{articleGroup[1].title}</p>
                                            </a>
                                            <small className="mb-[16px]">{`Published at ${new Date(articleGroup[1].publishedAt).toISOString().substr(11, 8)}`}</small>
                                            <a className="flex justify-end bg-white w-[18%] p-[3px] rounded-[12px] self-start" href={articleGroup[1].url} target="_blank" rel="noopener no referrer">
                                                <p>Learn More</p>
                                                <RightArrow />
                                                </a>
                                        </div>
                                    </div>
                                    <div className="col-start-2 row-start-2">
                                        <div className="flex flex-col">
                                            <small>{articleGroup[2].source.name}</small>
                                            <a href={articleGroup[2].url} rel="noopener noreferrer" target="_blank" className="w-[80%]">
                                                <p className="text-[25px] font-medium">{articleGroup[2].title}</p>
                                            </a>
                                            <small className="mb-[16px]">{`Published at ${new Date(articleGroup[2].publishedAt).toISOString().substr(11, 8)}`}</small>
                                            <a className="flex justify-end bg-white w-[18%] p-[3px] rounded-[12px] self-start" href={articleGroup[2].url} target="_blank" rel="noopener no referrer">
                                                <p>Learn More</p>
                                                <RightArrow />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-start-2 row-start-3">
                                        <div className="flex flex-col">
                                            <small>{articleGroup[3].source.name}</small>
                                            <a href={articleGroup[3].url} rel="noopener noreferrer" target="_blank" className="w-[80%]">
                                                <p className="text-[25px] font-medium">{articleGroup[3].title}</p>
                                            </a>
                                            <small className="mb-[16px]">{`Published at ${new Date(articleGroup[3].publishedAt).toISOString().substr(11, 8)}`}</small>
                                            <a className="flex justify-end bg-white w-[18%] p-[3px] rounded-[12px] self-start" href={articleGroup[3].url} target="_blank" rel="noopener no referrer">
                                                <p>Learn More</p>
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
        
        return (
            <>
                <Navbar />
                <MainHeader title="News & Updates" />
                <main className="mt-20 mb-10">
                    <section className="bg-[url(./sky.webp)] relative w-full bg-cover bg-center flex flex-col">
                        <div className="absolute inset-1 bg-gradient-to-r from-white via-transparent to-white"></div>
                        <BlurFade delay={0.25 + 1 * 0.05} inView className="flex flex-row justify-center">
                            {content}
                            <div className="mt-[78px]">
                                <h1 className="font-[Poppins] text-[44px] font-semibold">Global News Hub</h1>
                            </div>
                            <MarqueeDemo data={data}/>
                        </BlurFade>
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}