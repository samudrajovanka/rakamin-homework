class Database {
  constructor() {
    if (this === Database) {
      throw new Error('Cannot instance abstract class');
    }
  }

  static getAll() {
    return new Promise((resolve) => {
      const peoplesStringify = localStorage.getItem('peoples');
      const peoples = JSON.parse(peoplesStringify) ?? [];

      resolve(peoples);
    });
  }

  static save(data) {
    return new Promise(async (resolve) => {
      const peoples = await Database.getAll();
      const newPeoples = [
        ...peoples,
        data
      ];

      const newPeoplesStringify = JSON.stringify(newPeoples);

      // demo delay saving data
      setTimeout(() => {
        localStorage.setItem('peoples', newPeoplesStringify)

        resolve();
      }, 2000);
    })

  }
}
