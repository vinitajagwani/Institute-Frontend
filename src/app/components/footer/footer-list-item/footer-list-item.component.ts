import { Component, Input } from '@angular/core';
import { FooterIconWrapperComponent } from '../footer-icon-wrapper/footer-icon-wrapper.component';

@Component({
    selector: 'app-footer-list-item',
    standalone: true,
    imports: [FooterIconWrapperComponent],
    templateUrl: './footer-list-item.component.html',
    styleUrl: './footer-list-item.component.scss',
})
export class FooterListItemComponent {
    /**
     * Icon name
     */
    @Input() icon = '';
}
