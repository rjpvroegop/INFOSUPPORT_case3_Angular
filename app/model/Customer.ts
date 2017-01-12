import { Address } from './Address';

export class Customer {
    id : number;
    firstName : string;
    lastName : string;
    birthDate : any;
    addresses : Address[];
    credit : number;
    email : string;
    phone : string
}