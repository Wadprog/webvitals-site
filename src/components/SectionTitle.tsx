const SectionTitle = ({
  title,
  subTitle,
  titleCss,
  subTitleCss,
  css,
  centerItems = true,
}: {
  title: string
  subTitle?: string
  titleCss?: string
  subTitleCss?: string
  css?: string
  centerItems?: boolean
}) => (
  <>
    <h3
      className={`text-[35px] font-thin mt-4 text-[#1A202C] text-${centerItems ? 'center' : 'left'} ${titleCss} ${css}`}
    >
      {title} {subTitle && <br />}
      {subTitle && (
        <b className={`text-center text-[#1A202C] ${subTitleCss}`}>
          {subTitle || title}
        </b>
      )}
    </h3>
  </>
)

export default SectionTitle
