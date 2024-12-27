const VariableWeightText = ({regularText, extraboldText, invert=false}) => {
  return (
    <h2 className={`leading-[3.5rem] text-5xl font-display font-regula text-black ${invert && 'invert'}`}>
      {regularText} <span className="font-extrabold">{extraboldText}</span>
    </h2>
  )
}

export default VariableWeightText