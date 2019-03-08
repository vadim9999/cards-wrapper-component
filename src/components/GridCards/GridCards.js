import React, { Component, PureComponent } from 'react'
// import { HeaderShowcase, Menu }   from '@groceristar/antd-showcase-components';

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
//   grid: { gutter: 16, column: 4 }
// }

import styles from '~/Grid/styles.list';

// const RenderItem = (item) => {
//   return (
//     <List.Item>
//       <Card title={item.title}>
//         Card content
//       </Card>
//     </List.Item>
//   )
// }

import RenderItem from '~/Grid/RenderItem';

const GridList = () => {
  return (
    <Fragment>
      <List
        grid={styles.grid}
        dataSource={data}
        renderItem={RenderItem(item)}
      />
    </Fragment>
  )
}

export default GridList
