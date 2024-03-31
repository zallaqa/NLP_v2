/**
 * @jest-environment jsdom
 */


const { formHandler } = require("../client/js/formHandler")

describe('formHandler', ()=> {
    it('returns something', () => {
        expect(formHandler).toBeDefined();
    })
})