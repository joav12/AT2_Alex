import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmeDetalhePageRoutingModule } from './ods-detalhe-routing.module';

import { FilmeDetalhePage } from './ods-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmeDetalhePageRoutingModule
  ],
  declarations: [FilmeDetalhePage]
})
export class FilmeDetalhePageModule {}
