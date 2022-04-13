import Character from '../character.js';
import Daemon from '../daemon.js';

describe('should create an object Character or throw the error', () => {
  test('should create an object Character with the type Daemon', () => {
    const result = new Character('Testname', 'Daemon');
    const expected = {
      name: 'Testname',
      type: 'Daemon',
      health: 100,
      level: 1,
    };
    expect(result).toEqual(expected);
  });

  test('should throw error if the name of the object is not a string', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character(22, 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the name of the object is longer than 10 characters', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character('TestnameTestname', 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the name of the object is less than 2 characters', () => {
    const expected = 'Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!';
    expect(() => new Character('T', 'Daemon')).toThrowError(expected);
  });

  test('should throw error if the hero type is wrong', () => {
    const expected = 'Ошибка! Такого героя не существует!';
    expect(() => new Character('Testname', 'Daemon2')).toThrowError(expected);
  });
});

describe('should extend an onject character with methods levelUp and damage', () => {
  test('should check levelUp with Daemon', () => {
    const result = new Daemon('Testname');
    const expected = {
      name: 'Testname',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    };
    result.levelUp();
    expect(result).toEqual(expected);
  });

  test('should throw error if the health is equal 0', () => {
    const result = new Daemon('Testname');
    const expected = 'Ошибка! Нельзя повысить левел умершего!';
    result.health = 0;
    expect(() => result.levelUp()).toThrowError(expected);
  });

  test('should damage to health if health is bigger than 0', () => {
    const result = new Daemon('Testname');
    const expected = 94;
    result.damage(10);
    expect(result.health).toBe(expected);
  });

  test('should set health to 0 if health is less than 0', () => {
    const result = new Daemon('Testname');
    const expected = 0;
    result.health = -1;
    result.damage(10);
    expect(result.health).toBe(expected);
  });
});
