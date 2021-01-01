const todoReducer = (state = [{ todo: "first task", id: 0 }], action) => {
    if (action.type === "ADD_TASK") {
        return [...state, { todo: action.payload.todo, id: state[state.length - 1].id + 1}];
    }
    return state;
}

export default todoReducer;