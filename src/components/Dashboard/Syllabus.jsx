import { useState } from "react"
import Category from "./Category";


export default function Syllabus({ allLessons, client }) {

  const [selected, setSelected] = useState(false);
  const categories = [
    {
      title: 'Elements of Art',
      lessons: ['Lines Lesson', 'Shapes Lesson', 'Value Lesson']
    },
    {
      title: 'Principles of Art',
      lessons: ['Shades Lesson', 'Colors Lesson']
    },
    {
      title: 'Advanced Fundamentals',
      lessons: ['Paint Like Picasso Lesson', 'Paint Like Van Gogh Lesson']
    }
  ]

  function toggleSelected() {
    setSelected(!selected);
  }

  return (
    <div className="column is-full">

      <section className="container-accordion">
        <div className="container">
          <div className="is-multiline section-accordion">
            {
              categories.map((category) => {
                return <Category/>
              })
            }
          </div>
        </div>
      </section>


    </div>
  )
}