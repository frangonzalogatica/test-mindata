import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  imports: [CommonModule], 
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  @Input() text!: string;
  @Input() size!: string;
  @Input() color!: string;
  @Input() fontWeight!: string;
  @Input() lineHeight!: string;
  @Input() textAlign!: string;
}
