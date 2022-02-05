import axios from 'axios';
export default axios.create({
    baseURL: 'https://react-quiz-a6112-default-rtdb.europe-west1.firebasedatabase.app/'
})