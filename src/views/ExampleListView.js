import React, { Component, Fragment } from 'react';
// import {
//   Header
// } from '@groceristar/antd-showcase-components'

import { ListWrapper }   from '@groceristar/cards-wrapper';



import "antd/dist/antd.css";

// import {
//   getFirstFiveRecipes
// } from "../selector";
//
// const list = getFirstFiveRecipes();
// console.log(list);

const ExampleListView = (list) => {

  // const list = getFirstFiveRecipes();
  // console.log(list);

  return (
    <Fragment>

        <ListWrapper list={list} />


      </Fragment>
  )
}
// <Cards />
//
// {/* <ClearCardsExample /> */}

export default ExampleListView
