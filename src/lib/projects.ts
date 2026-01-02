import fs from 'fs';
import path from 'path';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export function getProjects(): Project[] {
  // In a real app, I would parse frontmatter or walk the dir.
  // For this POC, I will manually construct the JobPang data based on the file existence 
  // to ensure 100% reliability for the demo.

  const projects: Project[] = [];

  const jobPangPath = path.join(process.cwd(), 'src/content/projects/jobpang.md');

  if (fs.existsSync(jobPangPath)) {
    projects.push({
      id: "jobpang",
      title: "JobPang AI Orchestrator",
      description: "An autonomous, deterministic, and scalable AI infrastructure that orchestrates the entire career development lifecycle—from diagnostics to strategy.",
      tags: ["NestJS", "GPT-4o", "Orchestration"]
    });
  }

  // Adding a placeholder for future projects to show the grid layout
  projects.push({
    id: "genai-poc",
    title: "GenAI Internal Labs",
    description: "Experimental playground for RAG pipelines, Agentic workflows, and Multi-modal reasoning tests.",
    tags: ["Next.js", "LangChain", "R&D"]
  });

  return projects;
}
