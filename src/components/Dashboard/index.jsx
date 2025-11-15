import React from 'react';
import './Dashboard.css';
import iconPokedex from "@/assets/images/icons8-pokedex-48.png";
import iconPokePointer from "@/assets/images/icons8-pokemon-pointer-48.png";
import iconSandClock from "@/assets/images/icons8-sand-clock-100.png";
import iconRunning from "@/assets/images/icons8-running-80.png";
import iconSpinner from "@/assets/images/icons8-spinner-48.png";

function Dashboard({totalPokedex, totalCapturados, cantidadDeDiaFaltante, tiempoDisponibleDiario}) {
    const progress = Math.round((totalCapturados / totalPokedex) * 100);

    return (
        <section id="stats-container" className="App-stats-container">
            <div className="stats-card">
                <img className="stats-card__icon" src={iconPokedex} width={40} height={40}></img>
                <p className="stats-card__title">Tamaño de la pokedex</p>
                <p className="stats-card__value">{totalPokedex}</p>
            </div>

            <div className="stats-card">
                <img className="stats-card__icon" src={iconPokePointer} width={40} height={40}></img>
                <p className="stats-card__title">Total Capturados</p>
                <p className="stats-card__value">{totalCapturados}</p>
            </div>

            <div className="stats-card">
                <img className="stats-card__icon" src={iconSandClock} width={40} height={40}></img>
                <p className="stats-card__title">Días Faltantes</p>
                <p className="stats-card__value">{cantidadDeDiaFaltante}</p>
            </div>

            <div className="stats-card">
                <img className="stats-card__icon" src={iconRunning} width={40} height={40}></img>
                <p className="stats-card__title">Tiempo Diario (min)</p>
                <p className="stats-card__value">{tiempoDisponibleDiario}</p>
            </div>
            <div className="stats-card stats-card--progress">
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