// src/components/Projects.jsx
import { projects } from "../constants";
import { Folder, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-20 px-8 md:px-20 max-w-5xl mx-auto" id="projects">
      <h2 className="text-3xl justify-center font-bold text-blue-400/80 mb-10 flex items-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <Folder className="text-cyan-400 w-10 h-10" />

              {/* --- UPDATE STARTS HERE --- */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
              {/* --- UPDATE ENDS HERE --- */}
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-verdana text-cyan-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
