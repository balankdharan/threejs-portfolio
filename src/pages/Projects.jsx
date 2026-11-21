import { projects } from "../constants";
import { arrow, github } from "../assets/icons";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Projects
          </span>
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            A few of the projects I've built over the years. Each one links to
            its GitHub repo, and there are more on my GitHub profile.
          </p>
        </div>
        <div className="my-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-[16/9] overflow-hidden bg-slate-100"
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-poppins font-semibold text-black-500">
                  {project.name}
                </h2>
                <p className="mt-2 flex-1 text-slate-500">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-5 font-poppins">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-blue-500"
                  >
                    <img
                      src={github}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                    View on GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold text-blue-500"
                    >
                      Live demo
                      <img
                        src={arrow}
                        alt=""
                        className="h-4 w-4 object-contain"
                      />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default Projects;
