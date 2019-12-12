import { async, TestBed } from '@angular/core/testing';
import { AddJumbotronComponent } from './add-jumbotron.component';
describe('AddJumbotronComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddJumbotronComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddJumbotronComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-jumbotron.component.spec.js.map