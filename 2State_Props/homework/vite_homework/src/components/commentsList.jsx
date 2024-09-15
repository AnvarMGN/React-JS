import { useState } from 'react';

const Commentlist = () => {
    const [comments, setСomments] = useState([
        { id: 1, text: 'Это первый комментарий' },
        { id: 2, text: 'Это второй комментарий' },
        { id: 3, text: 'Это третий комментарий' },
    ]);

    const deleteComment = (commentId) => {
        // передаём в функцию "удаления", которая вызывается при нажатии на кнопку, 
        // сomment.id, который получаем при рендеринге из comments.map
        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        setСomments(updatedComments);
    };

    return (
        <ul>
            {comments.map((сomment) => (
                <li key={сomment.id}>{сomment.text + ' - '}
                    <button onClick={() => deleteComment(сomment.id)}>Удалить
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Commentlist;