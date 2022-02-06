import React,{ useEffect } from 'react';
import classes from './QuizList.module.css';
import { Link } from 'react-router-dom';//NavLink
import Loader from '../../components/UI/Loader/Loader';
import { connect } from "react-redux";
import { fetchQuizzes } from '../../store/actions/quiz';

const QuizList = (props) => {
    function renderQuizzes() {
        return props.quizzes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <Link to={`/quizzes/${quiz.id}`}>
                        {quiz.name}
                    </Link>
                </li>
            )
        })
    }

    useEffect(() => {
        props.fetchQuizzes()
    }, [])

    return (
        <div className={classes.QuizList}>
            <div>
                <h1>Список тестов</h1>

                { props.loading && props.quizzes.length !== 0
                    ? <Loader/>
                    : <ul>
                        { renderQuizzes() }
                    </ul>
                }
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        quizzes: state.quiz.quizzes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchQuizzes: () => dispatch(fetchQuizzes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
