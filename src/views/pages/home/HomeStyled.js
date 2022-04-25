import styled from "styled-components";

export const HomeS = styled.div`
    width: 50%;
    min-width: 600px;
    margin: 0 auto;
    height: 100%;
    display: grid;
    align-items: center;
`
export const Convertor = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: 3fr 1fr 3fr;
    border-radius: 10px;
    border: 1px solid silver;
    padding: 30px;
    >div{
        height: 100%;
        > * {
            margin-top: 10px;
        }
    }
`

export const ChangeConversion = styled.div`
position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PopularConversion = styled.div`

    > span{
        margin:  7px;
    }
`
export const PopularConvertor = styled.span`
    cursor: pointer;

    transition: 0.3s;
    &:hover{
        color: blue;
    }

`