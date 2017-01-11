import {Supplier} from "./supplier";
export class Product {
  id : number;
  price : number;
  title : string;
  description : string;
  availableFrom: string;
  availabelUntil: string;
  supplier: Supplier;
  image: string;
}
