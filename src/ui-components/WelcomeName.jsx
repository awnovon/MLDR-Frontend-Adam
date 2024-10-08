import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import Typography from "@mui/material/Typography";

const WelcomeName = () => {
    const { instance } = useMsal();
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);

    const activeAccount = instance.getActiveAccount();
    useEffect(() => {
        if (activeAccount) {
            setName(activeAccount.name.split(' ')[0]);
            setUsername(activeAccount.username);
        } else {
            setName(null);
            setUsername(null);
        }
    }, [activeAccount]);

    if (name) {
        return (
            <>
                <Typography variant="h8" style={{ display: 'block' }}>{username}</Typography>
            </>
        );
    } else {
        return null;
    }
};

export default WelcomeName;