import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PostagemComponent } from './postagem/postagem.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [

  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'postagem', component: PostagemComponent},

  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



