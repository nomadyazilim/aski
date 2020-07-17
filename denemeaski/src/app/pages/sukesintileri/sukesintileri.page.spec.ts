import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SukesintileriPage } from './sukesintileri.page';

describe('SukesintileriPage', () => {
  let component: SukesintileriPage;
  let fixture: ComponentFixture<SukesintileriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukesintileriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SukesintileriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
