import {SearchPipe} from "../pipes/search-pipe";


describe('Search Pipe Tests', () => {
  let pipe:SearchPipe;
  let products = [];

  beforeEach(() => {
    pipe = new SearchPipe();
    products = [{
      name : 'Car',
      supplier : {
        id : 3,
        name : 'ABC'
      },
      price : 12.50
    },{
      name : 'Boat',
      supplier : {
        id : 2,
        name : 'DEF'
      },
      price : 17.50
    },{
      name :  'Plane',
      supplier : {
        id : 1,
        name : 'GHI'
      },
      price : 35.00
    }]
  });

  it('Should find product named boat', () => {
    var sorted = pipe.transform(products,'Boat');

    expect(sorted[0].price).toEqual(17.50);
  });
});
