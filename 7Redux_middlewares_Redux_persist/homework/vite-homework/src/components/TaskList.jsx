import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from '../store/tasksSlice';



export const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <div>
            <h2>Список заданий</h2>
            {tasks.length === 0 ? (
                <p>Загрузка...</p>
            )
                : (
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                <p>{task.title} : {task.completed ?
                                    <span style={{ color: 'green' }}>выполнено</span>
                                    : <span style={{ color: 'red' }}>не выполнено</span>}</p>
                            </li>
                        ))}
                    </ul>
                )}
        </div>
    );
};
