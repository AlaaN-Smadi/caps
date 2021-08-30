'use strict';

const event = require('../../events')



event.on('delivered',(paylod)=>{
    
  console.log('thank you'); 
})


setInterval(() => {
    let paylod ={
        store: '1-206-flowers',
        orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
        customer: 'Jamal Braun',
        address: 'Schmittfort, LA' 
    } 
    
    
    event.emit('pickup', paylod);
    
}, 5000);