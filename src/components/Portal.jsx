
import { createPortal } from 'react-dom'

// react createPortal function renders a child component outside the parent/ renders to the main html body.
export default function Portal({ children}) {
  return (
    createPortal(children, document.body)
  )
}
