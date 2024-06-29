import React from 'react'

type ArticleProps = {
  title: string
  image: string
  highlighted: string
  children: React.ReactNode
}
const Article = (props: ArticleProps) => {
  return (
    <article className="flex-col-reverse flex lg:flex-row justify-space-around items-center sm:gap-8 gap-4 py-10 px-2">
      <aside>
        <h3 className="text-[35px] font-semibold my-4 text-[#1A202C]">
          {props.title}
        </h3>
        {props.children}
        <p>{props.highlighted}</p>
        <p>autor details</p>
      </aside>
      <div className="">
        <img src={props.image} alt="" />
      </div>
    </article>
  )
}

export default Article
