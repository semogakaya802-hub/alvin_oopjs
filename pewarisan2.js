//buat class parent

class PPLG{

    constructor(nama, umur,){
        this.nama = nama;
        this.umur = umur;
    }

    perkenalan(){
        console.log(`Halo, nama saya ${this.nama} dan saya berumur ${this.umur} tahun.`);
        console.log(`Saya adalah ` + this.umur);
    }
}
//buat class child
class Siswa extends PPLG{
    constructor(nama, umur, kelas){
        super(nama, umur);
        this.kelas = kelas;
    }

    belajar(){
        console.log(`Saya ${this.nama} sedang belajar di kelas ${this.kelas}.`);
    }
}

//buat objek baru
const siswa1 = new Siswa("Alvin", 16, "XI PPLG");
//Memanggil method yang diwariskan
siswa1.perkenalan();
//memanggil method milik class siswa
siswa1.belajar();
//menampilkan properti class
console.log(`Nama: ${siswa1.nama}`);
console.log(`Umur: ${siswa1.umur}`);
console.log(`Kelas: ${siswa1.kelas}`);