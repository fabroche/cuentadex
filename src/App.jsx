import './App.css'
import Dashboard from "@components/Dashboard";
import Form from "@components/Form";
import useLocalStorage from "@hooks/useLocalStogare/useLocalStorage.jsx";
import {calculateDaysToEnd, getFechaFutura} from "@/services/utils/dates/index.js";
import {useEffect} from "react";

function App() {
    const {data, update,updateOne} = useLocalStorage({
        key: 'cuentadex',
        defaultValue: {
            totalPokedex: 230,
            totalCapturados: 167,
            tiempoDisponibleDiario: 120,
            fechaDeFinalizacion: new Date(getFechaFutura(7))
        }
    });

    const cantidadDeDiaFaltante = calculateDaysToEnd({
        startDate: new Date(),
        endDate: new Date(data.fechaDeFinalizacion)
    })

    const tiempoNecesarioDeCapturaPorPokemonPorDia = calculateRemainingTime({...data, cantidadDeDiaFaltante}) || 0;

    function calculateRemainingTime({totalPokedex, totalCapturados, cantidadDeDiaFaltante, tiempoDisponibleDiario}) {
        const cantidadDePokemosRestantes = totalPokedex - totalCapturados;
        const cantidadDePokemosPorDia = cantidadDePokemosRestantes / cantidadDeDiaFaltante;

        const tiempoNecesario = tiempoDisponibleDiario / cantidadDePokemosPorDia;

        return Number(tiempoNecesario.toFixed(2))
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to Cuentadex</h1>
            </header>

            <main>

                <Dashboard
                    {...data}
                    cantidadDeDiaFaltante={cantidadDeDiaFaltante}
                    setData={updateOne}
                />

                <Form {...data} setData={update}/>

                <h3 className="App-result">Necesitas capturar un pokemon
                    cada <code>{tiempoNecesarioDeCapturaPorPokemonPorDia}</code> minutos</h3>
            </main>
        </div>
    )
}

export default App
