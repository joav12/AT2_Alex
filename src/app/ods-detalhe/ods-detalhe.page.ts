import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './ods-detalhe.page.html',
  styleUrls: ['./ods-detalhe.page.scss'],
})
export class FilmeDetalhePage implements OnInit {
 obj: any;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.obj = getNav.extras.state.paramOBJ;
      }
    });
  }

}
