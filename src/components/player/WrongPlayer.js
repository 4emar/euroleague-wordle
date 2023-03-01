import * as React from 'react';
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
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

const WrongPlayer = (props) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
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
                            Sorry, the correct answer is
                        </Typography>
                        <Typography variant="h5" sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black'}}>
                            {props.player.name}
                        </Typography>
                        <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                            Try again tomorrow!
                        </Typography>
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

export default WrongPlayer;