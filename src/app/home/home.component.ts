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
import { EmailService } from '../email.service';

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
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    layoutService = inject(LayoutService);
    router = inject(Router);

    isContactUsVisible = false;

    constructor(private emailService: EmailService){

    }
    sendEmail() {
        this.emailService.sendEmail()
      }
}
