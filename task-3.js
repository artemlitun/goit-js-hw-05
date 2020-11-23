class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items = [...items, item];
    }
    removeItem(item) {

        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(items))
            return this.items;
        };
    }
}
  const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
  
  console.table(items); 
  
  storage.addItem('Дроид');
  console.table(storage.items); 
  
  storage.removeItem('Пролонгер');
  console.table(storage.items);