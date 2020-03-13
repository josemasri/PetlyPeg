import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  imagenes = [];
  page = 0;

  constructor(
    private galeriaService: GaleriaService
  ) { }

  ngOnInit(): void {
    this.galeriaService.getGaleria(this.page)
    .pipe()
    .subscribe((res: any) => {
      this.imagenes = res.results;
    });
  }

}
