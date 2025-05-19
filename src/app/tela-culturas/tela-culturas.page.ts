import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-culturas',
  templateUrl: './tela-culturas.page.html',
  styleUrls: ['./tela-culturas.page.scss'],
  standalone: false,
})
export class TelaCulturasPage implements OnInit {
  media: any;

  CULTURAS = [
    { nome: 'Morangos', min: 15, max: 25 },
    { nome: 'Uvas', min: 20, max: 30 },
    { nome: 'Laranjas', min: 15, max: 30 },
    { nome: 'Maçãs', min: 10, max: 20 },
    { nome: 'Café', min: 18, max: 24 },
    { nome: 'Trigo', min: 5, max: 25 },
    { nome: 'Milho', min: 18, max: 27 },
    { nome: 'Arroz', min: 20, max: 30 },
    { nome: 'Batata', min: 10, max: 24 },
    { nome: 'Cana-de-açúcar', min: 20, max: 35 },
  ];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.media = this.activatedRoute.snapshot.paramMap.get('media');
    const resultadoDiv = document.getElementById('resultado');
    if (!resultadoDiv) return;

    resultadoDiv.innerHTML = '';
    let encontrou = false;

    for (let cultura of this.CULTURAS) {
      if (this.media >= cultura.min && this.media <= cultura.max) {
        const item = document.createElement('p');
        item.className = 'cultura-item';
        item.textContent = cultura.nome;
        resultadoDiv.appendChild(item);
        encontrou = true;

      }
    }

    if (!encontrou) {
      const item = document.createElement('p');
      item.textContent = 'Não há cultura para essa média...';
      resultadoDiv.appendChild(item);

    }
  }

  voltar() {
    this.router.navigateByUrl(`/`);
  }
}
