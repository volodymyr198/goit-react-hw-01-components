import styled from '@emotion/styled';

export const FriendItem = styled.li`
    display: flex;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const Status = styled.span`
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-left: 10px;
    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 5px;
    margin-left: 10px;
`;

export const FriendName = styled.p`
    margin-left: 10px;
    font-size: 30px;
`;
