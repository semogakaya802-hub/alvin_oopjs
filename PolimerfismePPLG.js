class Alvin {
    skill() {
        console.log("Siswa Alvin memiliki skill coding, cukup baik");
    }

    level() {
        console.log("Level coding siswa, cukup baik");
    }
}

class Matthew {
    skill() {
        console.log("Siswa Matthew memiliki skill coding, sangat baik");
    }
    level() {
        console.log("Level coding siswa, sangat baik");
    }
}

const siswa = [new Alvin(), new Matthew()];
siswa.forEach((siswa) => { siswa.skill();
    siswa.level();
});