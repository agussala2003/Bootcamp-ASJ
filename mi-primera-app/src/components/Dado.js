import './Dado.css';
import {useEffect, useState} from 'react';

function Dado () {
    const [number, setNumber] = useState(1);

    useEffect(() => {
        console.log('Se produjeron cambios en el número del dado');
    }, [number]);

    function roll() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setNumber(randomNumber);
    }

    return (
        <div>
            <h1>Juego de dados</h1>
            <div className="container">
                {number <= 3 ? 
                            <div className={`cara-${number}`}>
                            {   
                                Array.from({ length: number }, (_, index) => (
                                    <div className="punto" key={index}></div>
                                ))
                            }
                            </div>
                            :
                            <div className={`cara-${number}`}>
                                <div className="columna">
                                    {
                                        Array.from({ length: number/2 }, (_, index) => (
                                            <div className="punto" key={index}></div>
                                        ))
                                    }
                                </div>
                                {number === 5 ? <div className="punto medio"></div> : null}
                                <div className="columna">
                                    {
                                        Array.from({ length: number/2 }, (_, index) => (
                                            <div className="punto" key={index}></div>
                                        ))
                                    }
                                </div>
                            </div>
                }
            </div>
            <h3>Tu cara es {number}</h3>
            <button onClick={roll}>Roll the die</button>
        </div>
    );
}

export default Dado;
