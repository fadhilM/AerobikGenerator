let listGerakan = [{
        nama: "push up",
    },
    {
        nama: "Sit Up",
    },
    {
        nama: "Jumping Jack",
    },
    {
        nama: "Marching",
    },
    {
        nama: "Double Step",
    },
    {
        nama: "Squad Jack",
    },
]

function generateSet(jumlahGerakan) {
    let result = []
        //Perulangan Sebanyak Jumlah Gerakan yang diminta
    for (let i = 0; i < jumlahGerakan; i++) {
        // Generate Random Angka Sesuai Panjang Arr listGerakan
        let random = Math.floor(Math.random() * listGerakan.length);
        result.push(listGerakan[random]);
    }
    return result;
}

function createSet() {
    let setDiv = document.getElementById("set");
    setDiv.innerHTML = "";

    const jumlahGerakan = 10
    let sets = generateSet(jumlahGerakan);
    for (const set of sets) {
        let gerakanContainer = document.createElement("p");
        gerakanContainer.innerText = set.nama;
        setDiv.appendChild(gerakanContainer);
    }
}