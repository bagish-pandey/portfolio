import SkillCard from "../components/SkillCard";
import VariableWeightText from "../components/VariableWeightText";
import GitLogo from '../assets/git.svg'
import JSLogo from '../assets/js.svg'
import StorybookLogo from '../assets/storybook.svg'
import React from '../assets/react.svg'
import Redux from '../assets/redux.svg'
import Node from '../assets/node.svg'
import Tailwind from '../assets/tailwind.svg'
import Mysql from '../assets/mysql.svg'
import Jenkins from '../assets/jenkins.svg'
import Php from '../assets/php.svg'

const skillsData = [
  { logo: React, name: 'React'},
  { logo: Node, name: 'Node'},
  { logo: JSLogo, name: 'JavaScript', },
  { logo: GitLogo, name: 'Git', },
  { logo: StorybookLogo, name: 'Storybook', },
  { logo: Redux, name: 'Redux'},
  { logo: Tailwind, name: 'tailwindcss'},
  { logo: Mysql, name: 'Mysql'},
  { logo: Jenkins, name: 'Jenkins'},
  { logo: Php, name: 'Php'}

]

const Skills = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Skills"
          invert
        />
        <div className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-12 gap-y-10">
          { skillsData.map(skill => {
            return <SkillCard 
              key={skill.skillName} 
              skillLogo={skill.logo} 
              skillName={skill.name}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills;
