import React from 'react'

interface specs {
    name: string,
    img: string,
    live: string, 
    code: string,
    tags: [string],
    details: string
}
const Showcase = ({name, img, live, code, tags, details}: specs) => {
  return (
    <div>Showcase</div>
  )
}

export default Showcase;