import React from 'react';
import './Dashboard.css';
import iconPokedex from "@/assets/images/icons8-pokedex-48.png";
import iconPokePointer from "@/assets/images/icons8-pokemon-pointer-48.png";
import iconSandClock from "@/assets/images/icons8-sand-clock-100.png";
import iconRunning from "@/assets/images/icons8-running-80.png";
import iconSpinner from "@/assets/images/icons8-spinner-48.png";
import StatusCard from "@components/Dashboard/StatusCard/index.jsx";

function Dashboard({
                       totalPokedex,
                       totalCapturados,
                       tiempoDisponibleDiario,
                       fechaDeFinalizacion,
                       cantidadDeDiaFaltante,
                       setData
                   }) {
    const progress = Math.round((totalCapturados / totalPokedex) * 100);

    return (
        <section id="stats-container" className="App-stats-container">

            <StatusCard
                icon={iconPokedex}
                title="Tamaño de la pokedex"
                value={totalPokedex}
                update={setData}
                dataKey="totalPokedex"
            />


            <StatusCard
                icon={iconPokePointer}
                title="Total Capturados"
                value={totalCapturados}
                update={setData}
                dataKey="totalCapturados"
            />

            <div className="stats-card">
                <img className="stats-card__icon" src={iconSandClock} width={40} height={40}></img>
                <p className="stats-card__title">Días Faltantes</p>
                <p className="stats-card__value">{cantidadDeDiaFaltante}</p>
            </div>

            <StatusCard
                icon={iconRunning}
                title="Tiempo Diario (min)"
                value={tiempoDisponibleDiario}
                update={setData}
                dataKey="tiempoDisponibleDiario"
            />

            <div className="stats-card">
                <img className="stats-card__icon" src={iconSpinner} width={40} height={40}></img>
                <p className="stats-card__title">Progreso</p>
                <p className="stats-card__value">{progress}%</p>
                <span className="stats-card__progress-bar">
                    <span
                        className="stats-card--progress-bar-fill"
                        style={{width: `${progress <= 100 ? progress : 100}%`}}></span>
                </span>
            </div>
        </section>
    );
}

export default Dashboard;