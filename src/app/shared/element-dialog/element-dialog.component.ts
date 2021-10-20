import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyAnimeList } from 'src/app/views/home/home.component';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.scss']
})
export class ElementDialogComponent implements OnInit {
  // "!" serve para não dar erro por falta de tipo
  element!: MyAnimeList;

  constructor(
    // Valor que vai ser "injetado" no Dialog(Modal) será o element
    @Inject(MAT_DIALOG_DATA)
    public data: MyAnimeList,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}

  ngOnInit(): void {
  }

  // Método para cancelar
  onCancel(): void {
    this.dialogRef.close();
  }

}
