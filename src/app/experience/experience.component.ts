import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit
{

  public titre: String;
  public experience: Object[];

  constructor()
  {
    this.titre = 'Experience';
    this.mockExp();
  }

  ngOnInit()
  {
  }

  mockExp()
  {
    this.experience = [
      { societe: 'Service de développement Manao', poste: 'Développeur GlobalPos', debut: '03 Avril', fin: 'ce jour', details: 'Projet Easy2Play, service d\'encaissement', badges: ['Codeigniter', 'jquery', 'Mysql', 'TOS', 'CentOS 7', 'Redis'], ended: 'is-warning', isEnded: true },
      { societe: 'Service de développement Manao', poste: 'Développeur Interne', debut: '03 Janvier', fin: 'Mars', details: 'Logiciel de comptabilité', badges: ['Codeigniter', 'jquery', 'Mysql'], ended: 'is-danger', isEnded: true },
      { societe: 'Particulier', poste: 'Développeur freelance', debut: '2017', fin: '2017', details: 'Interface  de gestion d\'un restaurant', badges: ['Lumen', 'AngularJs', 'Mysql'], ended: 'is-danger', isEnded: false },
      { societe: 'Gemstones-store Madagascar', poste: 'Développeur freelance', debut: '2017', fin: '2017', details: 'Site vitrine d\'exposition de pierre précieuse', badges: ['Laravel', 'jquery', 'Mysql'], ended: 'is-danger', isEnded: false },
      { societe: 'Particulier', poste: 'Développeur freelance', debut: '2016', fin: '2016', details: 'Géstionnaire de stock', badges: ['Codeigniter', 'jquery', 'Mysql'], ended: 'is-danger', isEnded: false },
    ];
  }

}
