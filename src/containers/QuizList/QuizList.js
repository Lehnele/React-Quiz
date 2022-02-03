import React,{ useState, useEffect} from 'react';
import classes from './QuizList.module.css';
import { NavLink } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader';
import axios from '../../axios/axios-quiz';

const QuizList = () => {

    const [state, setState] = useState({
        quizzes: [],
        loading: true
    })

    function renderQuizzes() {
        return state.quizzes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    useEffect(() => {
        async function axiosData() {
            try {
                const response = await axios.get('/quizzes.json')

                const quizzes = []

                Object.keys(response.data).forEach((key, index) => {
                    quizzes.push({
                        id: key,
                        name: `Тест №${index + 1}`
                    })
                })
                setState(state => ({
                    ...state,
                    quizzes,
                    loading: false
                }))
            } catch (e) {
                console.log(e)
            }
        }
        axiosData()

    })

    return (
        <div className={classes.QuizList}>
            <div>
                <h1>Список тестов</h1>

                { state.loading
                    ? <Loader/>
                    : <ul>
                        { renderQuizzes() }
                    </ul>
                }
            </div>
        </div>
    );
};

export default QuizList;
