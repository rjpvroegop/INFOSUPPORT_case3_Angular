import {Component, OnInit} from "@angular/core";
import {ShoppingcartService} from "../../services/shoppingcart.service";
import {LoginService} from "../../services/login.service";

@Component({
  moduleId: module.id,
  selector: 'header-navigation',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private shoppingcartService: ShoppingcartService, private loginService : LoginService) {
  }
}
