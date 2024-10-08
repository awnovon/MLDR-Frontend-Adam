import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";

export const PageLayout = (props) => {
    return (
        <>
            <NavBar />
            <Typography variant="h5">
                <center>Welcome to the MLDR Admin Portal</center>
            </Typography>
            <br/>
            <br/>
            {props.children}
        </>
    );
};