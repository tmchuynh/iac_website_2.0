import { StudentProject } from "@/lib/types/cards";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";

export default function StudentWorkCard(work: StudentProject, index: number) {
  return (
    <Card key={index} className={index % 2 === 0 ? "border-r-8" : "border-l-8"}>
      <CardHeader className="pb-3">
        <h4 className="font-[CuteRabbit] text-lg tracking-widest">
          {work.title}
        </h4>
        <p className="text-xs meta">
          <span className="font-bold">By: </span>
          {work.author}
        </p>
        <p className="text-xs meta">
          <span className="font-bold">Date: </span>
          {work.date}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {work.description}
        <hr />
        {work.preview && <p className="text-sm italic">{work.preview}...</p>}

        {work.images && (
          <>
            <hr />
            <div className="gap-4 grid grid-cols-3">
              {work.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${work.title} image ${index + 1}`}
                  width={300}
                  height={200}
                  className="border border-input rounded-lg"
                />
              ))}
            </div>
          </>
        )}
      </CardContent>

      <CardFooter className="flex justify-end"></CardFooter>
    </Card>
  );
}
