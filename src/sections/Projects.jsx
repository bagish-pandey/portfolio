import ProjectCard from "../components/ProjectCard";
import VariableWeightText from "../components/VariableWeightText";


import Project1 from '../assets/project-1.png'

const projectsData = [
  {
    id: "01",
    title: "Password Generator Application",
    description: "Boost your online security with this powerful password generator. Create robust passwords tailored to your specific needs in seconds. Enhance your account security and minimize the risk of data breaches with strong, unique passwords generated effortlessly.",
    link: "https://bagish-password-app.netlify.app/",
    image: Project1,  
  },
]

const Projects = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Projects"
          invert
        />
        <div className="mt-8 flex flex-col gap-y-8">
          { projectsData.map(projectData => {
            return <ProjectCard 
              key={projectData.id} 
              projectData={projectData} 
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects;
