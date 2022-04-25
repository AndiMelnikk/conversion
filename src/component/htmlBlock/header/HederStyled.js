import styled from 'styled-components'

export const HeaderS = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100%;
   
    >div:nth-child(1){
        display: grid;
        align-items: center;
        justify-content: space-evenly;
        > h3 {
            font-weight: 200;
            font-size: 1.7em;
        }
    }
    >div:nth-child(2){
        padding: 10px 0;
        display: grid;
        grid-template-columns: 1fr 1fr; 
    }
`
export const ValutaSymbol = styled.div`
    background: ${props => props.background || 'silver'};
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100% - 8px);
    border-radius: 10px;
    border: 4px solid ${props => props.borderColor || 'silver'};
    align-items: center;
    justify-content: space-evenly;
    max-width: 180px;

    p{
        font-size: 1.2em;
        font-weight: 900;
        color: white;
    }

`
export const ImgBlock = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
        img{
        position: absolute;
        height: 70%;
    }
`
