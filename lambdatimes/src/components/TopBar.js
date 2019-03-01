import React from 'react';
import styled from 'styled-components'



// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </div>
  )
}


const Topbardiv1 = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`

const Topbardiv2 = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
}
@media (min-width: 1280px) {
.top-bar .container {
  width: 1280px;
}
}
`
const Topbardiv3 = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`
const Topbardiv4 = styled.div`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`
const Topbardiv5 = styled.div`
.top-bar .container .container-center {
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const Topbardiv6 = styled.div`
.top-bar .container .container-center span {
cursor: pointer;
margin-right: 5%;
`
const Topbardiv7 = styled.div`
.top-bar .container .container-center span:last-child {
margin-right: 0;
`
const Topbardiv8 = styled.div`
.top-bar .container .container-center span:hover {
text-decoration: underline;
`
const Topbardiv9 = styled.div`
.top-bar .container .container-right {
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`
const Topbardiv10 = styled.div`
.top-bar .container .container-right span {
cursor: pointer;
`


export default TopBar;