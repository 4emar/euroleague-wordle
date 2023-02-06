import {updateObject} from '../../shared/utility';
import {answerInitialState, playerInitialState, playerNamesInitialState} from "./helper";
import * as actionTypes from "../actionTypes";

const initialState = {
    allPlayers: playerInitialState,
    guessedPlayer: [],
    allPlayerNames: playerNamesInitialState,
    answer: []
}

const getAllPlayers = (state, action) => {
    return updateObject(state, {allPlayers: action.allPlayers});
}

const getGuessedPlayer = (state, action) => {
    return updateObject(state, {guessedPlayer: action.guessedPlayer});
}

const getAllPlayerNames = (state, action) => {
    return updateObject(state, {allPlayerNames: action.allPlayerNames});
}

const compare = (state, action) => {
    return updateObject(state, {answer: action.answer});
}



const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PLAYERS:
            return getAllPlayers(state, action);
        case actionTypes.GET_GUESSED_PLAYER:
            return getGuessedPlayer(state, action);
        case actionTypes.GET_ALL_PLAYER_NAMES:
            return getAllPlayerNames(state, action);
        case actionTypes.COMPARE_PLAYER:
            return compare(state, action);
        default:
            return state;
    }
}

export default playerReducer;