import axios from 'axios';
import React , { useEffect , useState } from 'react'
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Swipeable } from 'react-swipeable'

import Card from '../card/Card';
import { FormWrapper } from './styles';


const Form = () =>  {
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
            init = true
        })
    }, [init])

    return(
            <FormWrapper>
                <Swipeable 
                    onSwipedLeft={(event) => {
                        setIndex(index+1)
                        setTitle(data[index]['title'])
                        setImg(`https://image.tmdb.org/t/p/w500${data[index]['poster_path']}`)
                        setID(data[index]['id'])
                        console.log('swipe')
                    }} {... {trackMouse: true}}
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
                                value={4} 
                                color='warning'
                                // onChange={(e) => console.log(e)}
                            />
                        </div>
                    </Swipeable>
            </FormWrapper>
    )
}

export default Form