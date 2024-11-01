import { Component, Input, OnInit } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';
import { EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() users: ParentUser[] = [];
  @Output() childUsers = new EventEmitter<ChildUser[]>();

  usersFromChild: ChildUser[] = [
    { id: 1, firstname: 'first', lastname: 'first', dateOfBirth: new Date(1998, 2, 12), phoneNumber: '123456789', email: 'alice@example.com' },
    { id: 2, firstname: 'second', lastname: 'second', dateOfBirth: new Date(1985, 4, 25), phoneNumber: '987654321', email: 'bob@example.com' }
  ];

  emitUsers() {
    this.childUsers.emit(this.usersFromChild);
  }
}

  submitForm() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
    }
  }
  constructor(private displayService: DisplayService) {}

  displayUsers(): void {
    this.displayService.displayArray(this.users);
  }

userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.minLength(8)]]
    });

}
