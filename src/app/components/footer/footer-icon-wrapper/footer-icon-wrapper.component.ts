import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-footer-icon-wrapper',
    standalone: true,
    imports: [],
    templateUrl: './footer-icon-wrapper.component.html',
    styleUrl: './footer-icon-wrapper.component.scss',
})
export class FooterIconWrapperComponent {
    /**
     * Icon name
     */
    @Input() icon = '';
}
