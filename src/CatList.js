// write your CatList component here

import React from 'react'

const CatList = (props) => {
  console.log(props)
  return props.catPics.map((catPic) => (
    <div>
      <img src={catPic.url} alt='cat pic' id={catPic.id} />
    </div>
  ))
}

export default CatList
