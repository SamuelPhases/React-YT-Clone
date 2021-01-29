import React from 'react'
import './Navbar.css'

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

function Navbar() {
    return (
        <nav>
            <div className="toggle-logo">
                <div className="menu-toggle">
                    <MenuRoundedIcon/>
                </div>
                <div className="logo">
                    <div className="play">
                        <PlayArrowRoundedIcon/>
                    </div>
                    <h3>Youtube Clone</h3>
                </div>
            </div>
            <div className="search">
                <form action="">
                    <input type="search" name="" id="" placeholder='Search' />
                    <button type="submit"><SearchRoundedIcon/></button>
                </form>
            </div>
            <div className="account">
                <VideoCallRoundedIcon/>
                <AppsRoundedIcon />
                <MoreVertRoundedIcon/>
                <button>
                    <AccountCircleRoundedIcon/>
                    <p>
                        sign in
                    </p>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
