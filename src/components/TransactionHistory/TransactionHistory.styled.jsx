import styled from '@emotion/styled';

export const Table = styled.table`
    margin: 30px auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    thead {
        background-color: darkturquoise;

        th {
            color: white;
            width: 200px;
            height: 50px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }
`;

export const Tbody = styled.tbody`
    color: #929292;
    text-align: center;

    tr {
        height: 50px;

        &:nth-of-type(2n) {
            background-color: rgb(211, 211, 211);
        }
    }
`;
