const initialState = {
    titles: ['title1','title2','title3'],
    currIndex: 0
}

export default (state=initialState,action) => {
    switch(action.type) {
        case 'TAB':
            return {
                ...state,
                currIndex: action.index
            };
        default:
            return state;
    }
}