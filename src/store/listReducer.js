let initialState = {
    data: [],
    isFirstCall: true
}

const listReducer = (state = initialState, action) => {
    if (action.type === 'FIRSTCALL') {
        return {
            ...state, isFirstCall: action.isFirstCall
        };
    }
    if (action.type === 'DELETE_ITEM') {
        return {
            ...state,
            data: state.data.filter((item) => item.id !== action.id)
        };
    }

    if (action.type === 'UPDATE_ITEM') {
        const index = state.data.findIndex((el) => { return el.id === action.newObj.id });
        const newState = state.data;
        newState[index] = action.newObj
        return {
            ...state,
            data: newState
        };
    }

    if (action.type === 'DATA_ADDED') {
        return { ...state, data: [...state.data, action.items] }
    }
    if (action.type === 'DATA_RECEIVED') {
        return { ...state, data: action.items }
    }
    return state;
}

export default listReducer;
