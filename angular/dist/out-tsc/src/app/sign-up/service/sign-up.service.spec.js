import { TestBed } from '@angular/core/testing';
import { SignUpService } from './sign-up.service';
describe('SignUpService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SignUpService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=sign-up.service.spec.js.map