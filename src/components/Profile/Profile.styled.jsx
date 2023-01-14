import styled from '@emotion/styled';

export const ProfileBox = styled.div`
    width: 400px;
    margin: 30px auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
`;

export const Description = styled.div`
    padding: 40px;
`;

export const UserAvatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50px;
    margin: auto;
`;

export const UserName = styled.p`
    margin-top: 30px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`;

export const UserTag = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
`;

export const UserLocation = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-around;
    background-color: rgb(241, 241, 241);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 25px;
    width: calc(100% / 3);

    &:not(:last-child) {
        border-right: 1px solid rgb(181, 181, 181);
    }
`;

export const ItemLabel = styled.span`
    font-size: 20px;
    text-align: center;
    color: rgb(161, 161, 161);
`;

export const ItemQuantity = styled.span`
    margin-top: 10px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;
