"use client";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar/Navbar";
import DotPattern from "@/components/MagicUI/Background/Darkmode/DarkmodeComponent";
import { MainHeader } from "@/components/Header/MainHeader";
import GradualSpacing from "@/components/MagicUI/GradualSpacing/GradualSpacingComponent";
import { useTheme } from "@/context/ThemeContext";
import { Check } from "@/components/Icons/Check";
import { Footer } from "@/components/Footer/Footer";

export const Guides = () => {

  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <div className="relative flex w-full flex-col items-center justify-start overflow-hidden rounded-lg bg-background md:shadow-xl">
        <MainHeader title="Guides & Tips" />
        <main className={`${theme === "dark" ? "text-lightGray" : "text-[#26292B]"} w-[80%] min-1000:w-full wide:w-[80%] self-center mt-[100px] z-10 font-[Poppins] mb-[30px]`}>
          <section className="flex flex-col w-[80%] max-1000:w-[90%] min-1000:mx-auto">
            <GradualSpacing className="font-display text-center text-4xl min-1000:text-[40px] wide:text-[62px] font-bold tracking-[-0.1em] md:text-7xl md:leading-[5rem] max-1000:hidden" text="Staying Safe in Severe Weather: A Guide" />
            <GradualSpacing className="font-display text-center text-4xl font-bold tracking-[-0.1em] md:text-7xl md:leading-[5rem] min-1000:hidden" text="Staying Safe in" />
            <GradualSpacing className="font-display text-center text-4xl font-bold tracking-[-0.1em] md:text-7xl md:leading-[5rem] min-1000:hidden" text="Severe Weather:" />
            <GradualSpacing className="font-display text-center text-2xl font-bold tracking-[-0.1em] md:text-7xl md:leading-[5rem] min-1000:hidden" text="A Guide" />
            <p className="mt-[50px] text-[40px] wide:text-[40px] min-1000:text-[30px] max-1000:text-[24px]">
              Weather is a highly unpredictable and powerful force, capable of bringing both favorable conditions and dangerous events like storms, floods, and lightning. 
            </p>
            <p className="mt-[30px] text-[20px]">
              Knowing how to prepare for and respond to severe weather is vital for ensuring the safety of yourself, your loved ones, and your property. 
              This essay provides a guide on handling hazardous weather, including storms, floods, lightning, and rare extreme conditions like grape rays (an unusual phenomenon linked to intense solar radiation).
            </p>
          </section>
          <section className="mt-[100px] mb-[100px] max-1000:mb-[65px]">
            <div className="flex justify-around mb-[100px] max-1000:mb-[40px] max-1000:flex-col">
              <article className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[rgb(203,203,203)]"} p-[24px] w-[40%] max-1000:w-full min-1000:w-[48%] h-fit p-[10px] rounded shadow-lg max-1000:mb-[20px]`}>
                <h1 className="inline text-[40px] font-semibold">Storms: </h1>
                <p className="inline text-[20px]">Understanding and preparation</p>
                <p className="mt-[30px] mb-[20px] text-[18px]">
                  Storms, including thunderstorms, hurricanes, and tornadoes, can be highly destructive. 
                  These events often involve high winds, heavy rain, and lightning, making it essential to stay informed and prepared.
                </p>
                <div>
                  <h2 className="font-semibold">Before the storm:</h2>
                  <ul className="list-inside pl-[5px]">
                    <li className="mb-[10px] list-disc">
                      Stay Informed: Pay attention to weather alerts from local authorities.
                    </li>
                    <li className="mb-[10px] list-disc">
                      Emergency Kit: Prepare an emergency kit containing water, non-perishable food, flashlights, batteries, a first-aid kit, important documents, and any necessary medications.
                    </li>
                    <li className="mb-[10px] list-disc">
                      Secure Your Property: Bring in loose outdoor items like patio furniture, bicycles, or trash cans. Ensure trees near your home are well-trimmed to minimize damage from falling branches.
                    </li>
                    <li className="mb-[10px] list-disc">
                      Safe Shelter: Know the safest place in your home during a storm. Ideally, seek shelter in a basement or interior room away from windows. Mobile homes and vehicles are not safe during severe storms; identify the nearest storm shelter or sturdy building in your area.
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold">During the storm:</h2>
                  <ul className="list-inside pl-[5px]">
                    <li className="mb-[10px] list-disc">
                      Avoid Windows: Stay away from windows and glass doors to protect yourself from flying debris.
                    </li>
                    <li className="mb-[10px] list-disc">
                      Electrical Safety: Avoid using electrical appliances, and unplug unnecessary devices to reduce the risk of fire caused by lightning strikes or power surges.
                    </li>
                    <li className="mb-[10px] list-disc">
                      Outdoor Safety: If you are caught outside, find shelter immediately. Do not seek refuge under isolated trees or metal structures, as these are prone to lightning strikes.
                    </li>
                  </ul>
                </div>
              </article>
              <article className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[rgb(203,203,203)]"} p-[24px] w-[40%] max-1000:w-full h-fit p-[10px] rounded shadow-lg`}>
              <h1 className="inline text-[40px] font-semibold">Floods: </h1>
              <p className="inline text-[20px]">Recognizing and Responding to Water-Related Dangers</p>
              <p className="mt-[30px] mb-[20px] text-[18px]">
                Flooding is one of the most common natural disasters worldwide and can result from heavy rains, storm surges, or the overflow of rivers. 
                Even a few inches of water can cause life-threatening situations.
              </p>
              <div>
                <p className="font-semibold max-1000:mb-[10px]">It's important to be prepared for a flood, and you'll know you are when: </p>
                <ul className="list-inside pl-[5px]">
                  <li className="flex gap-[14px] max-1000:gap-[0] mb-[10px] list-disc">
                    <p className="w-[64%] max-1000:w-full" >You monitor local flood alerts, especially during prolonged rain or if you live near bodies of water.</p>
                    <Check />
                  </li>
                  <li className="flex gap-[14px] max-1000:gap-[0] mb-[10px] list-disc">
                    <p className="w-[64%] max-1000:w-full" >You have an evacuation plan, knowing the safest routes to higher ground or designated shelters, and keep an emergency kit ready with important documents and valuables in waterproof containers.</p>
                    <Check />
                  </li>
                  <li className="flex gap-[14px] max-1000:gap-[0] mb-[10px] list-disc">
                    <p className="w-[64%] max-1000:w-full" >You use sandbags or barriers if you live in a flood-prone area to divert water away from entrances and low windows.</p>
                    <Check />
                  </li>
                </ul>
              </div>
              </article>
            </div>
            <div className="mb-[100px]">
              <article className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[rgb(203,203,203)]"} p-[24px] w-full min-1000:w-[90%] min-1000:mx-auto h-fit p-[10px] rounded shadow-lg max-1000:flex max-1000:flex-col max-1000:items-center`}>
                <h1 className="inline text-[40px] font-semibold">Lightning: </h1>
                <p className="inline text-[20px]">Minimizing Risk from Electrical Storms</p>
                <p className="mt-[30px] mb-[20px] text-[18px] w-[60%] max-1000:w-full">
                  Lightning is a common occurrence during thunderstorms and can strike up to 10 miles away from a storm. 
                  Lightning strikes are incredibly dangerous, often causing fires, injuries, or even fatalities.
                </p>
                <h2 className="font-semibold">Here are some essential tips to keep in mind:</h2>
                <div className="flex max-1000:flex-col justify-between w-[80%] max-1000:w-full mx-auto pb-[20px]">
                  <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} flex flex-col justify-center w-[30%] min-1000:w-[32%] max-1000:w-full items-center mt-[26px] p-[5px] rounded shadow-lg`}>
                    <p className="w-[22%] max-1000:max-w-[107px] min-1000:w-[48%] text-center mb-[10px] border-b-2 border-black">Stay Indoors</p>
                    <p className="w-[70%]">
                      The safest place during a lightning storm is inside a sturdy building. 
                      Stay inside for at least 30 minutes after the last clap of thunder to ensure the storm has passed.
                    </p>
                  </div>
                  <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} flex flex-col justify-center w-[30%] min-1000:w-[32%] max-1000:w-full items-center mt-[26px] p-[5px] rounded shadow-lg`}>
                    <p className="w-[32%] max-1000:max-w-[150px] min-1000:w-[70%] text-center mb-[10px] border-b-2 border-black">Avoid Conductors</p>
                    <p className="w-[70%]">
                      Do not use electrical appliances, telephones, or plumbing during a storm, as lightning can travel through these systems. 
                    </p>
                  </div>
                  <div className={`${theme === "dark" ? "bg-[#26292B]" : "bg-[#EDEDED]"} flex flex-col justify-center w-[30%] min-1000:w-[32%] max-1000:w-full items-center mt-[26px] p-[5px] rounded shadow-lg`}>
                    <p className="w-[40%] max-1000:max-w-[166px] min-1000:w-[60%] text-center mb-[10px] border-b-2 border-black">Stay Low if Outdoors</p>
                    <p className="w-[70%]">
                      The safest place during a lightning storm is inside a sturdy building. 
                      Stay inside for at least 30 minutes after the last clap of thunder to ensure the storm has passed.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="flex justify-around mb-[50px] max-1000:flex-col">
              <article className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[rgb(203,203,203)]"} p-[24px] w-[60%] max-1000:w-full h-fit p-[10px] rounded shadow-lg max-1000:mb-[20px]`}>
              <h1 className="inline text-[40px] font-semibold">Extreme Heat and Grape Rays: </h1>
              <p className="inline text-[20px]">Protecting Against Sun-Related Hazards</p>
              <p className="mt-[30px] mb-[20px] text-[18px]">
                Extreme heat and solar radiation can pose serious health risks. 
                While "grape rays" are a hypothetical phenomenon (perhaps a misunderstanding of "grape solar phenomena" or ultraviolet rays), 
                high levels of ultraviolet (UV) radiation from the sun can cause sunburn, skin cancer, and eye damage.
              </p>
              <div>
                <p className="font-semibold">During Extreme Heat: </p>
                <ul className="list-outside pl-[25px]">
                  <li className="mb-[10px] list-disc">
                    <p>Stay Hydrated: Drink plenty of water and avoid alcohol or caffeine, as these can cause dehydration.</p>
                  </li>
                  <li className="mb-[10px] list-disc">
                    <p>
                      Stay Indoors: During peak sun hours (10 a.m. to 4 p.m.), try to stay indoors, especially in air-conditioned environments. 
                      If you must go outside, wear lightweight, light-colored clothing and a wide-brimmed hat.
                    </p>
                  </li>
                  <li className="mb-[10px] list-disc">
                    <p>Sunscreen and Sunglasses: Use sunscreen with high SPF to protect your skin, and wear sunglasses that block UVA and UVB rays to protect your eyes.</p>
                  </li>
                  <li className="mb-[10px] list-disc">
                    <p>
                      Avoid Overexertion: Physical activity in extreme heat can lead to heat exhaustion or heatstroke. 
                      Be aware of symptoms such as dizziness, rapid heartbeat, and confusion, which indicate a medical emergency.
                    </p>
                  </li>
                </ul>
                <p className="font-semibold">Solar Radiation (UV Rays): </p>
                <ul className="list-outside pl-[25px]">
                  <li className="mb-[10px] list-disc">
                    <p>UV Index Awareness: Check the daily UV index forecast in your area, and plan outdoor activities when UV exposure is lower.</p>
                  </li>
                  <li className="mb-[10px] list-disc">
                    <p>
                      Sun Protection Gear: In addition to sunscreen, consider UV-protective clothing. 
                      Even on cloudy days, UV rays can penetrate the atmosphere and cause damage.
                    </p>
                  </li>
                </ul>
              </div>
              </article>
              <article className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[rgb(203,203,203)]"} p-[24px] w-[30%] max-1000:w-full h-fit p-[10px] rounded shadow-lg`}>
                <h1 className="inline text-[40px] font-semibold">Tornadoes and High Winds: </h1>
                <p className="inline text-[20px]">Responding to Violent Windstorms</p>
                <p className="mt-[30px] mb-[20px] text-[18px]">Tornadoes and high-wind events, like straight-line winds, are incredibly dangerous due to the flying debris and structural damage they can cause.</p>
                <div>
                  <h2 className="font-semibold">Before a Tornado:</h2>
                  <ul className="list-inside pl-[5px]">
                    <li className="mb-[10px] list-disc">
                      Understand the Warning Signs: Tornadoes often develop in thunderstorms, and warning signs include a greenish sky, large hail, and a sudden, strong stillness in the air. 
                      Familiarize yourself with the difference between a tornado watch (conditions are favorable) and a tornado warning (a tornado has been spotted).
                    </li>
                    <li className="mb-[10px] list-disc">
                      Prepare a Safe Room: Have a designated safe room, preferably a basement or an interior room on the lowest floor of your house, away from windows.
                    </li>
                  </ul>
                  <h2 className="font-semibold">During a Tornado:</h2>
                  <ul className="list-inside pl-[5px]">
                    <li className="mb-[10px] list-disc">
                      Seek Shelter Immediately: If a tornado warning is issued, go to your safe room. If you are outside or in a vehicle, find the nearest sturdy structure or lie flat in a 
                      ditch or low-lying area, covering your head.
                    </li>
                    <li className="mb-[10px] list-disc">
                      Avoid Windows and Doors: Flying debris is the primary cause of injury during tornadoes, so staying away from windows and doors is essential.
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>
          <section className="min-1000:w-[80%] min-1000:mx-auto">
            <p className="mt-[50px] text-[40px] max-1000:text-center max-1000:text-[30px] min-1000:text-[30px]">Weather hazards, from storms and floods to heat and radiation, are forces that must be respected. </p>
            <p className="mt-[30px] text-[20px] max-1000:text-center">
              Being informed and prepared is crucial to minimizing risk and ensuring safety during these events. 
              By staying alert, creating emergency plans, and having the right safety equipment, you can significantly reduce the impact of these natural phenomena. 
              Awareness and preparation are the key tools that can protect you and your family from the unpredictable dangers of extreme weather conditions.
            </p>
            <div className="flex justify-end max-1000:justify-center min-1000:justify-center mt-[50px] rounded">
              <small className={`${theme === "dark" ? "bg-[#2E3239]" : "bg-[rgb(203,203,203)]"} w-[30%] max-1000:w-full p-5 rounded shadow-lg`}>
                  This guide is based on recommendations from official security and civil protection sources. However, it is essential that you always consult the weather warnings and alerts issued
                  by the national authorities in your country, as they are the best source to be aware of the specific and current risks in your area. Stay informed and follow local instructions
                  to ensure your safety at all times.
              </small>
            </div>
          </section>
        </main>
        <Footer />
        <DotPattern className={cn( "[mask-image:radial-gradient(6000px_circle_at_center,white,transparent)]",)} />
      </div>
    </>
  );
}