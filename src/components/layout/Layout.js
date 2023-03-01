import Home from "../home/Home";
import React from "react";
import {Container} from "@mui/material";
import '../../helper/images/background-image.png';

const Layout = () => {
    return (
        <>
            <Container>
                <Home style={{marginTop: '20px'}}/>
            </Container>
        </>
    )
}

export default Layout;