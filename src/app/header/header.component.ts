import { Component, Input, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() brand = 'App';
  isCollapsed = true;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    const mql: MediaQueryList = window.matchMedia('(min-width: 992px)');
    mql.addListener((mq: MediaQueryList) => {
      this.zone.run(() => {
        this.close();
      });
    });
  }

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }

  close() {
    this.isCollapsed = true;
  }
}
