import React from 'react'
import './Sidebar.css'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import SportsSoccerRoundedIcon from '@material-ui/icons/SportsSoccerRounded';
import VideogameAssetRoundedIcon from '@material-ui/icons/VideogameAssetRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import SettingsInputComponentRoundedIcon from '@material-ui/icons/SettingsInputComponentRounded';
import SwitchVideoRoundedIcon from '@material-ui/icons/SwitchVideoRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import SettingsInputAntennaRoundedIcon from '@material-ui/icons/SettingsInputAntennaRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

function Sidebar() {
    return (
        <div className='sidebar'>
            <section>
                <div>
                    <div className="icon home">
                        <HomeRoundedIcon/>
                    </div>
                    <p>home</p>
                </div>
                <div>
                    <div className="icon trend">
                        <WhatshotRoundedIcon/>
                    </div>
                    <p>trending</p>
                </div>
                <div>
                    <div className="icon sub">
                        <SubscriptionsRoundedIcon/>
                    </div>
                    <p>subscription</p>
                </div>
            </section>
            <section>
                <div>
                    <div className="icon lib">
                        <VideoLibraryRoundedIcon/>
                    </div>
                    <p>library</p>
                </div>
                <div>
                    <div className="icon his">
                        <HistoryRoundedIcon/>
                    </div>
                    <p>history</p>
                </div>
            </section>
            <section className='acc-sign'>
                <p>Sign in to like videos, subscribe and comment</p>
                <button>
                    <div className="icon acc">
                        <AccountCircleRoundedIcon/>
                    </div>
                    <p>
                        Sign in
                    </p>
                    </button>
            </section>
            <section>
                <h4>best of youtube</h4>
                <div>
                    <div className="icon song">
                        <MusicNoteRoundedIcon/>
                    </div>
                    <p>music</p>
                </div>
                <div>
                    <div className="icon sports">
                        <SportsSoccerRoundedIcon/>
                    </div>
                    <p>sports</p>
                </div>
                <div>
                    <div className="icon vg">
                        <VideogameAssetRoundedIcon/>
                    </div>
                    <p>gaming</p>
                </div>
                <div>
                    <div className="icon new">
                        <MenuBookRoundedIcon/>
                    </div>
                    <p>news</p>
                </div>
                <div>
                    <div className="icon live">
                        <SettingsInputComponentRoundedIcon/>
                    </div>
                    <p>live</p>
                </div>
                <div>
                    <div className="icon rotate">
                        <SwitchVideoRoundedIcon/>
                    </div>
                    <p>360&deg; video</p>
                </div>
            </section>
            <section>
                <div>
                    <div className="icon add">
                        <AddCircleOutlineRoundedIcon/>
                    </div>
                    <p>browse channels</p>
                </div>
            </section>
            <section>
                <h4>more from youtube</h4>
                <div>
                    <div className="icon pre">
                        <OndemandVideoRoundedIcon/>
                    </div>
                    <p>youtube premium</p>
                </div>
                <div>
                    <div className="icon broad">
                        <SettingsInputComponentRoundedIcon/>
                    </div>
                    <p>live</p>
                </div>
            </section>
            <section>
                <div>
                    <div className="icon set">
                        <SettingsIcon/>
                    </div>
                    <p>settings</p>
                </div>
                <div>
                    <div className="icon his">
                        <FlagIcon/>
                    </div>
                    <p>report history</p>
                </div>
                <div>
                    <div className="icon help">
                        <HelpIcon/>
                    </div>
                    <p>help</p>
                </div>
                <div>
                    <div className="icon">
                        <FeedbackIcon/>
                    </div>
                    <p>send feedback</p>
                </div>
            </section>
            <footer>
                &copy; 2020 Sam
            </footer>
        </div>
    )
}

export default Sidebar
