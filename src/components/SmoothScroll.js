import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const SmoothScroll = () => (
    <div>
        <AnchorLink href='#About'>About</AnchorLink>
         | 
        <AnchorLink href='#Projects'>Projects</AnchorLink>
         | 
        <AnchorLink href='#Resume'>Resume</AnchorLink>
         | 
        <AnchorLink href='#Contact'>Contact</AnchorLink>
    </div>
)

export default SmoothScroll