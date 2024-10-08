# How to run the sample

## Configure the application

- Copy `./env` file to`./env.development` in an editor.
- Replace `YOUR_CLIENT_ID` with the Application (client) ID from the portal registration, or use the currently configured lab registration.

## Install dependencies and run

```bash
# Install dev dependencies
npm install

# Run app in https mode
HTTPS=true npm start    
```

## Running the sample development server

1. In a command prompt, run `npm start`.
1. Open url in format https://{subdomain}.com:3000, for example [https://novondigital.com:3000](https://novondigital.com:3000) to view it in the browser.
1. In the web page, click on the "Login" to begin the auth flow. Enter account available in subdomain provided in url.
1. Open [https://novondigital.com:3000/profile](https://novondigital.com:3000/profile) to see an example of a protected route. If you are not yet signed in, signin will be invoked automatically.
