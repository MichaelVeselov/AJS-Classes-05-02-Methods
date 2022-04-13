import Bowman from '../bowman.js';
import Swordsman from '../swordsman.js';
import Magician from '../magician.js';
import Daemon from '../daemon.js';
import Undead from '../undead.js';
import Zombie from '../zombie.js';

describe('should create different objects depending on object type', () => {
  test('should create on object Bowman', () => {
    const result = new Bowman('Testname');
    const expected = {
      name: 'Testname',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(result).toEqual(expected);
  });

  test('should create on object Swordsman', () => {
    const result = new Swordsman('Testname');
    const expected = {
      name: 'Testname',
      type: 'Swordsman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(result).toEqual(expected);
  });

  test('should create on object Magician', () => {
    const result = new Magician('Testname');
    const expected = {
      name: 'Testname',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(result).toEqual(expected);
  });

  test('should create on object Daemon', () => {
    const result = new Daemon('Testname');
    const expected = {
      name: 'Testname',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    };
    expect(result).toEqual(expected);
  });

  test('should create on object Undead', () => {
    const result = new Undead('Testname');
    const expected = {
      name: 'Testname',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };
    expect(result).toEqual(expected);
  });

  test('should create on object Zombie', () => {
    const result = new Zombie('Testname');
    const expected = {
      name: 'Testname',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    };
    expect(result).toEqual(expected);
  });
});
