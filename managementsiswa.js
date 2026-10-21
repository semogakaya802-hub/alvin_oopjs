class siswa {

    constructor(nama, umur, kelas) {
        this.nama = nama;
        this.umur = umur;
        this.kelas = kelas;
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
    }

    TampilkanData() {
    console.log("===Data Siswa===");
    console.log("Nama: " + this.nama);
    console.log("Umur: " + this.umur);
    console.log("Kelas: " + this.kelas);
    }

    //Method menghitung nilai rata-rata
    hitungRataRata() 
    {
        return (this.nilai1 + this.nilai2) / 2;
    }

    //Method menentukan kelulusan
    tentukanKelulusan() {
        if (this.hitungRataRata() >= 75) {
           return "Lulus";
        } else {
           return "Tidak Lulus";
        }
    }

}

const siswa1 = new Siswa("Alvin", 16, "XI PPLG", 80, 90);
const siswa2 = new Siswa("Matthew", 16, "XI PPLG", 70, 90);

siswa1.TampilkanData();
console.log("Rata-rata nilai: " + siswa1.hitungRataRata());
console.log("Status kelulusan: " + siswa1.tentukanKelulusan());

siswa2.TampilkanData();
console.log("Rata-rata nilai: " + siswa2.hitungRataRata());
console.log("Status kelulusan: " + siswa2.tentukanKelulusan());