import Layout from '../components/Layout';
import projectsArray from '../projectsArray';
import Project from '../components/Project';

const projects = () => {
  return (
    <Layout>
      {/* Projects container */}
      <div className='projects'>
        {/* Map over the projects array and render each project */}
        {projectsArray.map((project) => (
          <div key={project.id}>
            {/* Project component */}
            <Project
              title={project.title}
              image={project.image}
              description={project.description}
              github={project.github}
              live={project.live}
            />
          </div>
        ))}
      </div>

      {/* Add custom styling */}
      <style jsx>{`
        .projects {
          display: flex;
          justify-content: space-around;
          margin: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default projects;