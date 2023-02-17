import React, { useEffect, useState } from 'react';
import './css/Style.css';

function App() {

    const [location, setLocation] = useState(null)
    const [search, setSearch] = useState('Pune')

    useEffect(() => {

        const fetchapi = async () => {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fed144e0ea8ac6663d54d04e940c11d`;

            const respone = await fetch(url);

            const resJson = await respone.json();
            // console.log(resJson);

            setLocation(resJson.main);

        }

        fetchapi();

    }, [search])


    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type="search" className='inputField'  placeholder='Search City or Country' onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {
                    !location  ? (
                        <>
                        <h1 className='errmsg'>Sorry :(</h1>
                        <h1 className='errmsg'>No data found !</h1>
                        </>
                        ):
                (
                <>
                    <div className='weatherData'>
                        <i className="fa-solid fa-street-view"></i>
                        <h2 className='location'>{search}</h2>
                        <h1 className='temp'>{location.temp} °C</h1>
                        <h3 className='tepmMinMax'>Max: {location.temp_max}°C | Min: {location.temp_min}°C</h3>
                    </div>

                    <div className='wave1'></div>
                    <div className='wave2'></div>
                    <div className='wave3'></div>
                </>
                ) 
                }


            </div>
        </>
    )
}

export default App;