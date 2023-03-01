import {
    Avatar,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import * as React from 'react';
import Box from "@mui/material/Box";
import {connect} from "react-redux";
import '../../helper/fonts/BwGradualDEMO-Black.otf';
import '../../helper/fonts/BwGradualDEMO-Medium.otf';
import '../../index.css';

const CardPlayer = (props) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 750, fontWeight: 'bold'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Team</TableCell>
                            <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Position</TableCell>
                            <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Nationality</TableCell>
                            <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Height</TableCell>
                            <TableCell sx={{textTransform: 'uppercase', fontWeight: 'bold', color: '#8e74f4'}} align="center">#</TableCell>
                            <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ fontWeight: 'bold' }}>
                        {props.player.map((p, idx) => (
                            <TableRow
                                key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {props.answer[idx].name === "CORRECT" ?
                                    <TableCell sx={{
                                        backgroundColor: '#37be75'
                                        , color: '#FFFFFF',
                                        textTransform: 'uppercase',
                                        fontFamily: 'BwGradualDEMO-Black'
                                        , fontSize: '13pt'
                                    }} component="th" scope="row">
                                        {p.name}
                                    </TableCell>
                                    :

                                    props.answer[idx].name === "RED" ?
                                        <TableCell sx={{
                                            backgroundColor: '#920000'
                                            , color: '#FFFFFF' , textTransform: 'uppercase',
                                            fontFamily: 'BwGradualDEMO-Black'
                                            , fontSize: '13pt'
                                        }} component="th" scope="row">
                                            {p.name}
                                        </TableCell>
                                        :
                                    <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', fontSize: '13pt'}} component="th" scope="row">
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
                                    :

                                    props.answer[idx].teamId === 'RED' ? <TableCell align="center" sx={{
                                            backgroundColor: '#920000'
                                            , color: '#FFFFFF'
                                        }}><Box component="img" sx={{
                                            height: 50,
                                            // width: 60,
                                            maxHeight: {xs: 50, md: 50},
                                            // maxWidth: {xs: 60, md: 60},
                                        }}
                                                src={p.teamImage}/></TableCell> :

                                    <TableCell align="center" sx={{

                                    }}><Box component="img" sx={{
                                        height: 50,
                                        // width: 60,
                                        maxHeight: {xs: 50, md: 50},
                                        // maxWidth: {xs: 60, md: 60},
                                    }}
                                            src={p.teamImage}/></TableCell>
                                }

                                {props.answer[idx].position === "CORRECT" ?
                                    <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.position}
                                    </TableCell>
                                    :
                                    props.answer[idx].position === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.position}
                                        </TableCell> :
                                    <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.position}</TableCell>
                                }

                                {props.answer[idx].nationality === "CORRECT" ?
                                    <TableCell sx={{backgroundColor: '#37be75', fontFamily: 'BwGradualDEMO-Medium', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase'}} align="center">{p.nationality}</TableCell>
                                    :
                                    props.answer[idx].nationality === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.nationality}</TableCell> :
                                    <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.nationality}</TableCell>
                                }

                                {props.answer[idx].height === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.height}</TableCell> : null}
                                {props.answer[idx].height === "UP" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.height} ↑</TableCell> : null}
                                {props.answer[idx].height === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.height} ↓</TableCell> : null}
                                {props.answer[idx].height === "WRONGDOWN" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.height} ↓</TableCell> : null}
                                {props.answer[idx].height === "WRONGUP" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium' }} align="center">{p.height} ↑</TableCell> : null}
                                {props.answer[idx].height === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.height}</TableCell> : null}

                                {props.answer[idx].jerseyNumber === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.jerseyNumber}</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "UP" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.jerseyNumber} ↑</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.jerseyNumber} ↓</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "WRONGDOWN" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.jerseyNumber} ↓</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "WRONGUP" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.jerseyNumber} ↑</TableCell> : null}
                                {props.answer[idx].jerseyNumber === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.jerseyNumber}</TableCell> : null}

                                {props.answer[idx].age === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.age === 100 ? "00" : p.age}</TableCell> : null}
                                {props.answer[idx].age === "UP" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.age === 100 ? "00" : p.age} ↑</TableCell> : null}
                                {props.answer[idx].age === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.age === 100 ? "00" : p.age} ↓</TableCell> : null}
                                {props.answer[idx].age === "WRONGDOWN" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.age === 100 ? "00" : p.age} ↓</TableCell> : null}
                                {props.answer[idx].age === "WRONGUP" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.age === 100 ? "00" : p.age} ↑</TableCell> : null}
                                {props.answer[idx].age === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p.age === 100 ? "00" : p.age}</TableCell> : null}
                            </TableRow>
                            ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CardPlayer;