import React from 'react';


function StatusCard({icon, title, value, dataKey, update}) {
    function handleUpdate(e) {
        e.target.innerText === '+'
            ? update(dataKey, Number(value) + 1)
            : update(dataKey, Number(value) - 1);
    }

    return (
        <div className="stats-card">
            <img className="stats-card__icon" src={icon} width={40} height={40}></img>
            <p className="stats-card__title">{title}</p>
            <p className="stats-card__value">{value}</p>
            <div className="stats-card__actions">
                <button onClick={handleUpdate}>+</button>
                <button onClick={handleUpdate}>-</button>
            </div>
        </div>
    );
}

export default StatusCard;