const { validateUrl } = require("../client/js/nameChecker")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(validateUrl("read")).toBeFalsy();
    })
    
    test('emails are not considered valid urls', () => {
        expect(validateUrl("mailto:zallaqa99@gmail.com")).toBeFalsy();
    })
    
    test('expect urls to be true', () => {
        expect(validateUrl("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(validateUrl("")).toBeFalsy();
    })
})