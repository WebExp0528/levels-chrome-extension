import { UserAction } from './actions';
import initialState from './initialState';

export default (state = initialState, action: UserAction) => {
    let nextState = {};
    switch (action.type) {
        case 'GET_USER':
            nextState = {
                ...state,
                ...action.payload,
            };
            break;
        default:
            nextState = state;
    }
    return nextState;
};
