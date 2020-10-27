import React from 'react';
import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconYoutube from '../images/icon-youtube.svg';
import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';

function OverviewCards(props) {
    const mediaName = props.mediaName;

    let icon = '';
    let viewsName = '';
    if (mediaName === "facebook") {
        icon = iconFacebook;
        viewsName = "Page views";
    }
    else if (mediaName === "instagram") {
        icon = iconInstagram;
        viewsName = "Profile views"
    }
    else if (mediaName === "twitter") {
        icon = iconTwitter;
        viewsName = "Retweets"
    }
    else if (mediaName === "youtube") {
        icon = iconYoutube;
        viewsName = "Total views"
    }

    let iconUpDownV = props.viewsRetweetsRate < 0 ? iconDown : iconUp;
    let iconUpDownL = props.likesRate < 0 ? iconDown : iconUp;
    let numUpDownV = props.viewsRetweetsRate.toString().replace('-', '');
    let numUpDownL = props.likesRate.toString().replace('-', '');


    return (
        <div className={"overviewCards " + mediaName + "-grid"}  >
            <div className="card small views">
                <span className='blue-text overviews-name bold'>{viewsName}</span>
                <div className="media-icon"><img src={icon} alt='icon-overview-view' /></div>
                <span className="o-num bold">{props.viewsRetweets}</span>
                <div className="upDown"> <img src={iconUpDownV} alt='icon-upDown'/><span className={(iconUpDownV === iconDown ? 'red' : 'green') + " small-text bold"}>{numUpDownV}%</span></div>
            </div>
            <div className="card small likes">
                <span className='blue-text overviews-name bold'>Likes</span>
                <div className="media-icon"><img src={icon} alt='icon-overview-likes' /></div>
                <span className="o-num bold"> {props.likes}</span>
                <div className="upDown"> <img src={iconUpDownL} alt='icon-upDown'/><span className={(iconUpDownL === iconDown ? 'red' : 'green') + " small-text bold"}>{numUpDownL}%</span></div>
            </div>
        </div>);
}

export default OverviewCards;