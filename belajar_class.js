// class Studentpplg{
//     constructor(name, className){
//         this.name = name;
//         this.className = className;
//     }
//     introduction(){
//         console.log("Hello, my name is " + this.name);
//         console.log("I am a student of class " + this.className);
//     }
//     uniform(){
//         console.log("wearing a white shirt and black pants with a navy hoodie");
//     }
// }
// const student3 = new Studentpplg("Alvin", "XI PPLG");
// student3.introduction();
// const student1 = new Studentpplg("John", "XI PPLG");
// student1.introduction();
// const student2 = new Studentpplg();
// student2.uniform();

class produk{
    constructor(nama, harga, jumlah){
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }

    tampilkanInfo(){
        console.log("Nama produk : " + this.nama);
        console.log("Harga produk : Rp. " + this.harga);
        console.log("Jumlah : " + this.jumlah);
    }

    Hitungdiskon(persen){
        return this.harga * (persen / 100);
    }
}
const produk1 = new produk("Buku", 50000, 10);
produk1.tampilkanInfo();
console.log("Diskon : Rp. " + `${produk1.Hitungdiskon(10)}`);
const monitor = new produk("Monitor", 2000000, 5);
monitor.tampilkanInfo();
console.log("Diskon : Rp. " + `${monitor.Hitungdiskon(15)}`);
const mouse = new produk("Mouse", 150000, 20);
mouse.tampilkanInfo();
console.log("Diskon : Rp. " + `${mouse.Hitungdiskon(5)}`);