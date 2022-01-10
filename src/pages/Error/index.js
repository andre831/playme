import React from "react";
import { Link } from "react-router-dom";

import Container from '../../components/Container'
import ErrorSVG from "../../assets/img/ErrorSVG.svg";

function Error(){

    return(
        <Container>
            <div className="mt-2 flex-column text-center">
                <img src={ErrorSVG} width="30%" />
                <h2>Error</h2>
                <p>Page Not Found</p>
                <p>You can return</p> <br/>
                <Link  to="/" >Here</Link>
            </div>
        </Container>
    );
}

export default Error;