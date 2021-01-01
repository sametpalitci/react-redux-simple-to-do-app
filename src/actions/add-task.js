const addTask = (getTask, getID) => {
    return {
        type: 'ADD_TASK',
        payload: { todo: getTask, id: getID }
    };

}
export default addTask;