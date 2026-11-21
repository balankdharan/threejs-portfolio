import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          Hello I am{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Dharan
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I'm Balan K Dharan, a full stack developer from India. I work in an
            organization building web applications, and outside work I keep
            building side projects to learn new things, from React and Node.js
            to GraphQL, Python and Gen AI.
          </p>
          <p>
            This site is a practice project for 3D on the web. The island, the
            plane and the fox are built with Three.js and React Three Fiber.
          </p>
        </div>
        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My skills</h3>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-8">
            {skills.map((skill) => (
              <div
                className="flex flex-col items-center gap-3"
                key={skill.name}
              >
                <div className="block-container w-20 h-20">
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt=""
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
                <span className="text-sm text-slate-500">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16">
          <h3 className="subhead-text">My Journey</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              How I got here, from my first JavaScript exercises to working as a
              full stack developer.
            </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, i) => (
                      <li
                        key={`experience-point-${i}`}
                        className="text-black-500/90 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default About;
