import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MerekPage } from './merek.page';

describe('MerekPage', () => {
  let component: MerekPage;
  let fixture: ComponentFixture<MerekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MerekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
