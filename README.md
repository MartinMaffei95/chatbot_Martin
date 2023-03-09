# Chat92 chat app

Chat aplication used for the SDK. Deployed in vercel.
Build in React+Typescript using Vite.

## Usage

```bash

npm i

npm start dev

```

## .env

`VITE_APP_SERVER_NAME`: Name of property.  
 `VITE_APP_API_URI`: Api direction.  
 `VITE_APP_EXPIRATION_MS`: Representation in minutes of how often we will check that the chat has not expired .

## How work

This is a app connect the SDK with the business api.
Send a message to Api and wait for a response. Use Redux for save the state of messages a time period(use the `VITE_APP_EXPIRATION_MS`). Uses the localStorage API to for save the conversation.  
Every 5' execute a fx() who check when the conversation expires.
