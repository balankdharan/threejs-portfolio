import { skills } from "../constants";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I am{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Dharan
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer in India,Working in a organization as full stack
          developer, Constantly learning new skills to develop my technical
          knowledge
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My skills</h3>
        <div className=" mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
