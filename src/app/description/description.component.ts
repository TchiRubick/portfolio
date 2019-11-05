import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit
{

  public description: string;
  public utilisateur: string;
  public post: string;
  public pic: string;
  public pseudo: string;
  public visibility: string;
  public number: string;
  public link_fb: string;
  public link_lnkin: string;

  constructor()
  {
    this.description = 'Jeune développeur Web autodidacte de Madagascar, passionné par le web et l\'informatique depuis mon plus jeune ages. \n ' +
      'Spécialiste en CodeIgniter sur Php, mais maîtrise aussi Javascript et typescript ainsi que ReactJs et Angular 8 au niveau du front.';

    this.utilisateur = 'N. Ritchi ANDRIANTSIFEHERANA';

    this.post = 'Développeur GlobalPos - Service de développement MANAO';

    this.pic = '../assets/img/profil.jpg';

    this.pseudo = 'TchiRubick';

    this.visibility = 'invisible';

    this.number = '+261 34 90 535 40';

    this.link_fb = 'https://www.facebook.com/TchiRubick';

    this.link_lnkin = 'https://www.linkedin.com/in/ritchi-andriantsifeherana-ba3568181';
  }

  ngOnInit()
  {
  }

  isIn()
  {
    this.visibility = '';
  }

  isOut()
  {
    this.visibility = 'invisible';
  }

}
