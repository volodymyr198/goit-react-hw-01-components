import styled from '@emotion/styled';

export const StatSection = styled.section`
    width: 500px;
    margin: 30px auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
`;

export const StatTitle = styled.h2`
    padding: 40px;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
`;

export const StatList = styled.ul`
    display: flex;
`;

export const StatItem = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Label = styled.span`
    color: white;
    font-size: 20px;
    text-align: center;
`;

export const Percentage = styled.span`
    color: white;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
`;
