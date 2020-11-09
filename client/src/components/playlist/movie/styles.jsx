import styled from 'styled-components';

const MovieWrapper = styled.div`
    height: 15%;
    margin: 5px 0;
    min-height: 100px;

    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 3px;
`

const Poster = styled.div`
    height: 90%;
    width: 60px;
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: 3px;
`

const InfoBox = styled.div`
    dislpay: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: calc(95% - 60px);
    height: 90%;
`

export {
    MovieWrapper,
    Poster,
    InfoBox
}