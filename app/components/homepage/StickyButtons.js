import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import PublicIcon from '@mui/icons-material/Public';
import BookIcon from '@mui/icons-material/Book';

import classes from './StickyButtons.module.css'

function StickyButtons() {
  return (
    <div className={classes.stickybuttons}>
        <span>
            <HomeIcon className={classes.icon}/>
            Home
        </span>
        <span>
            <AirplaneTicketIcon className={classes.icon}/>
            My Trips
        </span>
        <span>
            <PublicIcon className={classes.icon}/>
            Package
        </span>
        <span>
            <BookIcon className={classes.icon}/>
            Blogs
        </span>
    </div>
  )
}

export default StickyButtons