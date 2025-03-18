import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OneProfileComponent } from './components/one-profile/one-profile.component';
import { TitleComponent } from './components/title/title.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, ProfileComponent, TitleComponent, DescriptionComponent, OneProfileComponent, ProductComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-mindata';
}