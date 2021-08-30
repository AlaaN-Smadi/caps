'use strict';

const event = require('../../events')


event.on('pickup',(paylod)=>{
    
    console.log(`DRIVER: Picked up ${paylod.orderID}`)

    setTimeout(function () {
        event.emit('in-transits', paylod)
    }, 1000);
    
})


event.on('in-transits',(paylod)=>{
    
    setTimeout(function () {
        console.log(`DRIVER: delivered ${paylod.orderID}`)
        event.emit('delivered', paylod)
    }, 2000);
    
})