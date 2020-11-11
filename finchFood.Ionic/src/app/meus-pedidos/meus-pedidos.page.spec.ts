import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeusPedidosPage } from './meus-pedidos.page';

describe('MeusPedidosPage', () => {
  let component: MeusPedidosPage;
  let fixture: ComponentFixture<MeusPedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusPedidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeusPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
