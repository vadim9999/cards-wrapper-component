import React, { Fragment } from 'react'

import { Divider } from 'antd'

import { DefaultCard1, DefaultCard2, DefaultCard3, DefaultCard4, DefaultCard5
} from '/index'

import {
  RecipeCard1,
  RecipeCard2,
  RecipeCard3,
  RecipeCard4,
  RecipeCard5,
} from '/index'


const ClearCardsExample = () => {
  return (
    <Fragment>
      <br />

      <hr />

      <RecipeCard1 title="Card title">
      <hr />
      <hr />
      <hr />
      <hr />
      </RecipeCard1>
      <br />

      <RecipeCard2 title="Card title">
      <hr />
      <hr />
      <hr />
      </RecipeCard2>
      <br />
      <RecipeCard3 title="Card title" description="This is the description" />
      <br />


      <RecipeCard4 />
      <br />
      <RecipeCard5 />
      <br />
    </Fragment>
  )
}

export default ClearCardsExample
