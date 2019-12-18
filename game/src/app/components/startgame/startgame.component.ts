import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MemorytestComponent } from '../memorytest/memorytest.component';
@Component({
  selector: 'app-startgame',
  templateUrl: './startgame.component.html',
  styleUrls: ['./startgame.component.scss']
})
export class StartgameComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  openRepDialog = (): void => {
    const dialogRef = this._dialog.open(MemorytestComponent, {
        width: '500px',
        height: '510px',
        data: {}
    });

    dialogRef.afterClosed().subscribe( result => {
          console.log(`Modal closed`);
        })
  }
}
