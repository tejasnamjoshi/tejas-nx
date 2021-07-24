const projects = [
  {
    name: 'Book Shelf',
    url: '',
  },
];

export function Projects() {
  return projects.map((project) => (
    <div>
      {project.name}
      {project.url}
    </div>
  ));
}

export default Projects;
