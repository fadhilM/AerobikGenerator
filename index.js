let generatedGerakan = []

let listGerakan = [{
    nama: "push up",
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`   
    },
    video: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8'
},
{
    nama: "Squat Jump",
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=72BSZupb-1I'
},
{
    nama: "Jumping Jack",
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=1b98WrRrmUs'
},
{
    nama: "Burpess",
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=auBLPXO8Fww'
},
{
    nama: "Squat Thrust",
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    }
    , video: 'https://www.youtube.com/watch?v=F4511oTkNls'
},
{
    nama: 'High Knees',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=_a29JwDaVJw'
},
{
    nama: 'Mountain Climber',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=zT-9L3CEcmk'
},
{
    nama: 'Jumping Split Squad',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=adEmdacH6UM'
},
{
    nama: 'Man Maker',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=2-6EPLtSLwU'
},
{
    nama: 'Normal Plank',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=B296mZDhrP4'
},
{
    nama: 'Side Plank',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=IkMmABQ9SkM'
},
{
    nama: 'Jumping Split Lunge',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=x3avm4QPINk'
},
{
    nama: 'Russian Twist',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=DJQGX2J4IVw'
},
{
    nama: 'Bulgarian Split Squad',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=7Aqeb8UHl4k'
},
{
    nama: 'Standart Push Up',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=_l3ySVKYVJ8'
},
{
    nama: 'Clapping or Hand Release Push Up',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=kfnMuP5JgIw'
},
{
    nama: 'Crunches',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=xBPQ1Es6qgU'
},
{
    nama: 'Bodyweight Push Up To Renegade Row',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=clVj2dQ_GoY'
},
{
    nama: 'Floor IYT Raises',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=Yv6sUKOwOY8'
},
{
    nama: 'Calf Raises',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=-M4-G8p8fmc'
},
{
    nama: 'Rope Jump',
    level: {
        easy: `do 15 reps with 3 set`,
        medium: `do 20 reps with 3 set`,
        hard: `do 25 reps with 3 set`
    },
    video: 'https://www.youtube.com/watch?v=EkGoiC1ilW0'
},
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
            easy: result[0].level.easy,
            medium: result[0].level.medium,
            hard: result[0].level.hard
    }
    }
    
    return obj
       
}

// console.log(generateSatuSet(1))


generatedGerakan = generateSet(5) //function coba

function hapusSatuGerakan(index) {

    let pengganti = generateSatu(1)
    let flag

    do {       
        flag = true
        pengganti = generateSatu(1)
        for (let i =  0; i < generatedGerakan.length; i++) {
            if (generatedGerakan[i].nama === pengganti.nama) {
                flag = false
            }
        }
    }
    while (flag === false)
    
    generatedGerakan.splice(index, 1, pengganti)
}

// console.log(hapusSatuGerakan(1))

console.log(generatedGerakan)
hapusSatuGerakan(1)
console.log('-----------------------')
console.log(generatedGerakan)

function createSet() {
    let setDiv = document.getElementById("set");
    setDiv.innerHTML = "";

    const jumlahGerakan = 5
    generatedGerakan = generateSet(jumlahGerakan);
    for (const set of sets) {
        let gerakanContainer = document.createElement("p");
        gerakanContainer.innerText = set.nama;
        setDiv.appendChild(gerakanContainer);
    }
}


/**
 * skipping
2. Jumping Jacks
3. Stair Training (agak repot)
4. Butt Kicks
5. Mountain Climber 
6. Bear Crawls (repot)
7. Burpees
8. Squat Jacks
9. Inchworm
10. High Knees
 */