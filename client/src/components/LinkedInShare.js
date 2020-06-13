import React from 'react';

import '../styles/TwitterShare.css';

const TwitterShare = ({ quote, author }) => {
  return(
    <React.Fragment>
      <a href={`http://www.linkedin.com/shareArticle?mini=true&url= ${quote} - ${author} - philosofind.co.uk`} target="_blank" rel="noopener noreferrer" title="Post this quote on twitter!" id='linkedin-quote'>
        <i className="fab fa-twitter fa-3x"/>
      </a>
    </React.Fragment>
  )
}

export default TwitterShare;