import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-testimonial',
  templateUrl: './card-testimonial.component.html',
  styleUrls: ['./card-testimonial.component.scss']
})
export class CardTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  depoimento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mônica Helena'
}
