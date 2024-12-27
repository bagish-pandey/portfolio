import BoyGraphic from '../assets/boy.svg'
import SocialButton from '../components/SocialButton'
import Linkedin from '../assets/linkedin.svg'
import GitLogo from '../assets/git.svg'

const socialLinks = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/bagishpandey/"
  },
  {
    icon: GitLogo,
    link: "https://github.com/bagish-pandey"
  },
]

const Hero = () => {
  return (
    <div className="px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col lg:flex-row-reverse md:justify-between items-center gap-5 lg:gap-10">
        <img src={BoyGraphic} />
        <div className="space-y-5">
          <h1 className="font-sora text-5xl leading-[56px] text-black">
            Hello I&apos;am <span className="font-extrabold">Bagish Pandey.</span>
          </h1>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            <span className="font-extrabold">Frontend</span> Developer
          </h2>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            Based In <span className="font-extrabold">India.</span>
          </h2>
          <p className="text-zinc-500 font-display py-4">
             Focused on High-Performance Web Applications | 4+ Yr Performance-Driven React Developer with Full-Stack Experience
          </p>

          <div className='flex gap-8 items-center'>
            { socialLinks.map((socialItem) => {
              return (
                <SocialButton 
                  key={socialItem.link} 
                  icon={socialItem.icon} 
                  link={socialItem.link} 
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
