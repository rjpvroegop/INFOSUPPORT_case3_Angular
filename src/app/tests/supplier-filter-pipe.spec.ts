import {Supplier} from "../models/supplier";
import {SupplierFilterPipe} from "../pipes/supplier-filter-pipe";


describe('Filter Pipe Tests', () => {
  let pipe:SupplierFilterPipe;
  let products = [];
  let supplier1 = {id: 1, name: "ABC", state: true};
  let supplier2 = {id: 2, name: "DEF", state: false};

  let suppliers: Supplier[] = [supplier1, supplier2];

  beforeEach(() => {
    pipe = new SupplierFilterPipe();

    products = [{
      name : 'Car',
      price : 12.50,
      supplier : supplier2
  },{
    name : 'Boat',
    price : 17.50,
      supplier : supplier1
  },{
    name :  'Plane',
    price : 35.00,
      supplier : supplier1
  }]
  });

  it('Should sort filter products and show only Boad and Plane', () => {
    var sorted = pipe.transform(products,suppliers);
    console.log(JSON.stringify(sorted));
    expect(sorted[0].name).toEqual('Boat');
    expect(sorted[1].name).toEqual('Plane');
  });
});
