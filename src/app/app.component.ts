import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') signupForm: NgForm;
answer = '';
defaultAnswer = 'pet';
genders = ['male', 'female'];
user = {
  username: '',
  email: '',
  secretQuestion: '',
  answer: '',
  gender: ''
};
submitted = false;
suggestUserName() {
  const sugestedName = 'Superuser';
  // this.signupForm.setValue({
  //   userData: {
  //     username: sugestedName,
  //     email: ''
  //   },
  //   secret: 'pet',
  //   questionAnswer : '',
  //   gender: 'male'
  // });

  this.signupForm.form.patchValue({
    userData: {
          username: sugestedName,
        }
  });
}

// onSubmit(form: NgForm) {
// console.log(form);
// }
onSubmit() {
  this.submitted = true;
  this.user.username = this.signupForm.value.userData.username;
  this.user.email = this.signupForm.value.userData.email;
  this.user.secretQuestion = this.signupForm.value.secret;
  this.user.answer = this.signupForm.value.questionAnswer;
  this.user.gender = this.signupForm.value.gender;

  this.signupForm.reset();
}
}
