import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextComponent } from './components/text/text.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TextComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
      HeaderComponent,
      FooterComponent,
      TextComponent
    ],
  })
export class SharedModule { }
