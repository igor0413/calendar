import React, {Component} from 'react';
import {render} from 'react-dom'
import {SkiDayCount} from './components/SkiDaysCount'

window.React = React

render (
  <SkiDayCount total={50} powder={20} backcountry={10} goal={100}/>,
  document.getElementById('react-container')
)


