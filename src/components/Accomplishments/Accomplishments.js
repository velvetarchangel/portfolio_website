import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimeLineData } from "../../constants/constants";
import {
  Section,
  SectionTitle,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { HeaderThree, AccomplishmentInfo } from "./AccomplishmentStyles";
import { AiFillHourglass } from "react-icons/ai";

const Accomplishments = () => {
  return (
    <Section id="accomplishments">
      <SectionDivider />
      <SectionTitle main>Accomplishments</SectionTitle>
      <VerticalTimeline>
        {TimeLineData.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              background: "#13ADC7",
            }}
            contentArrowStyle={{ borderRight: "0px solid #13ADC7" }}
            key={index}
            iconStyle={{
              background: "#FFD700",
              color: "#0b373d",
            }}
            icon={<AiFillHourglass size="5rem" />}
          >
            <HeaderThree>{item.year}</HeaderThree>
            <AccomplishmentInfo>{item.text}</AccomplishmentInfo>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Accomplishments;
