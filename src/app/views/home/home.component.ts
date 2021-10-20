import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';

export interface MyAnimeList {
  position: number;
  name: string;
  episodes: number;
  currentEpisode: number;
}

const OTAKU_DATA: MyAnimeList[] = [
  {position: 1, name: 'Kimetsu no Yaiba', episodes: 26, currentEpisode: 3},
  {position: 2, name: 'Bishoujo Senshi Sailor Moon Crystal', episodes: 26, currentEpisode: 4},
  {position: 3, name: 'Attack on Titans', episodes: 25, currentEpisode: 3},
  {position: 4, name: 'Katekeyo Hitman Reborn', episodes: 203, currentEpisode: 2},
  {position: 5, name: 'xxxHOLIC', episodes: 24, currentEpisode: 1},
  {position: 6, name: 'Shigatsu wa wa kimi No Uso', episodes: 22, currentEpisode: 5},
  {position: 7, name: 'Code Geass', episodes: 25, currentEpisode: 6},
  {position: 8, name: 'Gintama', episodes: 51, currentEpisode: 6},
  {position: 9, name: 'Fruits Basket', episodes: 13, currentEpisode: 7},
  {position: 10, name: 'Hunter x Hunter', episodes: 148, currentEpisode: 4},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // @ViewChild(tipo) -> utilizado para pegar um elemento filho (Um elemento dentro de um elemento)
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'episodes', 'currentEpisode', 'actions'];
  dataSource = OTAKU_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // Validando se o elemento é nulo ele passa um json com o elemento vazio, se não ele passa o próprio elemento
  // O elemento recebe tanto MyAnimeList quanto null
  openDialog(element: MyAnimeList | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
        position: null,
        name: '',
        episodes: null,
        currentEpisode: null
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        this.dataSource.push(result);
        this.table.renderRows();
      }
    });
  }
  }
