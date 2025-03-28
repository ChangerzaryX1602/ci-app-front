import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SquareCheckBig } from "lucide-react";

const Knowledge = () => {
  const data = [
    "Faculty news & events",
    "Adminssion & course info",
    "Scholarships & eligibity",
    "Course registration steps",
    "Research & funding details",
    "FAQs on studies & exams",
  ];
  return (
    <Card className="w-4/5 xl:w-3/5">
      <CardContent className="font-medium mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex space-x-2">
                <SquareCheckBig color="green" />
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Knowledge;
