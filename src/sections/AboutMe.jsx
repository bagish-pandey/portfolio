import VariableWeightText from "../components/VariableWeightText";
import AboutImage from '../assets/about_me.svg'

const AboutMe = () => {
  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col md:flex-row justify-between items-start gap-x-16">
        {/* TODO: optimise and manage image width dynamically */}
        <img src={AboutImage} className="w-auto md:w-[320px] lg:w-[320px]" />
        <div className="mt-8 md:mt-0">
          <VariableWeightText 
            regularText="About"
            extraboldText="Me"
          />
          <p className="text-zinc-500 font-display py-4">
          Full-Stack Developer with 4+ years of experience crafting engaging web applications for entertainment, e-commerce, and testing domains. Proficient in React.js and Node.js, I excel at building robust, scalable, and user-centric solutions.          </p>
          <p className="text-zinc-500 font-display py-4">
          A collaborative team player with a passion for clean code and innovative problem-solving. Proven ability to lead component ownership, driving development efficiency and delivering high-quality products. Experienced in Agile methodologies and Git.          </p>
          <p className="text-zinc-500 font-display py-4">
          Master of Computer Applications from Babu Banarsi Das University, Lucknow, equipped with a strong foundation in data structures, algorithms, and software engineering. Committed to continuous learning and staying updated with the latest industry trends.          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
