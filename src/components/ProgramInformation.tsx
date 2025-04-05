import { useTabs } from "@/app/context/TabsContext";
import { programs } from "@/lib/constants/programs";
import { TabsContent } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export const ProgramDetails: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { defaultTab } = useTabs();

  return (
    <>
      <Tabs defaultValue={defaultTab} className="w-full" id="programTabs">
        <TabsList className="flex-wrap justify-start gap-3 h-full py-3 mb-10">
          {programs.map((program) => (
            <TabsTrigger value={program.title} key={program.title}>
              {program.icons.map((Icon, iconIndex) =>
                iconIndex === 0 ? (
                  <span
                    key={`icon-${program.title}-${iconIndex}`}
                    className="inline-block w-4 h-4 mr-2"
                  >
                    <Icon />
                  </span>
                ) : null
              )}
              {program.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {programs.map((program, programIndex) => (
          <TabsContent value={program.title} key={`content-${program.title}`}>
            <div className="" id={`${programIndex}`}>
              {/* Content */}
              <div className="pb-6">
                <h2 className="text-2xl font-bold mb-4 font-[MorningBakery] tracking-widest  flex justify-between">
                  <div className="text-secondary">{program.title}</div>
                  {program.icons.map((Icon, iconIndex) => (
                    <span
                      key={`icon-${program.title}-${iconIndex}`}
                      className="inline-block w-4 h-4 mr-2"
                    >
                      <Icon />
                    </span>
                  ))}
                </h2>

                {/* Overview */}
                {program.overview && (
                  <>
                    <h3 className="text-lg font-semibold mt-4 font-[CuteRabbit] tracking-widest">
                      Overview
                    </h3>
                    <p className="mb-4">{program.overview}</p>
                  </>
                )}

                {/* Keypoints */}
                {program.keypoints.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mt-4 font-[CuteRabbit] tracking-widest">
                      Key Components
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {program.keypoints.map((point, pointIndex) => (
                        <li key={pointIndex}>
                          <strong>{point.split(":")[0]}:</strong>{" "}
                          {point.split(":")[1]}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Outcomes */}
                {program.outcome && (
                  <>
                    <h3 className="text-lg font-semibold mt-4 font-[CuteRabbit] tracking-widest">
                      Learning Outcomes
                    </h3>
                    <p className="mb-4">{program.outcome}</p>
                  </>
                )}

                {/* Goals */}
                {program.goal && (
                  <>
                    <h3 className="text-lg font-semibold mt-4 font-[CuteRabbit] tracking-widest">
                      Program Goals
                    </h3>
                    <p className="">{program.goal}</p>
                  </>
                )}

                {/* Images */}
                {program.images.length > 0 ? (
                  <div className="py-2">
                    <div className="flex items-start justify-between pb-7">
                      <h3 className="text-lg font-semibold font-[CuteRabbit] m-0 tracking-widest">
                        Class Images
                      </h3>
                      <Button
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === programIndex ? null : programIndex
                          )
                        }
                        className="mt-2 group"
                      >
                        {activeIndex === programIndex
                          ? "Hide Images"
                          : "View Images"}
                        <span
                          className={`inline-block transition-transform duration-300 ease-in-out ${
                            activeIndex === programIndex
                              ? "rotate-180 group-hover:translate-x-2"
                              : "group-hover:translate-x-2"
                          }`}
                        >
                          {activeIndex === programIndex ? (
                            <LuArrowBigLeftDash />
                          ) : (
                            <LuArrowBigRightDash />
                          )}
                        </span>
                      </Button>
                    </div>
                    <div>
                      {activeIndex === programIndex && (
                        <div className="flex flex-wrap gap-5 justify-between">
                          {program.images.map((image, imageIndex) => (
                            <img
                              key={imageIndex}
                              src={image}
                              className="object-cover object-center aspect-video w-1/5"
                              alt={`${program.title} Image ${imageIndex + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center uppercase">
                    {" "}
                    Class Photos To Come
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default ProgramDetails;
