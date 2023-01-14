import PropTypes from 'prop-types';
import * as style from './Profile.styled';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    return (
        <style.ProfileBox>
            <style.Description>
                <style.UserAvatar src={avatar} alt="User avatar" />
                <style.UserName>{username}</style.UserName>
                <style.UserTag>@{tag}</style.UserTag>
                <style.UserLocation>{location}</style.UserLocation>
            </style.Description>

            <style.StatsList>
                <style.StatsItem>
                    <style.ItemLabel>Followers</style.ItemLabel>
                    <style.ItemQuantity>{followers}</style.ItemQuantity>
                </style.StatsItem>
                <style.StatsItem>
                    <style.ItemLabel>Views</style.ItemLabel>
                    <style.ItemQuantity>{views}</style.ItemQuantity>
                </style.StatsItem>
                <style.StatsItem>
                    <style.ItemLabel>Likes</style.ItemLabel>
                    <style.ItemQuantity>{likes}</style.ItemQuantity>
                </style.StatsItem>
            </style.StatsList>
        </style.ProfileBox>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
