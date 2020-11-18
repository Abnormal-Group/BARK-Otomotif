import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TipePage } from './tipe.page';

describe('TipePage', () => {
  let component: TipePage;
  let fixture: ComponentFixture<TipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
