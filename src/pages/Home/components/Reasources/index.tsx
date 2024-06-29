import Section from '../../../../components/Section'
import blogs from '../../../../mockdata/blogs'

const Ressources = () => {
  return (
    <Section title="Our" subTitle="Blogs" centerItems>
      <div className="md:grid grid-cols-3 gap-4">
        {blogs.map((blog, index) => {
          if (index > 2) return
          return (
            <div key={blog.id} className="flex flex-col items-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-48 h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-bold mt-4">{blog.title}</h3>
              <p className="text-center mt-2">{blog.description}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Ressources
