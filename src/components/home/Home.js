import * as React from 'react';
import Box from '@mui/material/Box';
import * as actions from "../../store/actions";
import {connect, useDispatch} from "react-redux";
import {Autocomplete, Button, createFilterOptions, MenuItem, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import CardPlayer from "../player/CardPlayer";
import {store} from "../../store/store";
import axios from "axios";
import {API_DRIVER} from "../../config";

// TODO stavi go guessedPlayer u State const [guessedPlayer, setGuessedPlayer] = useState([])
// TODO setGuessedPlayer(old => old.push(response.data))
const Home = (props) => {
    const [loading, setLoading] = useState(true);
    const [guessedPlayers, setGuessedPlayers] = useState([]);
    const [answers, setAnswers] = useState([]);
    const dispatch = useDispatch();
    const [first, setFirst] = useState(true);
    const [correct, setCorrect] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const ref = React.useRef(null);
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        if(selectedOptions.value == null)
            console.log("Nothing");
        else {
            API_DRIVER.get("api/player/user/getGuessed/" + selectedOptions.value)
                .then(response => {
                    setGuessedPlayers(old => [...old, response.data]);
                })
                .finally(setGuessedPlayers(guessedPlayers));
            console.log(guessedPlayers);
            API_DRIVER.get("api/player/user/compare/" + selectedOptions.value)
                .then(response => {
                    setAnswers(old => [...old, response.data]);
                })
                .finally(setAnswers(answers));
            console.log(answers);
            setCounter(counter + 1);
        }
    };

    useEffect(() => {
        //dispatch(actions.getAllPlayers());
        dispatch(actions.getAllPlayerNames());
    }, [dispatch]);

    const logo = "https://upload.wikimedia.org/wikipedia/sr/b/be/EuroLeague_logo.png";

    const OPTIONS_LIMIT = 5;
    const filterOptions = createFilterOptions({
        limit: OPTIONS_LIMIT
    });

    const handleSubmit = () => {
        if(selectedOptions.value == null)
            console.log("Nothing");
        else {
            dispatch(actions.getGuessedPlayer(selectedOptions.value));
            dispatch(actions.compare(selectedOptions.value));
            setFirst(false);
            // console.log(counter);
            console.log(props.guessedPlayer[counter]);
            setCounter(counter + 1);
        }
    };

    return (
        <Box>
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: `rgba(255, 255, 255, 0.9)`,
                padding: '8px',
                borderRadius: '5px'
            }}>
                <Box component="img" sx={{
                    height: 60,
                    // width: 60,
                    maxHeight: {xs: 60, md: 60},
                    // maxWidth: {xs: 60, md: 60},
                }}
                     src={logo}/>
                <Typography component="h1" variant="h5">
                    Wordle
                </Typography>

                <Autocomplete
                    filterOptions={filterOptions}
                    id="combo-box-demo"
                    options={props.allPlayerNames}
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => {
                        setSelectedOptions(value);
                    }}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                        <TextField {...params} label="Player" variant="outlined" />
                    )}
                />
                <Button onClick={handleClick}>Guess!</Button>

                <Box sx={{
                    marginTop: 5
                }}>
                    {guessedPlayers[counter] && <CardPlayer player={guessedPlayers} answer={answers}/>}
                </Box>
            </Box>
        </Box>
    )
}

//TODO USESELECTOR tuka

const mapStateToProps = (state) => {
    return {
        allPlayers: state.playerReducer.allPlayers,
        guessedPlayer: state.playerReducer.guessedPlayer,
        allPlayerNames: state.playerReducer.allPlayerNames,
        answer: state.playerReducer.answer
    }
}

//TODO USEDISPATCH pobaraj

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPlayerNames: () => dispatch(actions.getAllPlayerNames()),
        compare: (playerId) => dispatch(actions.compare(playerId)),
        getGuessedPlayer: (playerId) => dispatch(actions.getGuessedPlayer(playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);