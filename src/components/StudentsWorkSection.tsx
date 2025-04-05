import { showcase } from "@/lib/constants/student_work";
import StudentWorkCard from "./cards/StudentWorkCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function StudentsWorkSection() {
  return (
    <Tabs defaultValue="Creative Writing" className="w-full">
      <TabsList className="flex-wrap gap-3">
        {showcase.map((subject, index) => (
          <TabsTrigger value={subject.subject} key={index}>
            {subject.subject}
          </TabsTrigger>
        ))}
      </TabsList>
      {showcase.map((subject, index) => (
        <TabsContent value={subject.subject} key={index}>
          <div className="flex flex-col gap-4">
            {subject.works.map((work, index) => (
              <StudentWorkCard work={work} key={index} index={index} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
