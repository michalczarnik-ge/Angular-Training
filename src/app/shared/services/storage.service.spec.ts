  import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

fdescribe('StorageService', () => {
   let service: StorageService = null;

   beforeEach(() => {
       TestBed.configureTestingModule({});
       service = TestBed.get(StorageService);
   });

   it('should be created', () => {
       expect(service).toBeTruthy();
   });

   describe('create', () => {
       it('should be define', () => {
           expect(service.create).toEqual(jasmine.any(Function));
       });

       it('should work: creating', () => {
           service.create('foo', { foo: 'foo' });
           const data = service.read('foo');
           expect(data).toEqual({ foo: 'foo' });
           service.delete('foo');
       });
   });

   describe('read', () => {
       it('should be define', () => {
           expect(service.read).toEqual(jasmine.any(Function));
       });

       it('should work: reading', () => {
           service.create('foo', { foo: 'foo' });
           expect(service.read('foo')).toEqual({ foo: 'foo' });
           service.delete('foo');
       });

       it('should return null when item not found', () => {
           expect(service.read('NOT_FOUND_ITEM')).toEqual(null);
       });

       it('should return pure value when cannot parse value', () => {
           localStorage.setItem('malformed', '{obj');
           expect(service.read('malformed')).toEqual('{obj');
       });
   });

   describe('update', () => {
       it('should be define', () => {
           expect(service.update).toEqual(jasmine.any(Function));
       });

       it('should work: reading (nothing)', () => {
           const data = service.read('UNKNOWN_VALUE');
           expect(data).toEqual(null);
       });

       it('should work: updating', () => {
           service.create('foo', { foo: 'foo' });
           expect(service.read('foo')).toEqual({ foo: 'foo' });
           service.update('foo', { foo: 'foo2' });
           expect(service.read('foo')).toEqual({ foo: 'foo2' });
           service.delete('foo');
       });
   });

   describe('delete', () => {
       it('should be define', () => {
           expect(service.delete).toEqual(jasmine.any(Function));
       });

       it('should work: deleting', () => {
           service.create('foo', { foo: 'foo' });
           expect(service.read('foo')).toEqual({ foo: 'foo' });
           service.delete('foo');
           expect(service.read('foo')).toEqual(null);
       });
   });

   describe('clear', () => {
       it('should be define', () => {
           expect(service.clear).toEqual(jasmine.any(Function));
       });

       it('should clear all storage', () => {
           service.create('ble', 'ble');
           service.create('ble2', 'ble2');
           service.clear();
           expect(service.read('ble')).toEqual(null);
           expect(service.read('ble2')).toEqual(null);
       });
   });
});