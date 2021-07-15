import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Images_List = (props) => {
    const classes = useStyles();

    const handleDelete = () => {
        console.log("delete");
    };

    const handleView = () => {
        console.log("view");
    };

    return (
        <>
            <div className="container" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "15px" }}>
                <div className="section-title" >
                    <h2 style={{ fontSize: "15px" }}>{props.Title}</h2>
                </div>
            </div>
            <div className="container" style={{ display: "inline-flex", overflowX: "scroll", overflowY: "hidden", alignItems: "center", justifyContent: "flex-start" }}>
                <div className="inner" style={{ height: "100%", whiteSpace: "nowrap" }}>
                    {props.defaultPictures.map((picture, index) => (
                        <div className="image_list_item" key={index} style={{ marginLeft: "5px", display: "inline-block", position: "relative" }}>
                            <img id="output" className="image_list_img" src={picture} width="200" />
                            <div className={"image_list_middle " + classes.root}>
                                <IconButton color="secondary" aria-label="delete" disabled={!props.edit} onClick={ handleDelete }>
                                    <i className="fas fa-trash" />
                                </IconButton>
                                <IconButton color="primary" aria-label="view" onClick={handleView}>
                                    <i className="fas fa-eye" />
                                </IconButton>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Images_List;