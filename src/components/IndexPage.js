import React from 'react'
import styled from 'styled-components'

const logo = require("../assets/logo.png")
const search_button = require("../assets/search_button.png")

export default function ({courseList}) {
  console.log(courseList);
  return (
    <IndexPage>
      <TopBar>
        <img className="logo" src={logo}/>

        <SearchButton>
          <img className="logo" src={search_button}/>
        </SearchButton>
      </TopBar>

      <Carousel>
        轮播图
      </Carousel>

      <Live>
        直播
      </Live>

      <RCourse>
        推荐课程
      </RCourse>

      <TCourse>
        技术专业课
      </TCourse>

      <ACourse>
        AI公开课
      </ACourse>

      <FCourse>
        未来课栈
      </FCourse>

      <CCourse>
        创业课堂
      </CCourse>

      <Teacher>
        特聘教授
      </Teacher>

      <BottomHolder></BottomHolder>
    </IndexPage>
  );
}


const IndexPage = styled.div`
   font-size: .5rem;
`

const TopBar = styled.div`
  width: 100%;
  height: .9rem;
  background-color: #333333;
  top: 0;
  text-align: left;

  .logo {
    position: relative;
    height: .7rem;
    left: .1rem;
    top: .1rem;
    float: left;
  }
`

const SearchButton = styled.div`
  height: .7rem;
  position: absolute;
  right: .7rem;
  float: left;


  img {
    height: .6rem;
    position: relative;
    top: .1rem;
  }
`

const Carousel = styled.div`
  margin-top: .2rem
  height: 5.2rem;
  width: 100%;
  background-color: #CCCCCC;
`

const Live = styled.div`
  margin-top: .2rem;
  height: 1.4rem;
  width: 100%;
  background-color: #ABCDEF;
`

const RCourse = styled.div`
  margin-top: .15rem;
  width: 100%;
  height: 2rem;
  background-color: #CCCCFF;
`

const TCourse = styled.div`
  margin-top: .15rem;
  width: 100%;
  height: 2rem;
  background-color: #CCCCFF;
  `

const ACourse = styled.div`
  margin-top: .15rem;
  width: 100%;
  height: 2rem;
  background-color: #CCCCFF;
  `

const FCourse = styled.div`
  margin-top: .15rem;
  width: 100%;
  height: 2rem;
  background-color: #CCCCFF;
  `

const CCourse = styled.div`
  margin-top: .15rem;
  width: 100%;
  height: 2rem;
  background-color: #CCCCFF;
  `

const Teacher = styled.div`
  margin-top: .15rem;
  width: 100%;
  height: 2rem;
  background-color: #CCCCFF;
  `
const BottomHolder = styled.div`
  width: 100%;
  height: 1.6rem;
`


