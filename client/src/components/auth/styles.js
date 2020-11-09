import styled from 'styled-components';

const FormWrapper = styled.div`
    width: 50%;
    min-width: 320px;
    max-width: 600px;
    @media (max-width: 370px) {
        width: 90%; 
        min-width: 90%;
        max-width: 90%;
    }

    height: 50%;
    @media (max-height: 370px) {
        height: 90%;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    background-color: #1c1c1c;
`

const FormInput = styled.input`
    font-size: 1.5rem;
`

const FormLabel = styled.label`

`

const FormInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    height: 20%;
    width: 80%;
    justify-content: space-evenly;
`

const Submit = styled.div`
    transition: 0.2s ease all;
    display: flex;
    justify-content: center;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    &:hover {
        background: white;
        color: black;
        transform: scale(1.03);
        cursor: pointer;
    }
`

export {
    FormWrapper,
    FormInput,
    FormLabel,
    FormInputGroup,
    Submit
}