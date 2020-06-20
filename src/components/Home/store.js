import { createRef } from "react"

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  images: ["/compressed/img-blog7.jpg", "/compressed/img-blog8.jpg", "/compressed/img-blog9.jpg"],
  top: createRef()
}

export default state
