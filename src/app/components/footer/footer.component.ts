import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FooterIconWrapperComponent } from './footer-icon-wrapper/footer-icon-wrapper.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { FooterListItemComponent } from './footer-list-item/footer-list-item.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        FooterIconWrapperComponent,
        ButtonModule,
        PanelModule,
        StyleClassModule,
        FooterListItemComponent,
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {
    layoutService = inject(LayoutService);
    router = inject(Router);
    @Output() openContactUsDialog = new EventEmitter<void>();
}
