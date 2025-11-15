import React from 'react';
import './Form.css';

function Form({
                  totalPokedex,
                  totalCapturados,
                  tiempoDisponibleDiario,
                  fechaDeFinalizacion,
                  setData
              }) {


    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        setData(data);
    }

    return (
        <div className="App-form-container">
            <h2>Actualizar Datos</h2>
            <form className="App-form" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="totalPokedex">Tamaño de la pokedex</label>
                    <input
                        type="number"
                        id="totalPokedex"
                        name="totalPokedex"
                        placeholder={totalPokedex}
                        defaultValue={totalPokedex}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="totalCapturados">Total Capturados</label>
                    <input
                        type="number"
                        id="totalCapturados"
                        name="totalCapturados"
                        placeholder={totalCapturados}
                        defaultValue={totalCapturados}
                        required
                    />
                </div>
                {/*<div>*/}
                {/*    <label htmlFor="cantidadDeDiaFaltante">Dias faltantes para completar la*/}
                {/*        pokedex</label>*/}
                {/*    <input*/}
                {/*        type="number"*/}
                {/*        id="cantidadDeDiaFaltante"*/}
                {/*        name="cantidadDeDiaFaltante"*/}
                {/*        placeholder={cantidadDeDiaFaltante}*/}
                {/*        defaultValue={cantidadDeDiaFaltante}*/}
                {/*        required*/}

                {/*    />*/}
                {/*</div>*/}
                <div>

                    <label htmlFor="tiempoDisponibleDiario">Tiempo disponible diario (en minutos)</label>
                    <input
                        type="number"
                        id="tiempoDisponibleDiario"
                        name="tiempoDisponibleDiario"
                        placeholder={tiempoDisponibleDiario}
                        defaultValue={tiempoDisponibleDiario}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="fechaDeFinalizacion">Fecha de finalización</label>
                    <input
                        type="date"
                        id="fechaDeFinalizacion"
                        name="fechaDeFinalizacion"
                        placeholder={fechaDeFinalizacion}
                        defaultValue={fechaDeFinalizacion}
                        required

                    />
                </div>
                <button>Guardar Cambios</button>
            </form>
        </div>
    );
}

export default Form;
