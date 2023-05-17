import React from 'react'
import socketIOClient from 'socket.io-client';

let socket;
const ENDPOINT = "https://digitalcms.sundance.org:3000";
const socket = io(ENDPOINT);

socket.on('connect', (res) => {
    debugger
});
socket.on('event', (resd) => {
    debugger
});
socket.on('disconnect', (res) => {
    debugger
});