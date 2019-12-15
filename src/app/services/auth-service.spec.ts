import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth-service.';
import { StorageService } from './local-storage.service';

describe('AuthService', () => {
  let authService: AuthService;
  let storageService = {
    getLocStorage: () => 'bob',
    setTokenToLocStorage: () => {},
    cleanLocStorage: () => {},
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: StorageService, useValue: storageService },
      ],
    });
    authService = TestBed.get(AuthService);
    storageService = TestBed.get(StorageService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  describe('when getUserInfo is called', () => {
    it('should return user info', () => {
      expect(authService.getUserInfo('bob')).toBeTruthy();
    });
    it('should not return user info', () => {
      expect(authService.getUserInfo('test')).toBeFalsy();
    });
  });

  describe('when isAuthenticated is called', () => {
    beforeEach(() => {
      storageService.cleanLocStorage();
      authService.auth = false;
    });
    it('should return true auth flag', () => {
      authService.auth = true;
      expect(authService.isAuthenticated()).toBeTruthy();
    });
    it('should return true auth flag with token', () => {
      storageService.setTokenToLocStorage();
      expect(authService.isAuthenticated()).toBeTruthy();
    });
  });

  describe('when login is called', () => {
    beforeEach(() => {
      storageService.cleanLocStorage();
      authService.auth = false;
    });
    it('should changes auth flag with registred name', () => {
      authService.login('bob');
      expect(authService.auth).toBeTruthy();
    });
    it('should not changes auth flag with not registred name', () => {
      authService.login('ivan');
      expect(authService.auth).toBeFalsy();
    });
  });

  describe('when logout is called', () => {
    beforeEach(() => {
      storageService.cleanLocStorage();
      authService.auth = true;
    });
    it('should changes auth flag', () => {
      authService.logout();
      expect(authService.auth).toBeFalsy();
    });
    it('should not changes auth flag', () => {
      authService.logout();
      expect(authService.auth).toBeFalsy();
    });
  });
});
