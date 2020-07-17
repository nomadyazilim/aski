import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-faturasorgula',
  templateUrl: './faturasorgula.page.html',
  styleUrls: ['./faturasorgula.page.scss'],
})
export class FaturasorgulaPage implements OnInit {
  user : any = {};
  users =[];
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
 
  BorcGetir()
  {
    console.log("gidecek data");
    console.log(this.user);
    this.http.post( "http://mobil2.aski.gov.tr/service/fatura_sorgula",
    this.user,
    {headers: new HttpHeaders({"content-Type":"application/json"})})
    .subscribe((data : any) =>{
      console.log("gelen data");
      console.log(data);
    this.users=data.Result;
    }); 
  }
}
