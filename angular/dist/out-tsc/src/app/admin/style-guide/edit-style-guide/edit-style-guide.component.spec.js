import { async, TestBed } from '@angular/core/testing';
import { EditStyleGuideComponent } from './edit-style-guide.component';
describe('EditStyleGuideComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditStyleGuideComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditStyleGuideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-style-guide.component.spec.js.map