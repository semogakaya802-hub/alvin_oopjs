//abstraksi.js
class Mobil {

    constructor(merk) {
        this.merk = merk;
    }
    //method public
    nyalakan() {
        console.log("nyalakan mobil ");
        this.#prosesMesin();
        console.log("mobil siap digunakan")
    }
    //method private
    #prosesMesin() {
        console.log("proses mesin mobil");
    }
}

const mobil = new Mobil("Ford");
mobil.nyalakan();
const mobilsport = new Mobil("Ferrari");
mobilsport.nyalakan();
const mobilSUV = new Mobil("Toyota");
mobilSUV.nyalakan();