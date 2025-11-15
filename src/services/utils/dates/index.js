function getFechaFutura(dias) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
}

function calculateDaysToEnd({startDate, endDate}) {
    console.log("startDate", startDate)
    console.log("endDate", endDate)

    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))

    console.log(days)
    return days;
}

export {
    getFechaFutura,
    calculateDaysToEnd
}