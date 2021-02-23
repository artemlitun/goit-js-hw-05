class Storage {
  constructor(arr) {
    this.items = arr;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items.includes(item)
      ? this.items.splice(this.items.indexOf(item), 1)
      : "";
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();

console.table(items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
storage.removeItem("Железные жупи");

console.table(storage.items);
