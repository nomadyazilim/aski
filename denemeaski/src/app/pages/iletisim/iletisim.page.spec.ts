import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IletisimPage } from './iletisim.page';

describe('IletisimPage', () => {
  let component: IletisimPage;
  let fixture: ComponentFixture<IletisimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IletisimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IletisimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
