import {NgModule} from '@angular/core'
import {ColorSelectorComponent} from './color-selector.component'
import {ColorUtilities} from '@kolory/color-utilities'
import {BrowserModule} from '@angular/platform-browser'

@NgModule({
  imports: [BrowserModule],
  providers: [ColorUtilities],
  declarations: [ColorSelectorComponent],
  exports: [ColorSelectorComponent]
})
export class ColorSelectorModule {}
