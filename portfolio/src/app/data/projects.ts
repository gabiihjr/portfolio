import { Project, ProjectType, Stack } from '../types/project-type';

export const projects: Project[] = [
  {
    title: 'Lavender Movies',
    description:
      'Lavender Movies is a Full Stack Web Application that has the purpose to show a list of LGBTQA+ movies, being possible to create an user and add movies as your favorites, review them and see their details, similar to platforms such as IMDb, Letterboxd and Filmow.',
    githubUrl: 'https://github.com/gabiihjr/LavenderMovies',
    imageUrl:
      'https://user-images.githubusercontent.com/94693150/212974482-b3220124-ec6c-4a6c-9b69-4706b66876d2.png',
    technologies: ['Java 17', 'Spring Boot', 'Angular 15', 'PostgreSQL'],
    stacks: Stack.FULL,
    authors: ['Gabriela Hermenegildo'],
    projectType: ProjectType.STUDY,
    websiteUrl: null,
  },
  {
    title: 'HermeneMatch',
    description: 'Study using Tinder as reference.',
    githubUrl: 'https://github.com/gabiihjr/Hermenematch',
    imageUrl: 'https://user-images.githubusercontent.com/94693150/153658751-3eac4518-46ed-454b-af4d-56f4d5f0d59a.png',
    technologies: ['React'],
    stacks: Stack.FRONT,
    authors: ['Gabriela Hermenegildo'],
    websiteUrl: 'https://hermenematch.surge.sh/',
    projectType: ProjectType.STUDY
  },
  {
    title: 'HermeneX',
    description: 'Study using SpaceX as reference.',
    githubUrl: 'https://github.com/gabiihjr/HermeneX',
    imageUrl: 'https://user-images.githubusercontent.com/94693150/154778972-bd8e5791-6a7d-401c-b09f-dde47c16d468.png',
    technologies: ['React'],
    stacks: Stack.FRONT,
    authors: ['Gabriela Hermenegildo'],
    websiteUrl: 'https://hermenex.surge.sh/',
    projectType: ProjectType.STUDY
  },
  {
    title: 'Hermeneddit',
    description: 'Study using Reddit as reference.',
    githubUrl: 'https://github.com/gabiihjr/Hermeneddit',
    imageUrl: 'https://user-images.githubusercontent.com/94693150/155770014-7a397799-b229-44a5-b1a6-41c07aaf742c.png',
    technologies: ['React'],
    stacks: Stack.FRONT,
    authors: ['Gabriela Hermenegildo'],
    websiteUrl: 'https://hermeneddit.surge.sh',
    projectType: ProjectType.STUDY
  },
];
