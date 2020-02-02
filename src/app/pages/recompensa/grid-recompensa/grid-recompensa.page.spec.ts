import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GridRecompensaPage } from './grid-recompensa.page';

describe('GridRecompensaPage', () => {
  let component: GridRecompensaPage;
  let fixture: ComponentFixture<GridRecompensaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridRecompensaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GridRecompensaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
