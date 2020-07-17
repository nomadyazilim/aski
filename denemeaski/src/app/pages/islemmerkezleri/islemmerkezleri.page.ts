import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServisService} from '../../servis.service';
@Component({
  selector: 'app-islemmerkezleri',
  templateUrl: './islemmerkezleri.page.html',
  styleUrls: ['./islemmerkezleri.page.scss'],
})
export class IslemmerkezleriPage implements OnInit {

  constructor(  private router: Router,
                private servis : ServisService             
    ) { }

  ngOnInit() {
  }
  suMatikler()
  {
    this.servis.setNavData(1);
    this.router.navigate(['/konumlar']);
  }
  bolgeMudurlukleri()
  {  this.servis.setNavData(2);
    this.router.navigate(['/konumlar']);
  }
  tahsilatSubeleri()
  {  this.servis.setNavData(6);
    this.router.navigate(['/konumlar']);
  }
}
