import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponentComponent } from "./pages/footer-component/footer-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterLink, FooterComponentComponent]
})
export class AppComponent {
  title = 'landingPageAngular17';
  menuOption:string = '';

  onOption(menuOption: string){
    menuOption= menuOption;
  }
}
