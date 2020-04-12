import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinhasVendasPage } from './minhas-vendas.page';

describe('MinhasVendasPage', () => {
  let component: MinhasVendasPage;
  let fixture: ComponentFixture<MinhasVendasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasVendasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinhasVendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
