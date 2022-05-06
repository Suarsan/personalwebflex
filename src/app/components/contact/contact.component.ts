import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

declare const Email;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailPlaceholder: string;
  namePlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  status: string;
  button_message: string;
  contactForm = new FormGroup({
    email: new FormControl('', Validators.email),
    name: new FormControl(''),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor() {
    this.emailPlaceholder = 'contact.your email';
    this.namePlaceholder = 'contact.your name';
    this.subjectPlaceholder = 'contact.subject';
    this.messagePlaceholder = 'contact.text your message';
  }

  ngOnInit() {
    this.status = 'send';
  }

  public mail() {
    if (this.contactForm.valid) {
      if (this.status === 'send') {
        this.status = 'sending';
        this.sendEmail().subscribe(
          (res) => {
            this.status = 'sended';
          },
          (error) => {
            this.status = 'something occurs';
          }
        );
      }
    }
  }

  public retry() {
    this.status = 'send';
    this.contactForm.patchValue({
      email: '',
      name: '',
      subject: '',
      message: ''
    });
  }

  public getStatusText() {
    switch (this.status) {
      case 'send':
        return 'contact.send';
      case 'sending':
        return 'contact.sending';
      case 'sended':
        return 'contact.sended';
      default:
        return 'contact.send';
    }
  }

  public sendEmail() {
    return new Observable(
      (observable) => {
        Email.send({
          Host: '',
          From: '',
          To: 'javiersuarsan@gmail.com',
          Username: '',
          Password: '',
          Subject: 'CONTACT EMAIL RECEIVED - ' + this.contactForm.get('subject').value,
          Body: this.contactForm.get('message').value
                + '<br/><br/>' +
                this.contactForm.get('name').value + ' - ' + this.contactForm.get('email').value
        }).then(
          (message) => {
            observable.next();
          }
        );
      }
    );
  }

}
