import {
    Timeline,
    TimelineItem,
    TimelineTitle,
    TimelineHeader,
  } from "@/components/timeline/timeline";
  import { Link as ScrollLink } from "react-scroll";
  
  export const TimelineLayout = ({
    activeSection,
  }: {
    activeSection: string;
  }) => {
    const timelineData = [
      { id: 1, title: "Home", tag: "home" },
      { id: 2, title: "About", tag: "about" },
      { id: 3, title: "Help", tag: "help" },
    ];
  
    return (
      <Timeline className="mt-8">
        {timelineData.map((item) => (
          <TimelineItem key={item.id} title={item.title}>
            <TimelineHeader isActive={activeSection === item.tag}>
              <ScrollLink
                to={item.tag}
                smooth={true}
                spy={true}
                offset={-70}
                className="text-lg text-purple-600 hover:text-purple-800 cursor-pointer"
              >
                <TimelineTitle
                  className={`text-gray-600 cursor-pointer ${activeSection === item.tag
                      ? "text-purple-800"
                      : "hover:text-purple-800"
                    }`}
                >
                  {item.title}
                </TimelineTitle>
              </ScrollLink>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    );
  };
  