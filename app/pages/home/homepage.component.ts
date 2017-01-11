import {Component, Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'homepage-component',
  templateUrl: 'homepage.component.html'
})

@Injectable()
export class HomepageComponent {
  private sloganUrl = 'https://api.github.com/zen';  // URL to web API
  private productUrl = 'http://localhost:10001/bscatalogusbeheer/catalog/activeproducts';  // URL to web API
  public encouragement: string;
  public products = [];

  constructor(private http: Http) {
    // this.getSlogan();
    this.getProducts();
  }

  // getSlogan(){
  //
  //   this.http.get(this.sloganUrl)
  //     .subscribe(
  //       this.extractText.bind(this)
  //     );
  // }

  getProducts(){
    $.ajax
    ({
      type: "GET",
      url: this.productUrl,
      dataType: 'json',
      async: false,
      username: 'kanti',
      password: 'lever',
      success: function (data){
        console.log(data);
      }
    });
  }

  // extractText(res: Response) {
  //   let body = res.text();
  //   this.encouragement = body;
  // }

  extractData(res: Response) {
    let body = res.json();
    return body;
  }
}
