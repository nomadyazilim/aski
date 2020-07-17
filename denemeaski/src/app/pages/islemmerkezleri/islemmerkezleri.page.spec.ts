import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IslemmerkezleriPage } from './islemmerkezleri.page';

describe('IslemmerkezleriPage', () => {
  let component: IslemmerkezleriPage;
  let fixture: ComponentFixture<IslemmerkezleriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslemmerkezleriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IslemmerkezleriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
