import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovimentacoesClientePage } from './movimentacoes-cliente.page';

describe('MovimentacoesClientePage', () => {
  let component: MovimentacoesClientePage;
  let fixture: ComponentFixture<MovimentacoesClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimentacoesClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovimentacoesClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
