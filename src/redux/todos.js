const initialState = {
    items: [],
    loading: false
}

const todosReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'todos/load/start':
            return {
                ...state,
                loading: true
            }

        case 'todos/load/success':
            return {
                ...state,
                items: action.payload,
                loading: false
            }    

        default:
            return state;    
    }
}

export default todosReducer;