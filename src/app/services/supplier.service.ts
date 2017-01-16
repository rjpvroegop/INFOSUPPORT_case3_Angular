import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Supplier} from "../models/supplier";

@Injectable()
export class SupplierService {
  private suppliersUrl = "http://localhost:10001/bscatalogusbeheer/suppliers";

  constructor(private http: Http) {
  }

  getSuppliers() {
    return new Promise((res, rej) => {
      this.http.get(this.suppliersUrl)
        .subscribe(
          (data) => res(this.extractSuppliers(data))
        );
    })
  }


  extractSuppliers(res) {
    let body = res.json();

    let suppliers = body.map(supplier => {
      supplier = <Supplier> supplier;
      supplier.state = true;
      return supplier;
    });

    return suppliers;
  }
}
