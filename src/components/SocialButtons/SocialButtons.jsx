import React from 'react';
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    InstapaperShareButton,
    InstapaperIcon
} from 'react-share';

export default function SocialButtons(props) {
    const { sharedUrl, title, description, sourceName, className } = props;
    const iconSize = 25;
    const iconRadius = 10;
    return (
        <div className={className}>
            <ul>
                <li>
                    <FacebookShareButton
                        url={sharedUrl}
                        title={title}
                        quote={title}
                    >
                        <FacebookIcon size={iconSize} borderRadius={iconRadius} />
                    </FacebookShareButton>
                </li>
                <li>
                    <WhatsappShareButton
                        url={sharedUrl}
                        title={title}
                        separator="::: "
                    >
                        <WhatsappIcon size={iconSize} borderRadius={iconRadius} />
                    </WhatsappShareButton>
                </li>
                <li>
                    <LinkedinShareButton
                        url={sharedUrl}
                        title={title}
                        summary={description}
                        source={sourceName}
                    >
                        <LinkedinIcon size={iconSize} borderRadius={iconRadius} />
                    </LinkedinShareButton>
                </li>
                <li>
                    <InstapaperShareButton
                        url={sharedUrl}
                        title={title}
                        description={description}
                    >
                        <InstapaperIcon size={iconSize} borderRadius={iconRadius} />
                    </InstapaperShareButton>
                </li>
                <li>
                    <TwitterShareButton
                        url={sharedUrl}
                        title={title}
                    >
                        <TwitterIcon size={iconSize} borderRadius={iconRadius} />
                    </TwitterShareButton>
                </li>
                <li>
                    <EmailShareButton
                        url={sharedUrl}
                        subject={title}
                        body={description}
                    >
                        <EmailIcon size={iconSize} borderRadius={iconRadius} />
                    </EmailShareButton>
                </li>
            </ul>
        </div>
    )
}

SocialButtons.defaultProps = {
    className: "blog-social"
}