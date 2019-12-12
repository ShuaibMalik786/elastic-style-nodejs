import { async, TestBed } from '@angular/core/testing';
import { AddStyleGuideComponent } from './add-style-guide.component';
describe('AddStyleGuideComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddStyleGuideComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddStyleGuideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-style-guide.component.spec.js.map