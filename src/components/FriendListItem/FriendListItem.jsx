import PropTypes from 'prop-types';
import * as style from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <style.FriendItem>
            <style.Status isOnline={isOnline}></style.Status>
            <style.FriendAvatar src={avatar} alt={name} width="48" />
            <style.FriendName>{name}</style.FriendName>
        </style.FriendItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
