class Kucing {

    bersuara() {
        console.log("Kucing bersuara");
    }
}

class Anjing{

    bersuara() {
        console.log("Anjing bersuara");
    }
}

const hewan = [new Kucing(), new Anjing()];
hewan.forEach((hewan) => hewan.bersuara());

const hewan3 = new hamster();
hewan3.bersuara();

//buat fie baru bernama polimerfismePPLG.js
//Buat 2 method skillcoding dan levelcoding 