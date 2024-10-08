import { useMsal } from "@azure/msal-react";
import Button from "@mui/material/Button";
import { loginRequest } from "../authConfig";
import axios from 'axios';

export const SignInButton = () => {
    const { instance } = useMsal();

    const fetchTenantId = async () => {
        let currentDomain = window.location.hostname.split('.')[0];
        let url = `${process.env.REACT_APP_BACKEND_API_URL}/admin/tenants/slug/${currentDomain}`;
        // let url = `https://app-mldr-dev.azurewebsites.net/admin/tenants/slug/${currentDomain}`;
        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
            });

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            const data = response.data;
            return data.microsoftTenantId;
        }
        catch (error) {
            if (error.response && error.response.status === 404) {
                throw new Error('Tenant not registered');
            }
            else {
                throw new Error('Network response was not ok');
            }
        }
    };

    const handleLogin = async () => {
        const originalDomain = window.location.origin;
        const tenantId = await fetchTenantId();

        if (tenantId) {
            instance.loginRedirect({
                ...loginRequest,
                authority: `https://login.microsoftonline.com/${tenantId}`,
                state: `${originalDomain}`,
                // redirectUri: `https://stmldrspadev.z6.web.core.windows.net//login`,
                redirectUri: `https://login.mldr:3000/login`,
                navigateToLoginRequestUrl: false,
            });
        }
        else {
            console.error("No tenantId found in query string");
        }
    }

    return (
        <div>
            <Button
                onClick={handleLogin}
                color="inherit"
            >
                Login
            </Button>
        </div>
    )
};

