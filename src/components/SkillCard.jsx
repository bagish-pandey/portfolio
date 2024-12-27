const SkillCard = ({skillLogo, skillName}) => {
  return(
    <div className="bg-white hover:invert flex items-center justify-center aspect-square shadow-md flex flex-col items-center gap-y-4 p-6 border border-black border-2 rounded">
      <img src={skillLogo} className="w-[56px] h-[56px]" />
      <p className="text-black font-display font-bold text-xl leading-[24px]">{skillName}</p>
    </div>
  )
}
export default SkillCard
