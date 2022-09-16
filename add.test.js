const add = require('./add');

describe('add', () => {
    it('add 2 and 2', ()=>{
        expect(add(5,10)).toBe(15);
    });
  });

