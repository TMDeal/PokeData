import { Component, OnInit } from '@angular/core';

import { MoveService } from '../shared/services/move.service';
import { ResourceList } from '../shared/interfaces/pokeapi/common';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss'],
  providers: [MoveService]
})
export class MovesComponent implements OnInit {
  private moves: ResourceList;

  constructor(private moveService: MoveService) { }

  ngOnInit() {
    this.moveService.getMoves()
      .subscribe(moves => this.moves = moves);
  }
}
