import React from 'react'
import styled from 'styled-components'

const BottomTab = styled.div`
  position: fixed;
  width: 100%;
  height: 1.6rem;
  bottom: 0;
  background-color: #cccccc;
`

const TabIcon = styled.div`
  float: left;
  width: 33.33%;
  height: 1.6rem;
  background-color: #888888;
  
  img {
    height: 1.6rem;
  }
`

const icon_courseList = require('../assets/icon_courselist.png')
const icon_indexPage = require('../assets/icon_indexpage.png')
const icon_userInfo = require('../assets/icon_userinfo.png')

export default function() {
  return (
    <BottomTab>
      <TabIcon>
        <img src={icon_courseList} />
      </TabIcon>
      <TabIcon>
        <img src={icon_indexPage} />
      </TabIcon>
      <TabIcon>
        <img src={icon_userInfo} />
      </TabIcon>
    </BottomTab>
  );
}
