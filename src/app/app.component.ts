import { Component } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app- interpolation test';
  author = 'Oscar Miticanoy';
  count = 0;
  imgSource = './../favicon.ico'
  enable = false;
}
