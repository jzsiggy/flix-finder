import { Poster , CardWrapper } from './styles'

const Card = (props) => {
    return(
        <CardWrapper>
            <Poster img={props.img}/>
            <span>{props.title}</span>
        </CardWrapper>
    )
}

export default Card