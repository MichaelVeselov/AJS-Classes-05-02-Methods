export default class Character {
  constructor(name, type) {
    const heroTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if ((typeof name !== 'string') || (name.length < 2 || name.length > 10)) {
      throw new Error('Ошибка! Имя должно быть строкой длиной от 2 до 10 символов включительно!');
    } else {
      this.name = name;
    }

    if (!heroTypes.includes(type)) {
      throw new Error('Ошибка! Такого героя не существует!');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Ошибка! Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      return;
    }
    this.health = 0;
  }
}
