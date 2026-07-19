import ProjectList from './ProjectList';
import { getPortfolioProjects } from '@/lib/portfolio-projects';

export const revalidate = 60;

type Project = {
  id: string;
  slug: string;
  name: string;
  client_type: string;
  tags: string[];
  display_order: number;
};

function getProjects(): Project[] {
  return getPortfolioProjects().map((project) => ({
    id: project.id,
    slug: project.slug,
    name: project.name,
    client_type: project.client_type,
    tags: project.tags,
    display_order: project.display_order,
  }));
}

export default async function Projects() {
  const projects = getProjects();

  return <ProjectList projects={projects} />;
}
