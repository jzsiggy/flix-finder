import instance from '../../../instance';
import React , { useEffect , useState } from 'react'

import { PlaylistWrapper } from './styles';
import Logout from '../../auth/logout/Logout';
import Movie from '../movie/Movie';
import { Redirect } from 'react-router-dom';
 
const Playlist = (props) => {
    const [movieList, setMovieList] = useState([])
    const [auth, setAuth] = useState('busy')

    useEffect(() => {
        instance.get('/auth/current-user')
        .then(response => setAuth(true))
        .catch(err => setAuth(false))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    useEffect(() => {
        instance.post('/movies/suggestion')
        .then(response => {
            const results = response.data
            setMovieList(results)
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        auth == 'busy' ? <></> :
        !auth ? <Redirect to='/login' /> :
        <>
            <Logout />
            <h2>Suggestions for you</h2>
            <PlaylistWrapper>
            {
                movieList.map((movie, index) => <Movie key={index} img={movie.img} title={movie.title} />)
            }
            </PlaylistWrapper>
        </>
    )
}

export default Playlist