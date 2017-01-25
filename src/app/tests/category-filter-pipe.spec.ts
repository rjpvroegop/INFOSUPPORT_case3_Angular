import {CategoryFilterPipe} from "../pipes/category-filter-pipe";
import {Category} from "../models/category";


describe('Filter Pipe Tests', () => {
  let pipe:CategoryFilterPipe;
  let products = [];


  let category1: Category = {id: 1, name: "123", state: true, productCount: 0};
  let category2: Category = {id: 2, name: "456", state: false, productCount: 0};
  let category3: Category = {id: 3, name: "789", state: false, productCount: 0};

  beforeEach(() => {
    pipe = new CategoryFilterPipe();

    products = [{
      name : 'Car',
      price : 12.50,
      categoryList : [category1]
  },{
    name : 'Boat',
    price : 17.50,
    categoryList : [category1, category2]
  },{
    name :  'Plane',
    price : 35.00,
    categoryList : [category2]
  }]
  });

  it('Should filter products and show only Car and Boat', () => {
    let categories = [category1, category2];
    var sorted = pipe.transform(products, categories);
    console.log(JSON.stringify(sorted));
    expect(sorted[0].name).toEqual('Car');
    expect(sorted[1].name).toEqual('Boat');
  });

  it('Should not filter products and show all products', () => {
    let categories = [category2, category3];
    var sorted = pipe.transform(products, categories);
    console.log(JSON.stringify(sorted));
    expect(sorted[0].name).toEqual('Boat');
    expect(sorted[1].name).toEqual('Plane');
  });
});
