import React, { Fragment } from 'react'

import { Divider } from 'antd'

// import { DefaultCard1,
//   DefaultCard2, DefaultCard3,
//   DefaultCard4, DefaultCard5
// } from '/index'

import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
} from '/index'


const ClearCardsExample = () => {
  return (
    <Fragment>
      <br />

      <Divider />

      <RecipeCard1 title="Card title">
        <hr />
        <hr />
        <hr />
        <hr />
      </RecipeCard1>
      <Divider />

      <RecipeCard2 title="Card title">
        <hr />
        <hr />
        <hr />
      </RecipeCard2>
      <Divider />

      <RecipeCard3 title="Card title" description="This is the description" />
      <Divider />


      <RecipeCard4 />
      <Divider />

      <RecipeCard5 />
      <Divider />

    </Fragment>
  )
}

export default ClearCardsExample
