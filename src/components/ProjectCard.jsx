import ExportIcon from '../assets/export.svg'

const ProjectCard = ({projectData}) => {
  return(
    <div className={`flex flex-col lg:flex-row items-start gap-12 text-white ${ projectData.id % 2 === 0 && 'lg:flex-row-reverse' }`}>
      <img src={projectData.image} className="rounded-2xl" />
      <div className='flex flex-col gap-7 mt-4'>
        <p className='font-display font-extrabold text-5xl'>{projectData.id}</p>
        <p className='font-display font-bold text-4xl'>{projectData.title}</p>
        <p className="text-zinc-500 font-display">{projectData.description}</p>
        <a href={projectData.link} target="_blank" rel="noopener noreferrer">
          <img src={ExportIcon} className='w-5 h-5' />
        </a>
      </div>
    </div>
  )
}
export default ProjectCard
