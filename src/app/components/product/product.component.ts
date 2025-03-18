import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { DescriptionComponent } from '../description/description.component';
import { ButtonComponent } from '../button/button.component';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-product',
  imports: [TitleComponent, DescriptionComponent, ButtonComponent, PriceComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

}
