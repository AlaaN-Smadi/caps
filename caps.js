'use strict';

const event = require('./events')

require('./src/models/driver')
require('./src/models/vendor')

function callPickUp(paylod){
    console.log(
        'Event: ', {
            event: 'pickup',
            time: new Date().toISOString(),
            paylod: paylod
    })

    // event.emit('ready_for_pickup', paylod)
}



function inTransit(paylod){
    console.log(
        'Event: ', {
            event: 'in-transit',
            time: new Date().toISOString(),
            paylod: paylod
    })
}

function delivered(paylod){
    console.log(
        'Event: ', {
            event: 'delivered',
            time: new Date().toISOString(),
            paylod: paylod
    })

    
}


event.on('pickup',callPickUp)



event.on('in-transits',inTransit)


event.on('delivered',delivered)


module.exports={
    callPickUp,
    inTransit,
    delivered
}