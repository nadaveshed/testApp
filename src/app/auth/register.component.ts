import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./authentication.component.css']

})
export class RegisterComponent implements OnInit {
    myForm: FormGroup;
    
    constructor(public authService: AuthService, fb: FormBuilder ,private router: Router) {
        this.myForm = fb.group({
            name: ["", Validators.required],
            password: ["", Validators.required],
            email: ["", Validators.required]
        });
    }

    onSubmit() {
        this.authService.createUser(this.myForm.value.name, this.myForm.value.password, this.myForm.value.email)
        this.myForm.reset();
        this.router.navigate(['/login']);
    }

    ngOnInit() {
    }
}