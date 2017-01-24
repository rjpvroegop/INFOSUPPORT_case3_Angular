import { Address } from './address';

export class Customer {
    id : number;
    bsKey : number;
    firstName : string;
    lastName : string;
    birthDate : any;
    addresses : Address[];
    credit : number;
    email : string;
    phone : string
}
