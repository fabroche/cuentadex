import { useState, useEffect } from 'react';

function useLocalStorage({key, defaultValue}) {

    const [data, setData] = useState(JSON.parse(window.localStorage.getItem(key)) || defaultValue);

    function read() {
        return data;
    }

    function update(data) {
        setData(data);
        window.localStorage.setItem(key, JSON.stringify(data));
    }

    function updateOne(dataKey, value) {
        setData({...data, [dataKey]: value});
        window.localStorage.setItem(key, JSON.stringify({...data, [dataKey]: value}));
    }

    return {data, read, update, updateOne};
}

export default useLocalStorage;