import './App.css'
import {useState} from "react";
import banner from "./assets/images/banner.jpg"

function App() {
    // totalPokedex: 230,
    // totalCapturados: 167,
    // cantidadDeDiaFaltante: 7,
    // tiempoDisponibleDiario: 120

    const [data, setData] = useState({
        totalPokedex: 230,
        totalCapturados: 167,
        cantidadDeDiaFaltante: 7,
        tiempoDisponibleDiario: 120
    });

    const tiempoNecesarioDeCapturaPorPokemonPorDia = calculateRemainingTime(data) || 0;

    function calculateRemainingTime({totalPokedex, totalCapturados, cantidadDeDiaFaltante, tiempoDisponibleDiario}) {
        const cantidadDePokemosRestantes = totalPokedex - totalCapturados;
        const cantidadDePokemosPorDia = cantidadDePokemosRestantes / cantidadDeDiaFaltante;

        const tiempoNecesario = tiempoDisponibleDiario / cantidadDePokemosPorDia;

        return Number(tiempoNecesario.toFixed(2))
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        setData(data);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to Cuentadex</h1>
            </header>
            <form className="App-form" onSubmit={handleSubmit}>
                <label htmlFor="totalPokedex">Tamaño de la pokedex</label>
                <input type="number" id="totalPokedex" name="totalPokedex" placeholder={230} required/>
                <label htmlFor="totalCapturados">Total de pokemons capturados</label>
                <input type="number" id="totalCapturados" name="totalCapturados" placeholder={167} required/>
                <label htmlFor="cantidadDeDiaFaltante">Cantidad de dias faltantes para completar la pokedex</label>
                <input type="number" id="cantidadDeDiaFaltante" name="cantidadDeDiaFaltante" placeholder={7} required/>
                <label htmlFor="tiempoDisponibleDiario">Tiempo disponible diario (en minutos)</label>
                <input type="number" id="tiempoDisponibleDiario" name="tiempoDisponibleDiario" placeholder={120}
                       required/>
                <button>Submit</button>
            </form>
            <h3>Necesitas capturar un pokemon cada <code> {tiempoNecesarioDeCapturaPorPokemonPorDia}</code> minutos</h3>
        </div>
    )
}

export default App
