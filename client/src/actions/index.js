import * as api from '../api';

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTasks();
        dispatch({
            type: 'FETCH_ALL',
            payload: data,
        });
    } catch (error) {
        console.log(error.message);
    }
}

export const createTask = (taskData) => async (dispatch) => {
    try {
        await api.createTask(taskData);
        console.log("sending data", taskData)
        dispatch({
            type: 'CREATE',
            payload: taskData,
        });
    } catch (error) {
        console.log(error.message);
    }
}