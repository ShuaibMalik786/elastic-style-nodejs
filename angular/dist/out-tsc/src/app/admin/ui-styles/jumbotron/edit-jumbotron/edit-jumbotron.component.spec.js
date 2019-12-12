import { async, TestBed } from '@angular/core/testing';
import { EditJumbotronComponent } from './edit-jumbotron.component';
describe('EditJumbotronComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditJumbotronComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditJumbotronComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-jumbotron.component.spec.js.map