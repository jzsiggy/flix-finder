import instance from '../../../instance';
import React , { useEffect , useState , useCallback } from 'react'
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Swipeable } from 'react-swipeable'

import Logout from '../../auth/logout/Logout';
import Card from '../card/Card';
import { FormWrapper } from './styles';
import { Redirect } from 'react-router-dom';


const Form = () =>  {
    const [score, setScore] = useState(4)
    const [ratings, setRatings] = useState([])
    const [data, setData] = useState({})
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [id, setID] = useState('')
    const [index, setIndex] = useState(0)
    const [auth, setAuth] = useState('busy')
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        instance.get('/auth/current-user')
        .then(response => setAuth(true))
        .catch(err => setAuth(false))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        instance.get('/movies/random-movie')
        .then(response => {
            const results = response.data
            setData(results)
            setImg(`https://image.tmdb.org/t/p/w500${results[index]['poster_path']}`)
            setTitle(results[index]['title'])
            setID(results[index]['id'])
            setIndex(index+1)
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const swipe = (event) => {
        setRatings([
            ...ratings,
            {
                id,
                score
            }
        ])
        setIndex(index+1)

        if (index > 5) {
            setRedirect(true)
        }

        setTitle(data[index]['title'])
        setImg(`https://image.tmdb.org/t/p/w500${data[index]['poster_path']}`)
        setID(data[index]['id'])
        setScore(4)
    }

    const changeScore = useCallback((newScore) => {
        setScore(newScore);
    }, [setScore]);

    return(
        redirect ? <Redirect to='/list' /> :
        auth == 'busy' ? <></> :
        !auth ? <Redirect to='/login' /> :
        <>
            <Logout />
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
                            onChange={changeScore}
                        />
                    </div>
                </Swipeable>
            </FormWrapper>
        </>
    )
}

export default Form