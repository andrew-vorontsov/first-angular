import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service.';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when getUserInfo is called', () => {
    it('should getUserInfo return user info', () => {
      expect(service.getUserInfo('bob')).toBeTruthy();
    });
    it('should not getUserInfo return user info', () => {
      expect(service.getUserInfo('test')).toBeFalsy();
    });
  });

  describe('when isAuthenticated is called', () => {
    beforeEach(() => {
      localStorage.clear();
      service.auth = false;
    });
    it('should isAuthenticated return auth flag', () => {
      service.auth = true;
      expect(service.isAuthenticated()).toBeTruthy();
    });
    it('should not isAuthenticated return auth flag', () => {
      expect(service.isAuthenticated()).toBeFalsy();
    });
    it('should isAuthenticated return auth flag with token', () => {
      localStorage.setItem('token', '123');
      expect(service.isAuthenticated()).toBeTruthy();
    });
    it('should not isAuthenticated return auth flag with empty token', () => {
      localStorage.setItem('token', '');
      expect(service.isAuthenticated()).toBeFalsy();
    });
  });

  describe('when login is called', () => {
    beforeEach(() => {
      localStorage.clear();
      service.auth = false;
    });
    it('should login changes auth flag with registred name', () => {
      service.login('bob');
      expect(service.auth).toBeTruthy();
    });
    it('should not login changes auth flag with not registred name', () => {
      service.login('ivan');
      expect(service.auth).toBeFalsy();
    });
  });

  describe('when logout is called', () => {
    beforeEach(() => {
      localStorage.clear();
      service.auth = true;
    });
    it('should logout changes auth flag', () => {
      service.logout();
      expect(service.auth).toBeFalsy();
    });
    it('should logout not changes auth flag', () => {
      service.auth = false;
      service.logout();
      expect(service.auth).toBeFalsy();
    });
  });
});
