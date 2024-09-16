// Задание 2: Список дел с Material UI

// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. 
// Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import { Button, Card, CardActionArea, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";

function TodoList() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const updateText = (e) => {
        setTask(e.target.value);
    };

    const addList = () => {
        if (task.trim() === '') {
            setTask('');
            return;
        }

        // const newArray = [...taskList, value];
        // const newArray = [...taskList, {value, id: Date.now()}];// добавим уникальный идентификатор id: Date.now(); value: value, 
        const newArray = [...taskList, { value: task, id: crypto.randomUUID() }];// второй вариант
        setTaskList(newArray);
        setTask('');
    };

    const deleteTask = (taskId) => {
        // передаём в функцию "удаления", которая вызывается при нажатии на кнопку, 
        // сomment.id, который получаем при рендеринге из comments.map
        const updateTaskList = taskList.filter((task) => task.id !== taskId);
        setTaskList(updateTaskList);
    };

    return (
        <>
            <div style={{ display: "grid", justifyContent: "center", gap: "5px" }} >
                <h2>Список дел</h2>
                {/* <input type="text" placeholder="Введите текст" onChange={updateText} value={task}></input> */}
                {/* <button onClick={addList}>Ввести данные</button> */}
                <div style={{ display: "flex", justifyContent: "center", gap: "5px" }} >
                    <TextField
                        label='Введите задание'
                        type="text"
                        value={task}
                        onChange={updateText} />
                    <Button
                        onClick={addList}
                        variant='outlined'>
                        Добавить
                    </Button>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    {taskList.map((task) =>
                        <>
                            <Card
                                key={task.id}
                                sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography
                                            gutterBottom variant="h5"
                                            component="div">
                                            Задание
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: 'text.secondary' }}>
                                            {task.value}
                                        </Typography>
                                        <Button
                                            onClick={() => deleteTask(task.id)}>
                                            Удалить
                                        </Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </>
                    )}
                </div>
            </div>
            {/* <ul>
                {taskList.map((task) =>
                    <>
                        <li key={task.id} >{task.value}</li>
                        <button onClick={() => deleteTask(task.id)} >Удалить</button>
                    </>
                )}
            </ul> */}
        </>
    );
}
export default TodoList;