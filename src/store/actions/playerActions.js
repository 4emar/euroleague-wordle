import {store} from "../store";
import * as actionTypes from '../actionTypes';
import {API_DRIVER} from "../../config";

export const getAllPlayers = () => {
    return dispatch => {
        API_DRIVER.get("api/player/user/allPlayers")
            .then(response => {
                dispatch({
                    type: actionTypes.GET_ALL_PLAYERS,
                    allPlayers: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_ALL_PLAYERS_ERROR
                })
            });
    }
};

export const getGuessedPlayer = (playerId) => {
    const guessedPlayer = store.getState().playerReducer.guessedPlayer;

    return dispatch => {
        API_DRIVER.get("api/player/user/getGuessed/" + playerId)
            .then(response => {
                guessedPlayer.push(response.data)
                dispatch({
                    type: actionTypes.GET_GUESSED_PLAYER,
                    guessedPlayer: guessedPlayer
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_GUESSED_PLAYER_ERROR
                })
            });
    }
};

export const getAllPlayerNames = () => {
    return dispatch => {
        API_DRIVER.get("api/player/user/allNames")
            .then(response => {
                dispatch({
                    type: actionTypes.GET_ALL_PLAYER_NAMES,
                    allPlayerNames: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.GET_ALL_PLAYER_NAMES_ERROR
                })
            })
    }
};

export const compare = (playerId) => {
    const answer = store.getState().playerReducer.answer;

    return async dispatch => {
        API_DRIVER.get("api/player/user/compare/" + playerId)
            .then(response => {
                answer.push(response.data);
                dispatch({
                    type: actionTypes.COMPARE_PLAYER,
                    answer: answer
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.COMPARE_PLAYER_ERROR
                })
            })
    }
};