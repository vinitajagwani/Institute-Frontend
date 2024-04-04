import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-contact-us-dialog',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        InputMaskModule,
        InputNumberModule,
        InputTextModule,
        InputTextareaModule,
        SidebarModule,
        ReactiveFormsModule,
        ButtonModule,
    ],
    templateUrl: './contact-us-dialog.component.html',
    styleUrl: './contact-us-dialog.component.scss',
})
export class ContactUsDialogComponent {
    private readonly _fb = inject(FormBuilder);

    @Input() isVisible = false;

    @Output() visibleChange = new EventEmitter();

    contactUsForm = this._fb.group({
        fullName: new FormControl('', [Validators.required]),
        contactNo: new FormControl(null, [
            Validators.required,
            this.phoneNumberValidator,
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl(''),
    });

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
        emailjs.init('e5gRhUefYYNsjaqd2');
        emailjs.send('service_h7ixb4t', 'template_7t3mdam', {
            from_name: 'Shivam',
            to_email: this.contactUsForm.value.email,
        });

        this.isVisible = false;
        this.visibleChange.emit(false);
    }

    cancel() {
        this.isVisible = false;
        this.visibleChange.emit(false);
    }
}
