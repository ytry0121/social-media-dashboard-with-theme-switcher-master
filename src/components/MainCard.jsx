import React from "react";
import iconFacebook from '../images/icon-facebook.svg';
import iconInstagram from '../images/icon-instagram.svg';
import iconTwitter from '../images/icon-twitter.svg';
import iconYoutube from '../images/icon-youtube.svg';
import iconUp from '../images/icon-up.svg';
import iconDown from '../images/icon-down.svg';

function MainCard(props) {
    const mediaName = props.mediaName;
    let icon = '';
    if (mediaName === "facebook") { icon = iconFacebook; }
    else if (mediaName === "instagram") { icon = iconInstagram; }
    else if (mediaName === "twitter") { icon = iconTwitter; }
    else if (mediaName === "youtube") { icon = iconYoutube; }

    let iconUpDown = props.upDownNum < 0 ? iconDown : iconUp;
    let numUpDown = props.upDownNum.toString().replace('-', '');

    return (
   <div className={"frame " + mediaName}>
   <div className={"card big "}>
        <div className='id-section'><img src={icon} alt={mediaName + '-img'} /><span className='blue-text small-text bold'>{props.id}</span></div>
        <h1>{props.followers}</h1>
        <span className="unit blue-text">{mediaName === "youtube" ? "Subscribers" : "Followers"}</span>
        <div className="upDown"><img src={iconUpDown} alt='icon-upDown' />
            <span className="small-text bold" style={ iconUpDown===iconDown ? { color: "hsl(356, 69%, 56%)" } : { color: "hsl(163, 72%, 41%)" }}>{numUpDown} Today</span>
        </div>
    </div>
    </div>
    );
}

export default MainCard;