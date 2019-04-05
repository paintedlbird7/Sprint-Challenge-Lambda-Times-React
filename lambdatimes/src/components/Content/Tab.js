import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  // let selectedTab = "tab";
  // if (props.tab === props.selectedActiveTab) {
  //   selectedTab = "tab active-tab";
  // } else {
  //   selectedTab = "tab";
  // }



let selectedTab = "";
  if (props.tab === props.selectedTab) {
    selectedTab = "tab active-tab";
  } else {
    selectedTab = "tab";
  }
  
  return (
    <div className={selectedTab} onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
  }
  
  // return (
  //   <div 
  //   className={selectedTab} 
  //   onClick={() => props.selectTabHandler(props.tab)}>
      
  //     {props.tab.toUpperCase()}
  //   </div>
  // );
  // }

/* // Make sure you include PropTypes on your props. */
Tab.propTypes = {
  tab: PropTypes.arrayOf(
    PropTypes.shape({
  headline: PropTypes.string.isRequired,
  author:PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
    })
  )
  }

export default Tab;