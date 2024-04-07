import { Component, inject } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { LandingRoutingModule } from '../demo/components/landing/landing-routing.module';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactUsDialogComponent } from '../components/contact-us-dialog/contact-us-dialog.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        FooterComponent,
        ContactUsDialogComponent,
        ReactiveFormsModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    private readonly _fb = inject(FormBuilder);
    layoutService = inject(LayoutService);
    router = inject(Router);
    contactUsForm = this._fb.group({
        fullName: new FormControl('', [Validators.required]),
        contactNo: new FormControl(null, [
            Validators.required,
            this.phoneNumberValidator,
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl(''),
    });
    isContactUsVisible = false;
    isSendingEmail = false;
    constructor(){

    }
    isInvalid(field: string, validationType: string) {
        return this.contactUsForm.controls[field][validationType];
    }
    phoneNumberValidator(
        control: FormControl
    ): { [key: string]: boolean } | null {
        const phoneNumberPattern = /^\d{10}$/;

        if (control.value && !phoneNumberPattern.test(control.value)) {
            return { invalidPhoneNumber: true };
        }

        return null;
    }

    submit() {
        if (!this.contactUsForm.valid) return;
        this.isSendingEmail = true;
        emailjs.init('e5gRhUefYYNsjaqd2');
        emailjs
            .send('service_h7ixb4t', 'template_7t3mdam', {
                to_email: this.contactUsForm.value.email,
                from_email: this.contactUsForm.value.email,
                from_name: this.contactUsForm.value.fullName,
                from_phone: this.contactUsForm.value.contactNo,
                message: this.contactUsForm.value.message,
            })
            .then(() => {
                this.isSendingEmail = false;
              
            })
            .catch(() => {
                this.isSendingEmail = false;
            });
    }

    
    
}
