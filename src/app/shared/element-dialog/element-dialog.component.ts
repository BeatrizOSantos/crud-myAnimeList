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
  isChange!: boolean;

  constructor(
    // Valor que vai ser "injetado" no Dialog(Modal) será o element
    @Inject(MAT_DIALOG_DATA)
    public data: MyAnimeList,
    public dialogRef: MatDialogRef<ElementDialogComponent>,
  ) {}

  ngOnInit(): void {
    // Se a posição do elemento em data for diferente de nulo a variável vai receber nulo ; Se repararmos no home.component.ts quando o elemento é nulo um elemento é passado com o valor nulo então não é possível verificar se o elemento é nulo já que ele teria valor de um json default
    if (this.data.position != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  // Método para cancelar
  onCancel(): void {
    this.dialogRef.close();
  }

}
