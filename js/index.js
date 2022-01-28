let generatedGerakan = []
let setDiv = document.getElementById("setup");
let intensitas
let umur
let nama
let counter = 0

let listGerakan = [{
        nama: "push up",
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8'
    },
    {
        nama: "Squat Jump",
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=72BSZupb-1I'
    },
    {
        nama: "Jumping Jack",
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=1b98WrRrmUs'
    },
    {
        nama: "Burpess",
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=auBLPXO8Fww'
    },
    {
        nama: "Squat Thrust",
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=F4511oTkNls'
    },
    {
        nama: 'High Knees',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=_a29JwDaVJw'
    },
    {
        nama: 'Mountain Climber',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=zT-9L3CEcmk'
    },
    {
        nama: 'Jumping Split Squad',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=adEmdacH6UM'
    },
    {
        nama: 'Man Maker',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=2-6EPLtSLwU'
    },
    {
        nama: 'Normal Plank',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=B296mZDhrP4'
    },
    {
        nama: 'Side Plank',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=IkMmABQ9SkM'
    },
    {
        nama: 'Jumping Split Lunge',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=x3avm4QPINk'
    },
    {
        nama: 'Russian Twist',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=DJQGX2J4IVw'
    },
    {
        nama: 'Bulgarian Split Squad',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=7Aqeb8UHl4k'
    },
    {
        nama: 'Standart Push Up',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8'
    },
    {
        nama: 'Clapping or Hand Release Push Up',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=kfnMuP5JgIw'
    },
    {
        nama: 'Crunches',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=xBPQ1Es6qgU'
    },
    {
        nama: 'Bodyweight Push Up To Renegade Row',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=clVj2dQ_GoY'
    },
    {
        nama: 'Floor IYT Raises',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=Yv6sUKOwOY8'
    },
    {
        nama: 'Calf Raises',
        level: {
            rendah: `do 15 reps with 3 set`,
            sedang: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=-M4-G8p8fmc'
    },
    {
        nama: 'Rope Jump',
        level: {
            rendah: `do 15 reps with 3 set`,
            medium: `do 20 reps with 3 set`,
            tinggi: `do 25 reps with 3 set`
        },
        video: 'https://www.youtube.com/watch?v=EkGoiC1ilW0'
    }
]

let saitamaList = [{
        nama: 'Sit Up',
        level: { saitama: '100 Sit Up EVERY SINGEL DAY!!!' },
        video: ''
    },
    {
        nama: 'Push Up',
        level: { saitama: '100 Push Up EVERY SINGEL DAY!!!' },
        video: ''
    },
    {
        nama: 'Squad',
        level: { saitama: '100 Squad EVERY SINGEL DAY!!!' },
        video: ''
    },
    {
        nama: 'Running',
        level: { saitama: '10 KM EVERY SINGEL DAY!!!' },
        video: ''
    }
]


function generateSet(jumlahGerakan) {
    let result = []
    let random = Math.floor(Math.random() * listGerakan.length)

    do {
        random = Math.floor(Math.random() * listGerakan.length)
        if (result.length === 0) {
            result.push(listGerakan[random])
        } else {
            for (let i = 0; i < result.length; i++) {
                if (listGerakan[random].nama === result[i].nama) {
                    break;
                }
                if (i === result.length - 1) {
                    result.push(listGerakan[random])
                }
            }
        }
    }
    while (result.length < jumlahGerakan)
    return result

}

function generateSatu(jumlahGerakan) {
    let result = []
    let random = Math.floor(Math.random() * listGerakan.length)

    do {
        random = Math.floor(Math.random() * listGerakan.length)
        if (result.length === 0) {
            result.push(listGerakan[random])
        } else {
            for (let i = 0; i < result.length; i++) {
                if (listGerakan[random].nama === result[i].nama) {
                    break;
                }
                if (i === result.length - 1) {
                    result.push(listGerakan[random])
                }
            }
        }
    }
    while (result.length < jumlahGerakan)

    let obj = {
        nama: result[0].nama,
        level: {
            rendah: result[0].level.rendah,
            sedang: result[0].level.sedang,
            tinggi: result[0].level.tinggi
        }
    }

    return obj

}

function hapusSatuGerakan(index) {

    let pengganti = generateSatu(1)
    let flag
    let lineHapus = document.getElementById(`listGerakan${index}`)
    lineHapus.remove()

    do {
        flag = true
        pengganti = generateSatu(1)
        for (let i = 0; i < generatedGerakan.length; i++) {
            if (generatedGerakan[i].nama === pengganti.nama) {
                flag = false
            }
        }
    }
    while (flag === false)

    generatedGerakan.splice(index, 1, pengganti)
    setDiv.innerHTML +=
        `<div class="col-md-12" id= "listGerakan${index}">
       <div class="row text-center m-3 p-2 border bg-light rounded">
           <div class="col-md">
               <p id="gerakan${index}">${generatedGerakan[index].nama}</p>
           </div>
           <div class="col-md">
               <p id="set${index}">${generatedGerakan[index].level[intensitas]}</p>
           </div>
           <div class="col-md">
               <a class="btn btn-primary" href="${generatedGerakan[index].video} "target = "_blank" id="linkTutorial${index}">Tutorial</a>
           </div>
           <div class="col-md">
               <button onclick= hapusSatuGerakan(${index})  class="btn btn-primary" id="gantiBtn${index}">Ganti</button>
           </div>
       </div>
   </div>`
}

function createSet() {
    let namaRegex = new RegExp('^[a-zA-Z]*$');
    umur = document.getElementById("umur").value
    nama = document.getElementById("nama").value.trim();
    let alert = document.getElementById("alertNama");
    if (nama.length !== 0 && umur.length !== 0) {
        if (namaRegex.test(nama)) {
            intensitas = document.getElementById("intensitas").value
            setDiv.innerHTML = "";
            const jumlahGerakan = 5
            generatedGerakan = generateSet(jumlahGerakan);
            document.getElementById("submitContainer").innerHTML = `
                <button onclick="doneSubmit()" id="submitBtn " class="btn btn-primary">Simpan</a>`;
            if (intensitas === "saitama") {
                for (let i = 0; i < 4; i++) {
                    setDiv.innerHTML +=
                        `<div class="col-md-12" id= "listGerakan${i}">
                        <div class="row">
                            <p hidden id="index-gerakan${i}">${i}</p> <!-- Indexnya disimpan disini-->
                            <div class="col-md">
                                <p id="gerakan${i}">${saitamaList[i].nama}</p>
                            </div>
                            <div class="col-md">
                                <p id="set${i}">${saitamaList[i].level[intensitas]}</p>
                            </div>
                            <div class="col-md">
                                <a href="${saitamaList[i].video} "target = "_blank" id="linkTutorial${i}">tutorial</a>
                            </div>
                        </div>
                   </div>`
                }
            } else {
                for (let i = 0; i < jumlahGerakan; i++) {
                    setDiv.innerHTML +=
                        `<div class="col-md-12" id= "listGerakan${i}">
                        <div class="row text-center m-3 p-2 border bg-light rounded">
                            <div class="col-md">
                                <p id="gerakan${i}">${generatedGerakan[i].nama}</p>
                            </div>
                            <div class="col-md">
                                <p id="set${i}">${generatedGerakan[i].level[intensitas]}</p>
                            </div>
                            <div class="col-md">
                                <a class="btn btn-primary" href="${generatedGerakan[i].video} "target = "_blank" id="linkTutorial${i}">Tutorial</a>
                            </div>
                            <div class="col-md">
                                <button onclick="hapusSatuGerakan(${i})"  class="btn btn-primary" id="gantiBtn${i}">Ganti</button>
                            </div>
                        </div>
                    </div>`
                }
            }
        } else {
            alert.removeAttribute("hidden");
            alert.innerText = "Nama Tidak Boleh Memiliki Angka Maupun Simbol"
        }
    } else {
        alert.removeAttribute("hidden");
        alert.innerText = "Nama/Umur Tidak Boleh Kosong"
    }

}




function doneSubmit() {
    let setDivHistory = document.getElementById("setupHistory")
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setDivHistory.innerHTML +=
        `<div class="col-md-12"  id="history${counter}">
        <div class="row text-center m-3 p-2 border bg-light rounded">
            <div class="col-md">
                <p>${nama} - ${umur} - ${time}</p>
            </div>
            <div class="col-md">
                <p>Intensistas : ${intensitas}</p>
            </div>

            <div class="col-md">
                <button  onclick="deleteHistory(${counter})" class="btn btn-primary">Delete </button>
            </div>
        </div>
    </div>`
    counter++
}

function deleteHistory(index) {
    let lineHapus = document.getElementById(`history${index}`)
    lineHapus.remove()
}