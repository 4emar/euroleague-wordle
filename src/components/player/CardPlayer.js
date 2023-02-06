import {Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import * as React from 'react';
import Box from "@mui/material/Box";
import {connect} from "react-redux";

const CardPlayer = (props) => {

    const correct = [
        {
            teamId: 'CORRECT',
            position: 'CORRECT',
            nationality: 'CORRECT',
            height: 'CORRECT',
            jerseyNumber: 'CORRECT',
            age: 'CORRECT'
        }
    ]

    //console.log(props.player[0]);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Team</TableCell>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">Nationality</TableCell>
                            <TableCell align="center">Height</TableCell>
                            <TableCell align="center">#</TableCell>
                            <TableCell align="center">Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.player.map((p, idx) => (
                            <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {props.answer[idx].name === "CORRECT" ?
                                    <TableCell sx={{
                                        backgroundColor: '#37be75'
                                        , color: '#FFFFFF'
                                    }} component="th" scope="row">
                                        {p.name}
                                    </TableCell>
                                    :
                                    <TableCell component="th" scope="row">
                                        {p.name}
                                    </TableCell>
                                }


                                {props.answer[idx].teamId === 'CORRECT' ?
                                    <TableCell align="center" sx={{
                                        backgroundColor: '#37be75'
                                        , color: '#FFFFFF'
                                    }}><Box component="img" sx={{
                                        height: 50,
                                        // width: 60,
                                        maxHeight: {xs: 50, md: 50},
                                        // maxWidth: {xs: 60, md: 60},
                                    }}
                                            src={p.teamImage}/></TableCell>
                                    : <TableCell align="center" sx={{

                                    }}><Box component="img" sx={{
                                        height: 50,
                                        // width: 60,
                                        maxHeight: {xs: 50, md: 50},
                                        // maxWidth: {xs: 60, md: 60},
                                    }}
                                            src={p.teamImage}/></TableCell>
                                }

                                {props.answer[idx].position === "CORRECT" ?
                                    <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF'}} align="center">{p.position}
                                    </TableCell>
                                    :
                                    <TableCell align="center">{p.position}</TableCell>
                                }

                                {props.answer[idx].nationality === "CORRECT" ?
                                    <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF'}} align="center">{p.nationality}</TableCell>
                                    :
                                    <TableCell align="center">{props.player.nationality}</TableCell>
                                }

                                {props.answer[idx].height === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF'}} align="center">{p.height}</TableCell> : null}
                                {props.answer[idx].height === "UP" ? <TableCell sx={{backgroundColor: '#e5d661'}} align="center">{p.height}</TableCell> : null}
                                {props.answer[idx].height === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661'}} align="center">{p.height}</TableCell> : null}
                                {props.answer[idx].height === "WRONGDOWN" ? <TableCell align="center">{p.height}</TableCell> : null}
                                {props.answer[idx].height === "WRONGUP" ? <TableCell align="center">{p.height}</TableCell> : null}

                                {props.answer[idx].jerseyNumber === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF'}} align="center">{p.jerseyNumber}</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "UP" ? <TableCell sx={{backgroundColor: '#e5d661'}} align="center">{p.jerseyNumber}</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661'}} align="center">{p.jerseyNumber}</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "WRONGDOWN" ? <TableCell align="center">{p.jerseyNumber}</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "WRONGUP" ? <TableCell align="center">{p.jerseyNumber}</TableCell> : null}

                                {props.answer[idx].age === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF'}} align="center">{p.age}</TableCell> : null}
                                {props.answer[idx].age === "UP" ? <TableCell sx={{backgroundColor: '#e5d661'}} align="center">{p.age}</TableCell> : null}
                                {props.answer[idx].age === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661'}} align="center">{p.age}</TableCell> : null}
                                {props.answer[idx].age === "WRONGDOWN" ? <TableCell align="center">{p.age}</TableCell> : null}
                                {props.answer[idx].age === "WRONGUP" ? <TableCell align="center">{p.age}</TableCell> : null}
                            </TableRow>
                            ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CardPlayer;