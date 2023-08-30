import CategoryCard from "./CategoryCard";


export default function Syllabus({ allLessons, client }) {
  const categories = [
    { 
      title: 'Elements of Art', 
      lessons: [
        { title: 'Lines Lesson', id: 7 }, 
        { title: 'Shapes Lesson', id: 8 }, 
        { title: 'Value Lesson', id: 9 }
      ], 
      id: 1 
    },
    { 
      title: 'Principles of Art', 
      lessons: [
        { title: 'Shades Lesson', id: 10 }, 
        { title: 'Colors Lesson', id: 11 }
      ], 
      id: 2 
    },
    { 
      title: 'Advanced Fundamentals', 
      lessons: [
        { title: 'Paint Like Picasso Lesson', id: 12 }, 
        { title: 'Paint Like Van Gogh Lesson', id: 13 }
      ], 
      id: 3 
    }
  ]

  return (
    <div className="column is-full">

      <header className="is-flex is-align-items-center is-justify-content-center">
        <p className="p-4 is-size-3">Syllabus</p>
      </header>

      <div className="container">
        <div className="is-multiline ">
          {
            categories.map((category) => {
              return <CategoryCard key={category.id} category={category} />
            })
          }
        </div>
      </div>

    </div>
  )
}