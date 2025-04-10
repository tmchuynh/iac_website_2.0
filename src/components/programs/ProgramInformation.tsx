import { useTabs } from "@/app/context/TabsContext";
import { programs } from "@/lib/constants/programs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DynamicButton from "../buttons/button-dynamic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
export default function ProgramDetails({ title }: { title?: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { defaultTab } = useTabs();
  const [programTitle, setProgramTitle] = useState<string | null>(null);
  const [tabsValue, setTabsValue] = useState<string>();

  useEffect(() => {
    if (title) {
      setProgramTitle(title);
    } else {
      setProgramTitle(defaultTab);
    }
  }, [title, defaultTab]);

  useEffect(() => {
    setTabsValue(programTitle || defaultTab || undefined);
  }, [programTitle, defaultTab]);

  return (
    <>
      <Tabs
        value={tabsValue}
        onValueChange={(value: string) => setProgramTitle(value)}
        className="w-full"
        id="programTabs"
      >
        <TabsList className="flex-wrap justify-start gap-3 mb-10 py-3 h-full">
          {programs.map((program) => (
            <TabsTrigger
              value={program.title}
              key={program.title}
              className="group flex items-center gap-3 data-[state=active]:font-bold data-[state=active]:text-primary md:text-md lg:text-lg dark:text-accent data-[state=active]:uppercas"
            >
              <div className="flex justify-center items-center w-5 md:w-8 lg:w-9 2xl:w-10 h-5 md:h-8 lg:h-9 2xl:h-10">
                <Image
                  src={program.titleIcon}
                  alt=""
                  width={35}
                  height={35}
                  className="mb-2"
                />
              </div>
              {program.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {programs.map((program, programIndex) => (
          <TabsContent value={program.title} key={`content-${program.title}`}>
            <div className="" id={`${programIndex}`}>
              {/* Content */}
              <div className="pb-6">
                <h1 className="my-4 pb-4 font-[LuckiestGuy] font-extrabold text-balance text-primary text-xl md:text-2xl lg:text-4xl xl:text-5xl dark:text-chart-2 uppercase tracking-wider">
                  {program.title}
                </h1>

                <div className="flex flex-col">
                  {/* Overview */}
                  {program.overview && (
                    <>
                      <h4 className="pt-6 font-[PatrickHandSC] font-bold text-accent text-lg md:text-xl lg:text-2xl">
                        Overview
                      </h4>
                      <p className="mb-4">{program.overview}</p>
                    </>
                  )}

                  <div className="flex items-center md:gap-4 lg:gap-10">
                    {program.icons.map((Icon, iconIndex) => {
                      return (
                        <div
                          key={`icon-${program.title}-${iconIndex}`}
                          className="inline-block mr-2 -mb-2"
                        >
                          {typeof Icon === "string" ? (
                            <div className="w-7 md:w-10 lg:w-15 2xl:w-20 h-7 md:h-10 lg:h-15 2xl:h-20">
                              <Image
                                src={Icon}
                                alt={`${program.title}_${iconIndex}_${Icon}`}
                                width={120}
                                height={120}
                              />
                            </div>
                          ) : typeof Icon === "function" ? (
                            <Icon />
                          ) : React.isValidElement(Icon) ? (
                            Icon
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Goals */}
                {program.goal && (
                  <>
                    <h4 className="pt-6 font-[PatrickHandSC] font-bold text-accent text-lg md:text-xl lg:text-2xl">
                      Program Goals
                    </h4>
                    <p className="">{program.goal}</p>
                  </>
                )}

                {/* Images */}
                {program.images.length > 0 ? (
                  <div className="py-2">
                    <div className="flex flex-col items-start pb-7">
                      <DynamicButton
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === programIndex ? null : programIndex
                          )
                        }
                        className="mx-0"
                      >
                        {activeIndex === programIndex
                          ? "Hide Images"
                          : "View Class Images"}
                      </DynamicButton>
                    </div>
                    <div>
                      {activeIndex === programIndex && (
                        <div className="flex flex-wrap justify-between gap-5">
                          {program.images.map((image, imageIndex) => (
                            <Image
                              key={imageIndex}
                              src={image}
                              className="rounded-2xl w-1/6 object-center object-cover aspect-square"
                              alt={`${program.title} Image ${imageIndex + 1}`}
                              width={800}
                              height={1200}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <h2 className="pt-6 font-[PermanentMarker] font-bold text-lg text-tertiary/50 md:text-xl lg:text-2xl">
                    Class Photos To Come
                  </h2>
                )}

                {/* Outcomes */}
                {program.outcome && (
                  <>
                    <h4 className="pt-6 font-[PatrickHandSC] font-bold text-accent text-lg md:text-xl lg:text-2xl">
                      Learning Outcomes
                    </h4>
                    <p className="mb-4">{program.outcome}</p>
                  </>
                )}

                {/* Keypoints */}
                {program.keypoints.length > 0 && (
                  <>
                    <h4 className="pt-6 font-[PatrickHandSC] font-bold text-accent text-lg md:text-xl lg:text-2xl">
                      Key Components
                    </h4>
                    <ul className="space-y-2 py-3 list-disc">
                      {program.keypoints.map((point, pointIndex) => (
                        <li key={pointIndex}>
                          <strong>{point.title}</strong>: {point.description}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
