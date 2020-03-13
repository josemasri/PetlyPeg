import { Component, OnInit, Input, Inject } from '@angular/core';
import {Noticia} from '../../interfaces/Noticia';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Noticia;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  openDialog() {
    this.dialog.open(NoticiaDialog, {
      data: {noticia: this.noticia}
    });
  }

}


@Component({
  selector: 'noticia-dialog',
  templateUrl: 'noticia-dialog.html',
})
export class NoticiaDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
}
