import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./authentication.component.css']
})
export class LoginComponent {
    myForm: FormGroup;

    constructor(public authService: AuthService, fb: FormBuilder ,private router: Router) {
        this.myForm = fb.group({
            name: ["", Validators.required],
            password: ["", Validators.required],
        });
    }

    onSubmit(form: NgForm) {
        this.authService.createUser(this.myForm.value.name, this.myForm.value.password, this.myForm.value.email)
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }
}