import {FilterPipe} from "../pipes/filter-pipe";
import {Supplier} from "../models/supplier";


describe('Filter Pipe Tests', () => {
  let pipe:FilterPipe;
  let products = [];
  let suppliers: Supplier[] = [];

  beforeEach(() => {
    pipe = new FilterPipe();

    products = [{
      name : 'Car',
      price : 12.50,
      categoryList : [{id : 1, name : 'Misc'}, {id : 5, name : 'Misc'}],
      supplier : {
        id : 1,
        name : 'GHI'
      }
  },{
    name : 'Boat',
    price : 17.50,
    categoryList : [{id : 2, name : 'Misc'}, {id : 5, name : 'Misc'}],
      supplier : {
        id : 1,
        name : 'GHI'
      }
  },{
    name :  'Plane',
    price : 35.00,
    categoryList : [{id : 3, name : 'Misc'}, {id : 5, name : 'Misc'}],
      supplier : {
        id : 1,
        name : 'GHI'
      }
  }]
  });

/*  it('Should sort filter products and show only car', () => {
    var sorted = pipe.transform(products,true,false,false,false, suppliers);
    console.log(JSON.stringify(sorted));
    expect(sorted[0].name).toEqual('Car');
  });*/
});
