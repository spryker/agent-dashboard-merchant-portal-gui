import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AgentUserListComponent } from './agent-user-list.component';

@Component({
    template: `
        <mp-agent-user-list>
            <span title></span>
            <span button-action></span>
        </mp-agent-user-list>
    `,
    standalone: false,
})
class TestHostComponent {}

describe('AgentUserListComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let componentFixture: ComponentFixture<AgentUserListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AgentUserListComponent, TestHostComponent],
            schemas: [NO_ERRORS_SCHEMA],
        });

        fixture = TestBed.createComponent(TestHostComponent);
    });

    it('should render <mp-agent-user-list-table> component', () => {
        fixture.detectChanges();
        const agentUserListTableComponent = fixture.debugElement.query(By.css('mp-agent-user-list-table'));

        expect(agentUserListTableComponent).toBeTruthy();
    });

    it('should render <spy-headline> component', () => {
        fixture.detectChanges();
        const headlineComponent = fixture.debugElement.query(By.css('spy-headline'));

        expect(headlineComponent).toBeTruthy();
    });

    it('should render `title` slot to the <spy-headline> component', () => {
        fixture.detectChanges();
        const titleSlot = fixture.debugElement.query(By.css('spy-headline [title]'));

        expect(titleSlot).toBeTruthy();
    });

    it('should render `button-action` slot to the <spy-headline> component', () => {
        fixture.detectChanges();
        const buttonActionSlot = fixture.debugElement.query(By.css('spy-headline [button-action]'));

        expect(buttonActionSlot).toBeTruthy();
    });

    it('should bound `@Input(tableConfig)` to the `config` input of <mp-agent-user-list-table> component', () => {
        const mockTableConfig = {
            config: 'config',
            data: 'data',
            columns: 'columns',
        };
        componentFixture = TestBed.createComponent(AgentUserListComponent);
        componentFixture.componentRef.setInput('tableConfig', mockTableConfig);
        componentFixture.detectChanges();
        const agentUserListTableComponent = componentFixture.debugElement.query(By.css('mp-agent-user-list-table'));

        expect(agentUserListTableComponent.nativeElement.config).toEqual(mockTableConfig);
    });

    it('should bound `@Input(tableId)` to the `tableId` input of <mp-agent-user-list-table> component', () => {
        const mockTableId = 'mockTableId';
        componentFixture = TestBed.createComponent(AgentUserListComponent);
        componentFixture.componentRef.setInput('tableId', mockTableId);
        componentFixture.detectChanges();
        const agentUserListTableComponent = componentFixture.debugElement.query(By.css('mp-agent-user-list-table'));

        expect(agentUserListTableComponent.nativeElement.tableId).toEqual(mockTableId);
    });
});
