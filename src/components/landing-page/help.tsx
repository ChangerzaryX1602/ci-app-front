import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    label:
      "Registration / Student Status Maintenance / Leave of Absence / Withdrawal",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Course registration (credit-based, audit, thesis)</li>
          <li>Maintaining student status</li>
          <li>Leave of absence</li>
          <li>Withdrawal from student status</li>
          <li>Late registration procedures</li>
        </ul>
      </>
    ),
  },
  {
    value: "item-2",
    label: "Submission of English Proficiency Test and Training Results",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Steps for submitting English test/training results</li>
          <li>
            English proficiency requirements for thesis/dissertation examination
          </li>
        </ul>
      </>
    ),
  },
  {
    value: "item-3",
    label: "Appointment / Change of Thesis Advisor and Thesis Title",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Appointing or changing a thesis advisor</li>
          <li>Changing the thesis or independent study title</li>
        </ul>
      </>
    ),
  },
  {
    value: "item-4",
    label: "Qualifying Examination and Comprehensive Examination",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Qualifying examination (for doctoral students)</li>
          <li>Comprehensive examination (for Plan B programs)</li>
          <li>Procedure for reporting examination results</li>
        </ul>
      </>
    ),
  },
  {
    value: "item-5",
    label: "Thesis / Dissertation Proposal Examination and Approval",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Proposal defense procedures</li>
          <li>Reporting proposal examination results</li>
          <li>Submitting the proposal for approval</li>
          <li>Requesting research funding</li>
        </ul>
      </>
    ),
  },
  {
    value: "item-6",
    label:
      "Thesis / Dissertation / Independent Study Examination and Submission",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Thesis/dissertation/IS examination procedures</li>
          <li>Reporting examination results</li>
          <li>Thesis submission procedures (paper and E-Thesis)</li>
          <li>Graduation conditions and degree conferral requirements</li>
        </ul>
      </>
    ),
  },
  {
    value: "item-7",
    label: "Graduation Request",
    content: (
      <>
        <ul className="list-disc ml-6">
          <li>Steps for requesting graduation</li>
          <li>Graduate registration</li>
          <li>Receiving the degree certificate</li>
          <li>Postponing participation in the graduation ceremony</li>
        </ul>
      </>
    ),
  },
];

const Help = () => {
  return (
    <div id="help" className="w-4/5 mb-36 lg:w-4/5 md:mt-36  text-center xl:w-3/5">
      <div className="text-3xl font-bold text-purple-600 aa">Help</div>
      <p className="m-3">
        Welcome! We&apos;re here to help you solve problems and answer
        questions.
      </p>

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden max-w-3xl mx-auto">
        <h2 className="font-bold text-lg underline text-center py-2 bg-gray-100 border-b border-gray-300 dark:bg-black">
          Frequently Asked Questions
        </h2>
        <div className="p-5 text-left">
          <p>
            <span className="font-semibold mb-2">Q: </span> What are the
            standard registration procedures?
          </p>
          <div className="flex items-start mt-2">
            <p className="font-semibold mr-2">A: </p>
            <ul className="list-disc ml-4 space-y-2 text-left">
              <li>
                Registration must be completed via-
                <a
                  href="https://reg.kku.ac.th/"
                  className="underline text-blue-600 hover:text-blue-800 ml-1"
                >
                  https://reg.kku.ac.th/
                </a>
                , where students can register for 1-15 credits.
              </li>/
              <li>
                Confirm the registration and make payment through a bank or via
                QR code, as specified on the fee invoice. This must be done
                within the dates and times specified in the university&apos;s
                academic calendar, which is announced annually.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-lg underline mt-3">Categories</h2>
      <div className="md:flex flex-col items-center text-start">
        <Accordion type="single" collapsible className="md:w-9/12 xl:w-10/12">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-base text-start ">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="text-base text-start">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <h2 className="font-bold text-lg underline mt-3">Contact KKU</h2>
      <p>Email: reg@kku.ac.th</p>
    </div>
  );
};

export default Help;
