const Dots = (props: { selected: boolean; onPress: () => void }) => {
  return (
    <div
      onClick={props.onPress}
      className={`w-[10px] h-[10px] rounded-full border  ${props.selected ? 'bg-gradient-to-r to-[#F76680] from-[#57007B] border-[#DE4396]' : 'bg-white border-gray-300'}`}
    ></div>
  )
}

export default Dots
