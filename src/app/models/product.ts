import {Supplier} from "./supplier";
import {Stockitem} from "./stockitem";
import {Category} from "./category";
export class Product {
  id: number;
  price: number;
  name: string;
  description: string;
  availableFrom: string;
  availabelUntil: string;
  supplier: Supplier;
  categories: Category[];
  image: string;
  stock: Stockitem;
}
