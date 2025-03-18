import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  @Input() price!: string;
  @Input() previous!: string;
}
