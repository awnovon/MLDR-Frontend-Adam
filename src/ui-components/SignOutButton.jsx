import { useMsal } from "@azure/msal-react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from "@mui/icons-material/Logout";

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = () => {
        instance.logoutRedirect();
    }

    return (
        <Tooltip title="Logout">
            <IconButton
                onClick={handleLogout}
                color="inherit"
            >
                <Logout />
            </IconButton>
        </Tooltip>
    )
};