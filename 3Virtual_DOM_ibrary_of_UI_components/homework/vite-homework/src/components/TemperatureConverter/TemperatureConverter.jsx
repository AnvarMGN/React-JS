// Задание 1: Температурный конвертер с Material UI
// Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI
//  для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import { useState } from "react";
import { Button, TextField } from '@mui/material'
//1. npm install @mui/material @emotion/react @emotion/styled

export const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const updateCelsius = (e) => {
        setCelsius(() => e.target.value)
    };

    const updateFahrenheit = (e) => {
        setFahrenheit(() => e.target.value)
    };

    const handleCelsius = () => {
        if (celsius === '') {
            setFahrenheit('');
        } else {
            const fahrenheitValue = (celsius * 9) / 5 + 32;
            setFahrenheit(fahrenheitValue.toFixed(2));
            setCelsius('');
        };
    };

    const handleFahrenheit = () => {
        if (fahrenheit === '') {
            setCelsius('');
        } else {
            const celsiusValue = (fahrenheit - 32) * 5 / 9;
            setCelsius(celsiusValue.toFixed(2));
            setFahrenheit('');
        };
    };

    return (
        <>
            <div style={{ display: "flex", padding: "20px", gap: "5px" }}>
                <TextField
                    label='Градусов Цельсия'
                    type="number" value={celsius}
                    onChange={updateCelsius} />
                <Button
                    onClick={handleCelsius}
                    variant='outlined'
                    style={{ display: 'flex', margin: '15 auto' }}>Преобразовать в F</Button>
            </div>
            
            <div style={{ display: "flex", padding: "20px", gap: "5px" }} >
                <TextField
                    label='Градусов Фаренгейта'
                    type="number"
                    value={fahrenheit}
                    onChange={updateFahrenheit} />
                <Button
                    onClick={handleFahrenheit}
                    variant='outlined'
                    style={{ display: 'flex', margin: '15 auto' }}>Преобразовать в C</Button>
            </div>
        </>
    )
}