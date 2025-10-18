import { PrincipalComponent } from './../../pages/principal/principal.component';
import { Routes } from '@angular/router';
import { CadastrarComponent } from '../../component/cadastrar/cadastrar.component';
import { ConsultarComponent } from '../../component/consultar/consultar.component';
import { ExcluirComponent } from '../../component/excluir/excluir.component';
import { ListarComponent } from '../../component/listar/listar.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent, title: 'Farmácia' },
  { path: 'cadastrar', component: CadastrarComponent, title: 'Cadastrar' },
  { path: 'consultar', component: ConsultarComponent, title: 'Consultar' },
  { path: 'excluir', component: ExcluirComponent, title: 'Excluir' },
  { path: 'listar', component: ListarComponent, title: 'Listar' },
  { path: '**', redirectTo: '' }]