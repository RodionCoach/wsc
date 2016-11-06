import Immutable from 'Immutable';
import GameActionTypes from 'server/constants/action_types/game_action_types';
const inntitialState = Immutable.fromJS({
    players: Immutable.Map(),
});

export default function gameReducer(state = inntitialState, action = {}) {
    switch (action.type) {
    case GameActionTypes.PLAYER_CONNECTED:
        return state.mergeIn(['players'], action.payload);
    case GameActionTypes.PLAYER_SOLVE_TASK:
    case GameActionTypes.PLAYER_GET_TASK:
        return state.mergeDeepIn(['players'], action.payload);
    default:
        return state;
    }
}