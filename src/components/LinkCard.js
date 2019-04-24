import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardContainer from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./LinkCard.css";

class LinkCard extends Component {
    render() {
        const { img, link, title } = this.props;

        return (
            <Link to={link}>
                <CardContainer className="card">
                    <CardMedia
                        className="media-link-card"
                        image={img}
                        alt="Dog"
                        style={{ width: "200px" }}
                    />
                    <CardContent className="title">
                        <Typography gutterBottom variant="h5" component="h3">
                            {title}
                        </Typography>
                    </CardContent>
                </CardContainer>
            </Link>
        );
    }
}

export default LinkCard;
