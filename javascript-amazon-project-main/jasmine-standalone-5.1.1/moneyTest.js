import {formatCurrency} from '../scripts/utils/money.js'
describe('test suite : format currency ',()=>{
    it('converts cents into dollars',()=>{
        expect (formatCurrency(2095)).toEqual('20.95');
    });
    it('0 dollars test ',()=>{
        expect (formatCurrency(0)).toEqual('0.00');
    });
    it('some triky rounding ',()=>{
        expect (formatCurrency(2000.5)).toEqual('20.01');
    });
});