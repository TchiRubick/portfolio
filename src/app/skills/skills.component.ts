import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit
{

  public titreSkills: String;
  public list: Object[];

  constructor()
  {
    this.titreSkills = 'Skills'
    this.setList();
    this.organizeList();
  }

  ngOnInit()
  {
  }

  setList()
  {
    this.list = [
      { id: 1, value: 98, titre: 'Codeigniter', style: 'is-codeigniter' },
      { id: 2, value: 80, titre: 'ReactJs', style: 'is-react' },
      { id: 3, value: 88, titre: 'Typescript', style: 'is-typescript' },
      { id: 4, value: 74, titre: 'Angular', style: 'is-angular' },
      { id: 5, value: 70, titre: 'Laravel', style: 'is-laravel' },
      { id: 6, value: 100, titre: 'Jquery', style: 'is-jquery' },
      { id: 7, value: 86, titre: 'Talend Open Studio', style: 'is-talend' },
      { id: 8, value: 75, titre: 'Linux', style: 'is-linux' }
    ];
  }

  organizeList()
  {
    this.list.sort(this.compare);
  }

  compare(a: { value: number; }, b: { value: number; })
  {
    if (a.value < b.value)
    {
      return 1;
    }
    if (a.value > b.value)
    {
      return -1;
    }
    return 0;
  }

}
