import React from 'react'
import {CounterContainer} from 'containers'
import {Header} from 'components'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import styled from 'styled-components'

import {BottomTab} from '../components'
import {IndexPageContainer} from '../containers'

// require rem
require('../utils/Rem.js');

const Container = styled.div`
  text-align: center;
  height: 100%;
`


function Routes() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/" component={IndexPageContainer}/>
          <Redirect to="/"/>
        </Switch>
        <BottomTab/>
      </Container>
    </Router>
  )
}


const courseList = {
  rCourse: [
    {
      courseName: '科技晚自习',
      courseCover: 'http://aicollege.ufile.ucloud.com.cn/admin/1526615588061.jpeg',
      courseId: 17
    },
    {
      courseName: '科技晚自习',
      courseCover: 'http://aicollege.ufile.ucloud.com.cn/admin/1526615588061.jpeg',
      courseId: 17
    },
    {
      courseName: '科技晚自习',
      courseCover: 'http://aicollege.ufile.ucloud.com.cn/admin/1526615588061.jpeg',
      courseId: 17
    },
    {
      courseName: '科技晚自习',
      courseCover: 'http://aicollege.ufile.ucloud.com.cn/admin/1526615588061.jpeg',
      courseId: 17
    },
    {
      courseName: '科技晚自习',
      courseCover: 'http://aicollege.ufile.ucloud.com.cn/admin/1526615588061.jpeg',
      courseId: 17
    },
    {
      courseName: '科技晚自习',
      courseCover: 'http://aicollege.ufile.ucloud.com.cn/admin/1526615588061.jpeg',
      courseId: 17
    },
  ]
}

export default Routes
