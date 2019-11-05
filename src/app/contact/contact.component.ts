import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit
{

  public titre: string;
  public val_Mail: string;
  public err_Mail: string;
  public isDisabled: boolean;
  public notification_message: string;

  constructor()
  {
    this.titre = 'Contact via mail';
    this.err_Mail = '';
    this.val_Mail = '';
    this.isDisabled = true
    this.notification_message = 'Je vous contacterai dans les plus bref délai sur votre adresse email après réception de votre demande.'
  }

  ngOnInit()
  {
  }

  public verifyMail()
  {
    let mail: string = this.val_Mail;

    if (this.isValidMail(mail))
    {
      this.isDisabled = false;
      this.err_Mail = '';
    } else
    {
      this.isDisabled = true;
      this.err_Mail = 'Adresse email non valide';
    }
  }

  private isValidMail(mail: string): boolean
  {
    const mailTester = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (mail == '' || !mailTester.test(String(mail).toLocaleLowerCase()))
    {
      return false;
    }

    return true;
  }

}
