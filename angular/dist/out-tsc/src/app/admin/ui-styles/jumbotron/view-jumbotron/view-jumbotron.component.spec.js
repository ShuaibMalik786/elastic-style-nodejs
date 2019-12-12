import { async, TestBed } from '@angular/core/testing';
import { ViewJumbotronComponent } from './view-jumbotron.component';
describe('ViewJumbotronComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ViewJumbotronComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ViewJumbotronComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-jumbotron.component.spec.js.map