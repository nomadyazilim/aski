import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KonumlarPage } from './konumlar.page';

describe('KonumlarPage', () => {
  let component: KonumlarPage;
  let fixture: ComponentFixture<KonumlarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonumlarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KonumlarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
