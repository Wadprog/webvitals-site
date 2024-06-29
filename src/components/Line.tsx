type LineProps = {
  css?: string
  wrapperCss?: string
  centerItems?: boolean
}

const Line = ({ css = '', wrapperCss = '', centerItems = true }: LineProps) => (
  <div className={`grid justify-items-${centerItems?'center':'left'} ${wrapperCss}`}>
    <div
      className={`bg-gradient-to-r from-[#F76680] to-[#57007B] w-[125px] h-[5px] ${css}}`}
    />
  </div>
)

export default Line
