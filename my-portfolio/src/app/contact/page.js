

const projects = [
    { id: 1, title: 'Project One', description: 'A cool project about web development.' },
    { id: 2, title: 'Project Two', description: 'A mobile app built using React Native.' },
  ];
  
  export default function Projects() {
    return (
      <div>
        <h1>My Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  