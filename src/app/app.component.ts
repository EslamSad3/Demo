import { Component } from '@angular/core';
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter  } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';
  faCoffee  = faCoffee ;
  faTwitter = faTwitter;
}
