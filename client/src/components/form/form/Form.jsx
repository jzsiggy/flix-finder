import axios from 'axios';
import React , { useEffect , useState } from 'react'
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Swipeable } from 'react-swipeable'

import Card from '../card/Card';
import { FormWrapper } from './styles';


const Form = () =>  {
    const [score, setScore] = useState(4)
    const [ratings, setRatings] = useState([])
    const [data, setData] = useState({})
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [id, setID] = useState('')
    const [index, setIndex] = useState(0)
    let init = false

    useEffect(() => {
        console.log('hey')
        axios.get('http://localhost:5000/movies/random-movie')
        .then(response => {
            const results = response.data
            setData(results)
            setImg(`https://image.tmdb.org/t/p/w500${results[index]['poster_path']}`)
            setTitle(results[index]['title'])
            setID(results[index]['id'])
            setIndex(index+1)
            init = true
        })
    }, [init])

    const swipe = (event) => {
        setRatings([
            ...ratings,
            {
                id,
                score
            }
        ])
        setIndex(index+1)
        setTitle(data[index]['title'])
        setImg(`https://image.tmdb.org/t/p/w500${data[index]['poster_path']}`)
        setID(data[index]['id'])
        setScore(4)
        console.log('swipe')
    }

    return(
            <FormWrapper>
                <Swipeable 
                    onSwipedLeft={(event) => swipe(event)} {... {trackMouse: true}}
                    style={{
                        'width': '100%', 
                        'height': '100v%', 
                        'position': 'absolute',
                        'display': 'fixed'
                    }}
                    >
                        <Card
                            img={img}
                            title={title}
                            id={id}
                        />
                        <div
                            style={{
                                'display': 'flex',
                                'justifyContent': 'center',
                            }}
                        >
                            <mobiscroll.Rating 
                                step={.5} 
                                min={0} 
                                max={8} 
                                value={score} 
                                color='warning'
                                onChange={(newScore) => setScore(newScore)}
                            />
                        </div>
                    </Swipeable>
            </FormWrapper>
    )
}

export default Form