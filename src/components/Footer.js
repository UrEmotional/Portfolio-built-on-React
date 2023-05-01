import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
          <Link href="https://www.instagram.com/moejs_/">
            <InstagramIcon />
            </Link>
            <Link href="https://github.com/UrEmotional">
            <GitHubIcon/>
            </Link>
            <Link href="https://www.linkedin.com/in/mohammad-sattar-0b583017b/">
            <LinkedInIcon/>
            </Link>
        </div>
        <p>&copy; Mohammad Sattar</p>
    </div>
  )
}

export default Footer