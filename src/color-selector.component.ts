import {Component, Input} from '@angular/core'
import {anyColor, Color} from '@kolory/color-utilities'

const COMPONENT_NAME = 'color-selector'

@Component({
  selector: COMPONENT_NAME,
  styles: [`button {border: none; padding: 10px;}`],
  template: `<button *ngFor="let color of colors" [style.background-color]="color"></button>`
})

/**
 * TODO
 * @example
 */
export class ColorSelectorComponent {
  @Input()
  colors: (anyColor | Color)[]
}
