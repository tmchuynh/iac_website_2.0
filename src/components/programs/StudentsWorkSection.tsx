import { showcase } from "@/lib/constants/student_work";
import StudentWorkCard from "../cards/StudentWorkCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

/**
 * StudentsWorkSection component displays a tabbed interface for showcasing student works.
 *
 * The component renders a set of tabs, where each tab represents a subject category.
 * When a tab is selected, it displays a grid of student work cards related to that subject.
 *
 * The component uses the `showcase` data structure which should be an array of objects with:
 * - `subject`: string - The name of the subject category
 * - `works`: array - Collection of work items to be displayed in the tab content
 *
 * It leverages the Tabs, TabsList, TabsTrigger, and TabsContent components for the tabbed interface,
 * and uses StudentWorkCard to render individual student work items.
 *
 * @returns A tabbed component displaying categories of student works organized by subject
 */
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
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {subject.works.map((work, index) => (
              <StudentWorkCard work={work} key={index} index={index} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
