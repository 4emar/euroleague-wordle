import * as React from 'react';
import Box from '@mui/material/Box';
import * as actions from "../../store/actions";
import {connect, useDispatch} from "react-redux";
import {
    Autocomplete,
    Button,
    createFilterOptions,
    MenuItem,
    styled,
    TextField,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import CardPlayer from "../player/CardPlayer";
import {store} from "../../store/store";
import axios from "axios";
import {API_DRIVER} from "../../config";
import CorrectPlayer from "../player/CorrectPlayer";
import WrongPlayer from "../player/WrongPlayer";
import '../../helper/fonts/BwGradualDEMO-Black.otf';
import '../../helper/fonts/BwGradualDEMO-Medium.otf';
import '../../helper/images/background-image.png';

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: '#ff5100',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ff5100',
        },
        fontFamily: 'BwGradualDEMO-Medium'
    },
});

// TODO stavi go guessedPlayer u State const [guessedPlayer, setGuessedPlayer] = useState([])
// TODO setGuessedPlayer(old => old.push(response.data))
const Home = (props) => {
    const [guessedPlayers, setGuessedPlayers] = useState([]);
    const [answers, setAnswers] = useState([]);
    const dispatch = useDispatch();
    const [first, setFirst] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const ref = React.useRef(null);
    const [counter, setCounter] = useState(0);
    const [correctGuess, setCorrectGuess] = useState(false);
    const [correctPlayer, setCorrectPlayer] = useState(null);
    const [open, setOpen] = useState(false);
    const [wrongGuess, setWrongGuess] = useState(false);
    const [key, setKey] = useState(false);
    // const classes = useStyles();

    const correct = {
        name: 'CORRECT',
        teamId: 'CORRECT',
        position: 'CORRECT',
        nationality: 'CORRECT',
        height: 'CORRECT',
        jerseyNumber: 'CORRECT',
        age: 'CORRECT'
    }

    const wrong = {
        name: 'RED',
        teamId: 'RED',
        position: 'RED',
        nationality: 'RED',
        height: 'RED',
        jerseyNumber: 'RED',
        age: 'RED'
    }

    const handleClick = () => {
        if(selectedOptions.value == null)
            console.log("Nothing");
        else {
            if (counter === 7) {
                setAnswers(old => [...old, wrong]);
                setGuessedPlayers(old => [...old, correctPlayer]);
                setWrongGuess(true);
                console.log(correctPlayer);
                setCounter(oldCounter => oldCounter + 1);
                setKey(!key);
            }
            else {
                API_DRIVER.get("api/player/user/compare/" + selectedOptions.value)
                    .then(response => {
                        setAnswers(old => [...old, response.data]);
                        if (response.data.name === 'CORRECT') {
                            setCorrectGuess(true);
                        }
                    });
                API_DRIVER.get("api/player/user/getGuessed/" + selectedOptions.value)
                    .then(response => {
                        setGuessedPlayers(old => [...old, response.data]);
                    });
                setCounter(oldCounter => oldCounter + 1);

                console.log(guessedPlayers);
                setKey(!key);
            }
        }
    };

    const handleKeydown = (e) => {
        // if (e.key === 'Enter') {
        //     if(selectedOptions.value == null)
        //         console.log("Nothing");
        //     else {
        //         if (counter === 7) {
        //             setAnswers(old => [...old, wrong]);
        //             setGuessedPlayers(old => [...old, correctPlayer]);
        //             setWrongGuess(true);
        //             console.log(correctPlayer);
        //             setCounter(oldCounter => oldCounter + 1);
        //         }
        //         else {
        //             API_DRIVER.get("api/player/user/compare/" + selectedOptions.value)
        //                 .then(response => {
        //                     setAnswers(old => [...old, response.data]);
        //                     if (response.data.name === 'CORRECT') {
        //                         setCorrectGuess(true);
        //                     }
        //                 });
        //             API_DRIVER.get("api/player/user/getGuessed/" + selectedOptions.value)
        //                 .then(response => {
        //                     setGuessedPlayers(old => [...old, response.data]);
        //                 });
        //             setCounter(oldCounter => oldCounter + 1);
        //
        //             console.log(guessedPlayers);
        //         }
        //     }
        //
        // }
        // else {
        //     console.log("Not selected")
        // }
    }

    useEffect(() => {
        //dispatch(actions.getAllPlayers());
        dispatch(actions.getAllPlayerNames());
        API_DRIVER.get("api/player/user/getWordlePlayer")
            .then(response => {
                setCorrectPlayer(response.data);
            });
        console.log(correctPlayer);
    }, [dispatch]);

    const logo = "https://upload.wikimedia.org/wikipedia/sr/b/be/EuroLeague_logo.png";

    const OPTIONS_LIMIT = 3;
    const filterOptions = createFilterOptions({
        limit: OPTIONS_LIMIT
    });

    // const handleSubmit = () => {
    //     dispatch(actions.getGuessedPlayer(selectedOptions.value));
    //     dispatch(actions.compare(selectedOptions.value));
    //     setFirst(false);
    //     // console.log(counter);
    //     console.log(props.guessedPlayer[counter]);
    //     setCounter(counter + 1);
    // };

    return (
        <Box>
            <Box sx={{
                paddingTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'transparent',
                //bgcolor: `rgba(255, 255, 255, 0.9)`,
                borderRadius: '5px',
                paddingBottom: 8
            }}>
                <Box component="img" sx={{
                    height: 60,
                    // width: 60,
                    maxHeight: {xs: 60, md: 60},
                    // maxWidth: {xs: 60, md: 60},
                }}
                     src={logo}/>
                <Typography component="h1" variant="h5" sx={{fontFamily: 'BwGradualDEMO-Black', textTransform: 'uppercase', marginBottom: '5%'}}>
                    Wordle
                </Typography>

                <Autocomplete
                    key={key}
                    filterOptions={filterOptions}
                    id="free-solo-demo"
                    freeSolo
                    options={props.allPlayerNames}
                    open={open}
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => {
                        setSelectedOptions(value);
                    }}
                    onInputChange={(event, value) =>
                setOpen(true)}
                    onClose={(event, value) =>
                        setOpen(false)}
                    style={{ width: 400 }}
                    renderInput={(params) => (
                        // <TextField {...params} placeholder={counter !== 8 ? "Guess " + (counter + 1) + " of 8" : "Game Over"} variant="outlined"
                        //     // className={classes.textField}
                        // />
                        <CssTextField {...params} placeholder={counter !== 8 ?
                            "Guess " + (counter + 1) + " of 8"
                            :
                            "Game Over"
                        } variant="outlined" />
                    )}
                    disabled={counter === 8 || correctGuess}
                    onKeyDown={handleKeydown}
                />
                <Button
                    onClick={handleClick}
                    disabled={correctGuess || counter === 8}
                    style={{
                        fontFamily: 'BwGradualDEMO-Medium',
                        color: '#8e74f4'
                    }}
                >
                        Guess!
                </Button>
                {correctGuess && counter && correctPlayer && <CorrectPlayer player={correctPlayer} counter={counter} open={correctGuess}/>}
                {wrongGuess && counter && correctPlayer && <WrongPlayer player={correctPlayer} open={wrongGuess}/>}
                <Box sx={{
                    marginTop: 5
                }}>
                    {counter !== 0 && guessedPlayers.length === counter && answers.length === counter && <CardPlayer player={guessedPlayers} answer={answers}/>}
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