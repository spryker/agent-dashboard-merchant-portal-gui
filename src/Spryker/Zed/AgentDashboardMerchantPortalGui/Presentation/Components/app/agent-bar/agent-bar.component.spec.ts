import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AgentBarComponent } from './agent-bar.component';

@Component({
    template: `
        <mp-agent-bar>
            <span class="default-slot"></span>
            <span actions></span>
        </mp-agent-bar>
    `,
    standalone: false,
})
class TestHostComponent {}

describe('AgentBarComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AgentBarComponent, TestHostComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(TestHostComponent);
    });

    it('should render <mp-agent-bar> component', () => {
        fixture.detectChanges();
        const agentBarComponent = fixture.debugElement.query(By.css('mp-agent-bar'));

        expect(agentBarComponent).toBeTruthy();
    });

    it('should render `default` slot to the `.mp-agent-bar__content` element', () => {
        fixture.detectChanges();
        const defaultSlot = fixture.debugElement.query(By.css('.mp-agent-bar__content .default-slot'));

        expect(defaultSlot).toBeTruthy();
    });

    it('should render `actions` slot to the `.mp-agent-bar__actions` element', () => {
        fixture.detectChanges();
        const actionsSlot = fixture.debugElement.query(By.css('.mp-agent-bar__actions [actions]'));

        expect(actionsSlot).toBeTruthy();
    });
});
