import { Component } from '@angular/core';

@Component({
    selector: 'app-ui-home-banner',
    template: `
        <div class="banner">
            <div class="container">
                <h1 class="logo-font">Angular 16</h1>
                <p>A place to share your knowledge.</p>
            </div>
        </div>
    `,
    standalone: true,
})
export class UiHomeBanner {}
