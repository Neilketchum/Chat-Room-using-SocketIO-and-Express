const socket = io()

socket.on('countUpdated',(count)=>{
    console.log('Count Updated',count)
})

document.querySelector('#increment').addEventListener('click',(count)=>{
    console.log('Count Increment ')
    socket.emit('increment')
})