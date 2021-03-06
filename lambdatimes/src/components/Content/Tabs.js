import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
// import Tab from '../Content/Tab';



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {/* {props.tabs.map(tab => <Card key={tab.headline} tab={tab} />)} */}
        {/* {props.postData.map((post, i) => {
        return ( */}
         
          {props.tabs.map(tab => (
          <Tab
            key={tab}
            tab={tab}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
          ))}
          


      </div>
    </div>
  );
};




// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}
// Tabs.propTypes = {
//   tabs: PropTypes.arrayOf(
//     PropTypes.shape({
//   headline: PropTypes.string.isRequired,
//   author:PropTypes.number.isRequired,
//   img: PropTypes.string.isRequired,
//   tab: PropTypes.string.isRequired,
//     })
//   )
//   }

export default Tabs;
