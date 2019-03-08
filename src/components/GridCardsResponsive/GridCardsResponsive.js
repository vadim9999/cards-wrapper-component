import React, { Component, PureComponent } from 'react'

import { List, Card } from 'antd'

// @TODO REPLACE CARD WITH OUR CUSTOM WRAPPER
// import {
//   Card1,
//   Card2,
//   Card3,
//   Card4,
//   Card5
// } from '~/Cards'

import data from '~/Grid/data'

// const styles = {
//   grid: {
//     gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3
//   }
// }

import styles from '~/Grid/styles.responsive';

import RenderItem from '~/Grid/RenderItem';

// const RenderItem = (item) => {
//   return (
//     <List.Item>
//       <Card title={item.title}>
//         Card content
//       </Card>
//     </List.Item>
//   )
// }

const GridCardsResponsive = () => {
  return (
    <Fragment>
      <List
        grid={styles.grid}
        dataSource={data}
        renderItem={RenderItem(item)}
      />,
    </Fragment>
  )
}

export default GridCardsResponsive
