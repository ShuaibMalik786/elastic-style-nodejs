import { async, TestBed } from '@angular/core/testing';
import { ViewStyleGuideComponent } from './view-style-guide.component';
describe('ViewStyleGuideComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ViewStyleGuideComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ViewStyleGuideComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=view-style-guide.component.spec.js.map