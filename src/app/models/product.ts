import {Supplier} from "./supplier";
export class Product {
  id : number;
  price : number;
  name : string;
  description : string;
  availableFrom: string;
  availabelUntil: string;
  supplier: Supplier;
  image: string;
}
