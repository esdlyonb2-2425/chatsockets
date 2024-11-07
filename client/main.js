const socket = io('ws://localhost:8080');

socket.on('message', (message) => {

    const ligne = document.createElement('li')
    ligne.innerHTML = message;
    document.querySelector('ul').appendChild(ligne);
})

document.querySelector('button').addEventListener('click', (e) => {
    const toSend = document.querySelector('input').value;
    socket.emit('message', toSend);

})