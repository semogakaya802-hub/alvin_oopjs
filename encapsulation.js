class rekening {
    //data private, tidak bisa di akses langsung dari luar class
    #saldo = 0;
     
    constructor(saldoAwal) {
        this.#saldo = saldoAwal;
    }
    //method untuk menambah saldo
    setor(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            console.log(`Setor sebesar Rp. ${jumlah} berhasil dilakukan.`);
        }else{
            console.log("Jumlah setor harus lebih besar dari 0.");
        }
    }
    //method mengambil saldo
    tarik(jumlah) {
        if (jumlah > 0 && jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            console.log(`Tarik sebesar Rp. ${jumlah} berhasil dilakukan.`);
        } else {
            console.log("Jumlah tarik tidak valid.");
        }
    }
    lihatSaldo() {
        return this.#saldo;
    }
}
//buat objek baru
const rekening1 = new rekening(1000000);
rekening1.setor(500000);

// Menggunakan method yang kita buat
rekening1.lihatSaldo();
rekening1.setor(350000);
rekening1.tarik(100000); // mencoba menarik lebih dari saldo
rekening1.lihatSaldo();