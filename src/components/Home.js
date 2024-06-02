import React, { useEffect, useState } from 'react';
import CompanyInfo from './CompnyInfo';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('login');
    }
    useEffect(() => {
        if (!localStorage.getItem('login')) {
            navigate('/');
        }
    })

    useEffect(() => {
        fetch('https://hoblist.com/api/movieList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: 'movies',
                language: 'kannada',
                genre: 'all',
                sort: 'voting'
            })
        })
            .then(response => response.json())
            .then(data => setMovies(data.result))
            .catch(error => console.error('Error:', error));
    }, []);
    console.log(movies)

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        const options = { day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-GB', options);
    };

    return (
        <div>

            <button onClick={logout}>Logout</button>
            <h1>Movies</h1>
            <div>
                {movies.map(movie => (
                    <div key={movie._id}>
                        <div style={{ display: 'flex', gap: 2 }}>
                            <div>
                                <i className="fa-solid fa-circle-chevron-up"></i>
                                <p>{movie.voting}</p>
                                <i className="fa-solid fa-circle-chevron-down"></i>
                                <p>Votes</p>
                            </div>
                            <img src={movie.poster} alt="poster" style={{ height: '150px', width: '100px' }} />
                            <div>
                                <h3>{movie.title ? movie.title : '-'}</h3>
                                <p>Genre : {movie.genre ? movie.genre : '-'}</p>
                                <p>Director : {movie.director?.map((e) => <>{e + ","}</>)}</p>
                                <p>Starring : {movie.stars?.map((e) => <>{e + ","}</>)}</p>
                                <p><span>{movie.runTime ? movie.runTime : 'Mins'}</span> | <span>{movie.language}</span> | <span>{formatDate(movie.releasedDate)}</span></p>
                                <p><span>{movie.pageViews || '-'} Views</span> | <span>Voted By {movie.totalVoted || '-'} people</span></p>
                            </div>
                        </div>
                        <button>Watch Trailor</button>
                    </div>
                ))}
            </div>
            <CompanyInfo />
        </div>
    );
};

export default Home;
