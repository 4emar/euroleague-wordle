import * as React from 'react';
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import '../../helper/fonts/BwGradualDEMO-Black.otf';
import '../../helper/fonts/BwGradualDEMO-Medium.otf';

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider, Slide,
    Typography
} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";
import Counter from "../counter/Counter";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CorrectPlayer = (props) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        // <Dialog
        //     open={props.open}
        //     sx={{
        //     width: 550,
        //     height: 600,
        //     backgroundColor: '#fafafa',
        // }}>
        //     <Box textAlign="center">
        //     <Box component="img"
        //         sx={{
        //             maxHeight: 420,
        //             maxWidth: 370,
        //             alignItems: 'center',
        //
        //         }}
        //         src={props.player.image}
        //     />
        //         <Divider variant="middle" color='#ff5100' sx={{marginLeft: '5%', marginRight: '5%', marginTop: '5%', borderBottomWidth: 5}}/>
        //         <Box sx={{
        //             pt: '15px',
        //             pb: '-10px'
        //         }}>
        //         <Typography variant='h7' sx={{textTransform: 'uppercase'}}>
        //             Congrats!
        //         </Typography>
        //         <Typography variant="h5" sx={{textTransform: 'uppercase'}}>
        //             {props.player.name}
        //         </Typography>
        //         <Typography variant='h7' sx={{textTransform: 'uppercase'}}>
        //             You solved it in {props.counter} guess!
        //         </Typography>
        //         </Box>
        //         <Divider variant="middle" color='#ff5100' sx={{marginLeft: '5%', marginRight: '5%', marginTop: '5%', borderBottomWidth: 5}}/>
        //     </Box>
        // </Dialog>
    <Dialog
        open={props.open && open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
    >
        {/*<DialogTitle>{"Use Google's location service?"}</DialogTitle>*/}
        <DialogContent>
            <Box textAlign="center" sx={{
                minWidth: 500
            }}>
                <Box component="img"
                     sx={{
                         maxHeight: 420,
                         maxWidth: 370,
                         alignItems: 'center',

                     }}
                     src={props.player.image}
                />
                <Divider variant="middle" color='#ff5100' sx={{marginLeft: '5%', marginRight: '5%', marginTop: '5%', borderBottomWidth: 5}}/>
                <Box sx={{
                    pt: '15px',
                    pb: '-10px'
                }}>
                    <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                        Congrats!
                    </Typography>
                    <Typography variant="h5" sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black'}}>
                        {props.player.name}
                    </Typography>
                    {props.counter === 1 ?
                        <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                            You solved it in {props.counter} guess!
                        </Typography>
                        :
                        <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                            You solved it in {props.counter} guesses!
                        </Typography>
                    }

                </Box>
                <Divider variant="middle" color='#ff5100' sx={{marginLeft: '5%', marginRight: '5%', marginTop: '5%', borderBottomWidth: 5}}/>
                <Box sx={{marginTop: '2%'}}>
                    <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                        New player in
                    </Typography>
                    <Counter/>
                </Box>
            </Box>
            {/*<DialogContentText id="alert-dialog-slide-description">*/}
            {/*    Let Google help apps determine location. This means sending anonymous*/}
            {/*    location data to Google, even when no apps are running.*/}
            {/*</DialogContentText>*/}
        </DialogContent>
    </Dialog>
    )
}

export default CorrectPlayer;