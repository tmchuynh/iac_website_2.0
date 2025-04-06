import { useTabs } from "@/app/context/TabsContext";
import { programs } from "@/lib/constants/programs";
import { TabsContent } from "@radix-ui/react-tabs";
import React, { useState } from "react";
import Image from "next/image";
import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export const ProgramDetails: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { defaultTab } = useTabs();

  return (
    <>
      <Tabs defaultValue={defaultTab} className="w-full" id="programTabs">
        <TabsList className="flex-wrap justify-start gap-3 mb-10 py-3 h-full">
          {programs.map((program) => (
            <TabsTrigger
              value={program.title}
              key={program.title}
              className="group data-[state=active]:font-bold data-[state=active]:text-primary data-[state=active]:uppercase"
            >
              {program.icons.map((Icon, iconIndex) =>
                iconIndex === 0 ? (
                  <span
                    key={`icon-${program.title}-${iconIndex}`}
                    className="inline-block mr-1 -mb-1 w-5 h-5"
                  >
                    <Icon className="group-hover:text-secondary" />
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
                <div className="flex items-center gap-4">
                  <h2 className="flex justify-between font-bold text-2xl tracking-widest">
                    <div className="text-secondary">{program.title}</div>
                  </h2>

                  <p>
                    {program.icons.map((Icon, iconIndex) => (
                      <span
                        key={`icon-${program.title}-${iconIndex}`}
                        className="inline-block mr-2 w-4 h-4"
                      >
                        <Icon />
                      </span>
                    ))}
                  </p>
                </div>

                {/* Overview */}
                {program.overview && (
                  <>
                    <h3 className="mt-4 font-semibold text-lg tracking-widest">
                      Overview
                    </h3>
                    <p className="mb-4">{program.overview}</p>
                  </>
                )}

                {/* Keypoints */}
                {program.keypoints.length > 0 && (
                  <>
                    <h3 className="my-4 font-semibold text-lg tracking-widest">
                      Key Components
                    </h3>
                    <ul className="space-y-2">
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
                    <h3 className="mt-4 font-semibold text-lg tracking-widest">
                      Learning Outcomes
                    </h3>
                    <p className="mb-4">{program.outcome}</p>
                  </>
                )}

                {/* Goals */}
                {program.goal && (
                  <>
                    <h3 className="mt-4 font-semibold text-lg tracking-widest">
                      Program Goals
                    </h3>
                    <p className="">{program.goal}</p>
                  </>
                )}

                {/* Images */}
                {program.images.length > 0 ? (
                  <div className="py-2">
                    <div className="flex justify-between items-start pb-7">
                      <h3 className="m-0 font-semibold text-lg tracking-widest">
                        Class Images
                      </h3>
                      <Button
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === programIndex ? null : programIndex
                          )
                        }
                        className="group mt-2"
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
                        <div className="flex flex-wrap justify-between gap-5">
                          {program.images.map((image, imageIndex) => (
                            <Image
                              key={imageIndex}
                              src={image}
                              className="w-1/5 object-cover object-center aspect-video"
                              alt={`${program.title} Image ${imageIndex + 1}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="py-6 uppercase">Class Photos To Come</div>
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
