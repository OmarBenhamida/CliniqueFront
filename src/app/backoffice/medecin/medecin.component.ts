import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css','assets/bootstrap/css/bootstrap.min.css','assets/fonts/fontawesome-all.min.css','assets/fonts/font-awesome.min.css',
'assets/fonts/fontawesome5-overrides.min.css','assets/css/Bootstrap-Calendar.css']
})
export class MedecinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    // script.type = 'text/javascript';

    script.src = 'assets/js/theme.js';
    head.appendChild(script);


  }

}
