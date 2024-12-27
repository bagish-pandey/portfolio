const SocialButton = ({icon, link}) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link} className="p-5 aspect-square border border-2 rounded-md border-black hover:invert bg-white">
      <img className="w-5 h-5" src={icon} />
    </a>
  )
}

export default SocialButton
