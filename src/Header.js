import React from 'react';
import "./Header.css";
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();
    return(
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header_icon" fontSize="large" />
                </IconButton>
            )}
            
            
            <Link to ="/">
            <img 
                className="tinder_logo"
                src="https://www.globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png" 
                alt="tinder logo"
            />
            </Link>

            <Link to ="/chat">
            <IconButton>
                <ForumIcon className="header_icon" fontSize="large" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header;