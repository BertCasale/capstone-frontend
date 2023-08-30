import CategoryCard from "./CategoryCard";


export default function Syllabus({ allLessons, client }) {
  const categories = [
    { title: 'Elements of Art', lessons: ['Lines Lesson', 'Shapes Lesson', 'Value Lesson'] },
    { title: 'Principles of Art', lessons: ['Shades Lesson', 'Colors Lesson'] },
    { title: 'Advanced Fundamentals', lessons: ['Paint Like Picasso Lesson', 'Paint Like Van Gogh Lesson'] }
  ]

  return (
    <div className="column is-full">

      <section className="container-accordion">

        <div className="container">
          <div className="is-multiline section-accordion">
            {
              categories.map((category) => {
                return <CategoryCard key={category.id} category={category} />
              })
            }
          </div>
        </div>

      </section>

    </div>
  )
}