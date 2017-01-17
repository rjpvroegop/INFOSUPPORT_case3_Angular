import {SortPipe} from "../pipes/sort-pipe";


describe('Sort Pipe Tests', () => {
  let pipe:SortPipe;
  let products = [];

  beforeEach(() => {
    pipe = new SortPipe();
    products = [{
      name : 'Car',
      supplier : 'ABC',
      price : 12.50
    },{
      name : 'Boat',
      supplier : 'ABC',
      price : 17.50
    },{
      name :  'Plane',
      supplier : 'ABC',
      price : 35.00
    }]
  });

  it('Should sort products alphabetically by name', () => {
    var sorted = pipe.transform(products,'name');

    expect(sorted[0].name).toEqual('Boat');
  });

  it('Should sort products by name and from low to high', () => {
    var sorted = pipe.transform(products,'price');

    expect(sorted[0].name).toEqual('Car');
  });
});
