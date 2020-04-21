import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator, allowedNameValidator } from '../validators/username.validator';
import { PasswordValidator } from '../validators/password.validator';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { AuthUserService } from '../services/auth-user.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @ViewChild('firstProgress', {static: false}) firstProgress: ElementRef;
  @ViewChild('secondProgress', {static: false}) secondProgress: ElementRef;
  @ViewChild('thirdProgress', {static: false}) thirdProgress: ElementRef;

  genders = ['Male', 'Female', 'Other'];
  colleges = [];
  courses = [];
  passingYears = [];
  jobSinceYrs = [];

  successMsg: string = '';
  errorMsg: string = '';

  regisForm1: FormGroup;
  regisForm2: FormGroup;
  regisForm3: FormGroup;


  submitted1: boolean = false;
  submitted2: boolean = false;
  submitted3: boolean = false;

  allFieldsValid1: boolean = false;
  allFieldsValid2: boolean = false;
  allFieldsValid3: boolean = false;

  isFieldValidOne(field: string) {
    return (this.regisForm1.get(field).invalid && this.regisForm1.get(field).touched)
      || (this.regisForm1.get(field).untouched && this.submitted1);
  }

  isFieldValidTwo(field: string) {
    return (this.regisForm2.get(field).invalid && this.regisForm2.get(field).touched)
      || (this.regisForm2.get(field).untouched && this.submitted2);
  }

  isFieldValidThree(field: string) {
    return (this.regisForm3.get(field).invalid && this.regisForm3.get(field).touched)
      || (this.regisForm3.get(field).untouched && this.submitted3);
  }

  getErrorMsgOne(field: string, minlength: number) {
    let result = "";
    let errors = this.regisForm1.get(field).errors;
    let element = this.regisForm1.get(field);
    if (element.touched && errors.required) {
      result += "*" + field + " is required";
    }
    else if (element.touched && errors.email) {
      result = '*email must be in form of abc@abc.com';
    }
    else if (element.touched && errors.forbiddenName) {
      result = "*" + errors.forbiddenName.value + " " + field + " is not allowed";
    }
    else if (element.touched && errors.allowedName) {
      result = "*username first character should be character and must contain only alphanumeric characters afterwards";
    }
    else if (element.touched && errors.minlength) {
      result = "*" + field + " must be at least " + minlength + " characters long";
    }
    else if (element.hasError('isUsernameUnique')) {
      result = "username already used. try another username.";
    }
    else if (element.hasError('isEmailUnique')) {
      result = "email already used. try another email.";
    }
    return result;
  }

  resetOne() {
    if (this.submitted1) {
      this.submitted1 = false;
      // this.regisForm1.markAsPristine();
      // this.regisForm1.markAsUntouched();
      let tempForm = this.regisForm1.value;
      // this.regisForm1.reset();
      this.regisForm1.setValue({
        username: tempForm.username,
        email: tempForm.email,
        password: tempForm.password,
        confirmPassword: tempForm.confirmPassword
      });
    }
  }

  onSubmitOne(form) {
    this.submitted1 = true;
    if (this.regisForm1.valid) {
      
      this.regisForm3.patchValue({
        username: this.regisForm1.value.username,
        email: this.regisForm1.value.email,
        password: this.regisForm1.value.password
      });

      this.allFieldsValid1 = true;
      console.log(this.regisForm1.value);
      this.progress(this.firstProgress, this.secondProgress);
    }
  }

  getErrorMsgTwo(field: string) {
    let result = "";
    let errors = this.regisForm2.get(field).errors;
    let element = this.regisForm2.get(field);
    if (element.touched && errors.required) {
      result += "*" + field + " is required";
    }
    else if (element.touched && errors.allowedName) {
      result = "*the name should contain only alphabets";
    }
    else if (field==="gender" && element.untouched) {
      result = "*select your gender";
    }
    return result;
  }

  resetTwo() {
    if (this.submitted2) {
      this.submitted2 = false;
      this.regisForm2.markAsPristine();
      this.regisForm2.markAsUntouched();
    }
  }

  onSubmitTwo(form) {
    this.submitted2 = true;
    if (this.regisForm2.valid) {

      this.regisForm3.patchValue({
        firstName: this.regisForm2.value.firstName,
        lastName: this.regisForm2.value.lastName,
        gender : this.regisForm2.value.gender
      });

      this.allFieldsValid2 = true;
      console.log(this.regisForm2.value);
      this.progress(this.secondProgress, this.thirdProgress);
    }
  }

  getErrorMsgThree(field: string) {
    let result = "";
    let errors = this.regisForm3.get(field).errors;
    let element = this.regisForm3.get(field);
    if (element.touched && errors.required) {
      result += "*" + field + " is required";
    }
    else if ((field==="course" || field==="college" || field==="passingYear") && element.untouched) {
      result = "*select your gender";
    }
    return result;
  }

  resetThree() {
    if (this.submitted3) {
      this.submitted3 = false;
      this.regisForm3.markAsPristine();
      this.regisForm3.markAsUntouched();
    }
  }

  onSubmitThree(form) {
    this.submitted3 = true;
    if (this.regisForm3.valid) {
      this.allFieldsValid3 = true;
      console.log(this.regisForm3.value);
      this.progress(this.thirdProgress, this.thirdProgress);
      this._authUserService.registerUser(this.regisForm3.value).subscribe(
          res => {
            this.successMsg = "Successfully Registered";
            const expiresAt = moment().add(res.expiresIn, 'second');
            // localStorage.setItem('token', res.idToken);
            // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
            // localStorage.setItem('username', res.username);
            this._router.navigate(['/login']);
          },
          err => {
            this.errorMsg = err.error;
            console.log(this.errorMsg);
          }
        );
    }
  }

  validateUsername(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout((res) => {
        this._authUserService.validateUsername(control.value).subscribe(() => {
          resolve(null);
        }, (err) => { 
          if (err.status===200)
            resolve(null);
          else
            resolve({ 'isUsernameUnique': true }); });
      }, 1000);
    });
    return q;
  }

  validateEmail(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout((res) => {
        this._authUserService.validateEmail(control.value).subscribe(() => {
          resolve(null);
        }, (err) => { 
          if (err.status===200)
            resolve(null);
          else
            resolve({ 'isEmailUnique': true }); });
      }, 1000);
    });
    return q;
  }

  progress(btn1: ElementRef, btn2: ElementRef) {
    btn1.nativeElement.classList.add('progress-done');
    btn2.nativeElement.classList.add('progress-active');
  }

  constructor(private fb: FormBuilder, private _dataService: DataService, private _authUserService: AuthUserService,
    private _router: Router) { }

  ngOnInit() {
    this.regisForm1 = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5), forbiddenNameValidator(/admin|password/),
         allowedNameValidator(/^[a-zA-Z]\w+$/)], this.validateUsername.bind(this)],
      email: [null, [Validators.required, Validators.email], this.validateEmail.bind(this)],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required]
    }, {validators: PasswordValidator});

    this.regisForm2 = this.fb.group({
      firstName: [null, [Validators.required, allowedNameValidator(/^[a-zA-Z]+$/)]],
      lastName: [null, [Validators.required, allowedNameValidator(/^[a-zA-Z]+$/)]],
      gender: ["", Validators.required]
    });

    this.regisForm3 = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(5), forbiddenNameValidator(/admin|password/), allowedNameValidator(/^[a-zA-Z]\w+$/)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      firstName: [null, [Validators.required, allowedNameValidator(/^[a-zA-Z]+$/)]],
      lastName: [null, [Validators.required, allowedNameValidator(/^[a-zA-Z]+$/)]],
      gender: ["", Validators.required],
      course: ["", Validators.required],
      college: ["", Validators.required],
      passingYear: ["", Validators.required],
      job: [""],
      company: [""],
      since: [""],
      profileImg: [""]
    });

    this.colleges = this._dataService.getCollegeList();
    this.courses = this._dataService.getCourseList();
    this.passingYears = this._dataService.getPassingYears();
    this.jobSinceYrs = this._dataService.getJobSince();
  }

}
