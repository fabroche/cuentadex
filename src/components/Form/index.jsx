import React from 'react';
import './Form.css';

function Form({setData}) {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        setData(data);
    }

    return (
        <form className="App-form" onSubmit={handleSubmit}>
            <div>

                <label htmlFor="totalPokedex">Tamaño de la pokedex</label>
                <input type="number" id="totalPokedex" name="totalPokedex" placeholder={230} required/>
            </div>
            <div>
                <label htmlFor="totalCapturados">Total Capturados</label>
                <input type="number" id="totalCapturados" name="totalCapturados" placeholder={167} required/>
            </div>
            <div>
                <label htmlFor="cantidadDeDiaFaltante">Dias faltantes para completar la
                    pokedex</label>
                <input type="number" id="cantidadDeDiaFaltante" name="cantidadDeDiaFaltante" placeholder={7}
                       required/>
            </div>
            <div>

                <label htmlFor="tiempoDisponibleDiario">Tiempo disponible diario (en minutos)</label>
                <input type="number" id="tiempoDisponibleDiario" name="tiempoDisponibleDiario" placeholder={120}
                       required/>
            </div>
            <button>Submit</button>
        </form>
    );
}

export default Form;