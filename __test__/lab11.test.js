'use strict'

const { describe, beforeEach, afterEach } = require('@jest/globals')

// const event = require('../events')


const { callPickUp,    inTransit,    delivered } = require('../caps')


describe('Events Tests', () => {
    let mockVar;
    
    

    beforeEach(() => {
        mockVar = jest.spyOn(console, 'log').mockImplementation();
        
    });

    afterEach(() => {
        mockVar.mockRestore();

        
       
    });


    it('Test for PickUp Call back funtion', () => {
        let paylod={
            test: 'test'
        }
        callPickUp(paylod);

        expect(mockVar).toHaveBeenCalled();
    });

    it('Test for inTransit Call back funtion', () => {
        
        let paylod={
            test: 'test'
        }
        inTransit(paylod);
        
        expect(mockVar).toHaveBeenCalled();

    });


    it('Test for delivered Call back funtion', () => {
        
        let paylod={
            test: 'test'
        }
        delivered(paylod);
        
        expect(mockVar).toHaveBeenCalled();

    });

})

