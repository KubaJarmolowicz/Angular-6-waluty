import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
interface Currency {
  code: string;
  value: number;
}

@Component({
  selector: "my-currency-list",
  templateUrl: "./currency-list.component.html"
})
@Injectable()
export class CurrencyListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  private API_URL = "https://api.exchangeratesapi.io/latest?base=PLN";

  currencies: Currency[] = [];

  dupa;

  ngOnInit() {
    this.http.get(this.API_URL).subscribe(data => {
      this.currencies = Object.entries(data.rates).map(
        (entry): Currency => {
          return { code: entry[0], value: parseFloat(entry[1]) };
        }
      );
    });
  }
}
