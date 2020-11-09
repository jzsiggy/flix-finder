const { MovieWrapper , Poster, InfoBox } = require("./styles")

const Movie = (props) => {
    return (
        <MovieWrapper>
            <Poster img={props.img} />
            <InfoBox>
                <h3>{props.title}</h3>
                <span>Action - Comedy - Drama</span>
            </InfoBox>
        </MovieWrapper>
    )
}

export default Movie