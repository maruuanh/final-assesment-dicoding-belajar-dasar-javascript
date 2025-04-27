/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  items = [];

  addItem(newItem){
    this.items.push(newItem);
  }

  removeItem(id){
    const selectedId = this.items.findIndex((item) => item.id == id);
    this.items.splice(selectedId, 1);
  }

  listItems() {
    return this.items.map((item) => item.displayDetails());
  }

}

// Jangan hapus kode di bawah ini!
export default Inventory;
