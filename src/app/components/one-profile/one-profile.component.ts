import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-one-profile',
  imports: [ButtonComponent],
  templateUrl: './one-profile.component.html',
  styleUrls: ['./one-profile.component.scss']
})
export class OneProfileComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() profession!: string;
}