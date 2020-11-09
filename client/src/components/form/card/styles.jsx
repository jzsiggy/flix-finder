import styled from 'styled-components';

const CardWrapper = styled.div`
    height: 80%;    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-weight: bold;
`

const Poster = styled.div`
    margin: 10px;
    width: 175px;
    height: 275px;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border : 4px solid rgb(224, 214, 194);
    border-radius: 3px;
`

export {
    CardWrapper,
    Poster
}