const folder = document.getElementById('templates')
const btn = document.getElementById('plus')
const es = document.getElementById('es')
const adi = document.getElementById('adi')
const nom = document.getElementById('nom')
const note = document.getElementById('note')
let i = 0
const empt = document.createElement('div')

//muscles
const abs = ["Cable Crunch","Crunches","Leg Raises","Plank"]
const back = ["Barbell Row","Close-Grip Lat Pulldown","Dumbbell Row","Lat Pulldown","Pull-Ups","Seated Cable Row","Shrugs","Single-Arm Lat Pulldown","T-Bar Row"]
const biceps = ["Barbell-Curl","Behind-the-Back Cable Curl","Cable Curls","Drag Curls","Dumbbell Bicep Curl","Hammer Curls","Incline Dumbell Curl","Machine Preacher Curls","Preacher curl"]
const chest = ["Bench Press","Cable Fly","Cable Standing Fly","Decline Dumbbell Press","Incline Bench Press","Incline Dumbbell Fly","Push-Ups"]
const forearms = ["Behind-the-Back Wrist Curls","Reverse Barbell Curls","Reverse Cable Curls","Reverse Wrist Curls","Wrist Curls"]
const legs = ["Barbell Back Squat","Cable Kickbacks","Hack Squat","Leg Extension","Leg Press","Lying Leg Curl","Romanian Deadlift","Seated Calf Raises","Seated Leg Curl","Standing Calf Raises","Walking Lunges"]
const shoulder = ["Cable Lateral Raises","Dumbbell Lateral Raises","Face Pulls","Front Raises","Rear Delt Fly","Shoulder Press"]
const tricep = ["Bar Pushdown","Dips","Overhead Bar Extension","Overhead Dumbbell Triceps Extensions","Reverse-Grip Cable Pushdown","Rope Pushdown","Single-Arm Overhead Cable Extension","Smith Close-Grip Press"]
const all = [
  ...abs,
  ...back,
  ...biceps,
  ...chest,
  ...forearms,
  ...legs,
  ...shoulder,
  ...tricep
].sort()
//templates folder
empt.classList.add('tit')
empt.innerText = '-- Empty --'
empt.style.marginTop = '50px'
es.innerText = `Templates (${i})`
if (i == 0) {
    folder.appendChild(empt)
}
function create() {
    if (i === 0) {
        folder.innerHTML = ''
    }
    if (i <= 6) {
        adi.style.display = 'flex'
    };
}
function ver() {
    i++
    es.innerText = `Templates (${i})`
    //template
    let tit = document.createElement('div')
    tit.classList.add('tit')
    let nt = document.createElement('div')
    nt.classList.add('not')
    let start = document.createElement('button')
    start.innerText = 'start workout'
    start.classList.add('start')
    nt.innerText = note.value
    if (nom.value == '') {
        tit.innerText = `Template`
    }
    else {
        tit.innerText = nom.value
    }
    let temp = document.createElement('div')
    temp.classList.add('temp')
    //edit
    let edit = document.createElement('div')
    edit.classList.add('inf')
    edit.innerText = 'edit'
    let edita = document.createElement('div')
    let ed = document.createElement('div')
    ed.innerText = 'Edit template'
    let rim = document.createElement('div')
    rim.innerText = 'Remove template'
    rim.style.color = '#ffbaba'
    edita.append(ed, document.createElement('hr'), rim)
    edita.classList.add('ed')
    let opened2 = false
    edit.onclick = function () {
        if (!opened2) {
            edita.style.display = 'flex'
            edita.style.animation = 'none'
            edita.offsetHeight
            edita.style.animation = 'op .5s forwards'
            tit.style.filter ='blur(10px)'
            nt.style.filter ='blur(10px)'
            start.style.filter ='blur(10px)'
            opened2 = true
        } else {
            edita.style.animation = 'none'
            edita.offsetHeight
            edita.style.animation = 'op .5s reverse forwards'
            setTimeout(() => {
                edita.style.display = 'none'
                tit.style.filter ='none'
                nt.style.filter ='none'
                start.style.filter = 'none'
            }, 500)
            opened2 = false
        }
    }
    //remove template
    rim.onclick = function () {
        i--
        if(i<0) i=0;
        es.innerText = `Templates (${i})`
        temp.style.display = 'none'
        if (i == 0) {
            folder.appendChild(empt)
        }
    }
    // add template
    temp.append(tit, edit, nt, edita,start)
    folder.appendChild(temp)
    nom.value = ''
    note.value = ''
    adi.style.display = 'none'
}
//close
function clo() {
    document.getElementById('adi').style.display = 'none'
    if (i == 0) {
        folder.appendChild(empt)
    }
}
//select exercices
const select = document.querySelector('select');
select.addEventListener('change', () => {filter(select.value)});
let fil = document.getElementById('fil')
let show = document.getElementById('showex')
show.innerText = 'Exercices'
let ope = false
filter('all')
show.onclick = function () {
    if (!ope) {
        fil.style.animation = 'none'
        fil.offsetHeight
        fil.style.display = 'flex';
        fil.style.animation = 'op .5s forwards';
        ope = true;
    } else {
        fil.style.animation = 'none'
        fil.offsetHeight
        fil.style.animation = 'op .5s forwards';
        fil.style.animationDirection = 'reverse';
        setTimeout(() => fil.style.display = 'none', 500);
        ope = false;
    }
}
var exnb = 0
function filter(muscle) {
    const galery = document.getElementById('galery');
    galery.innerHTML = ''; 
    const muscles = {
        abs: abs,
        back: back,
        biceps: biceps,
        chest: chest,
        forearms: forearms,
        legs: legs,
        shoulder: shoulder,
        tricep: tricep,
        all: all
    }
    const arr = muscles[muscle];
    arr.forEach(ex => {
        let sec = document.createElement('section');
        let o = false
        sec.onclick = function () {
            if (!o){
                sec.style.backgroundColor ='#124ac4'
                o = true
                exnb++
            }
            else{
                sec.style.backgroundColor = 'transparent'
                o = false
                exnb--
            }
            show.innerText = `Exercices(${exnb})`
        }
        let img = document.createElement('img');
        img.classList.add('eximg')
        let par = document.createElement('p');

        par.innerText = ex;
        img.src = `sources/body/${muscle}/${ex}.jpg`; 

        sec.appendChild(img);
        sec.appendChild(par);
        galery.appendChild(sec);
    });
}
//quotes
const gymar = [
  "أنت لست عايش بلا هدف مثل غيرك",
  "وقت اللي غيرك نايم ومرتاح، إنت تخدم على روحك",
  "الراحة تدمّر التطور",
  "ما ثماش حد باش ينقذك، المسؤولية مسؤوليتك",
  "الالتزام والانضباط أقوى من الحماس المؤقت",
  "الوجيعة تروح، أما الفخر يبقى",
  "التعب يقتل الضعف",
  "ما وصلت لكل هذا باش توقف توا",
  "الرضا بالقليل هو الهزيمة الحقيقية",
  "تمرّن وكأن الناس الكل شاكّة فيك",
  "شكلك وصحتك نتيجة عاداتك",
  "الكلام والأعذار ما ترفعش أوزان",
  "خدم حتى وإنت مرهق أو خايف",
  "يا تعيش مهووس بالتحسّن، يا تبقى عادي",
  "النتائج ما تكذبش، البشر ينجموا",
  "الثقة تتكسب بالفعل موش بالكلام",
  "كل تكرار يقربك للشخص اللي تحب تكونه",
  "اليوم يضحكوا، وغدوة يراقبوا",
  "الحديد ما يهموش إحساسك",
  "الانضباط دليل احترامك لروحك",
  "كوّن جسم يخلي عقلك فخور",
  "الراحة ما تعمّرش عضلات",
  "إسكت الشكوك بالعمل",
  "نسختك المستقبلية تحاسبك",
  "تمرّن وكأن الضعف وراك",
  "ما ثماش طرق سهلة، الكل بثمن",
  "قوة في الجسم وقوة في العقل",
  "المرآة تعكس الحقيقة",
  "تعب اليوم هو سيطرة غدوة",
  "النتائج لازمها خدمة يومية",
  "خلّي خدمتك تتكلم عليك",
  "التركيز يغلب الموهبة",
  "لو كان سهل، الناس الكل تعملو",
  "تعبك هو اللي يعرّفك",
  "إبني روحك قبل ما تستعرضها",
  "العرق علامة خروج الضعف",
  "الحماس ما يكفيش، الانضباط هو الحل",
  "كن خير من نفسك القديمة",
  "القوة ما تُعطاش، تتكسب",
  "ما ثماش حد مهتم، شدّ صحيح",
  "تمرّن وكأن الاستسلام موش موجود",
  "الطريق للعظمة موجع",
  "كن أكثر واحد يخدم في المكان",
  "مخك يكذب عليك بالحدود",
  "كل تمرين يبعدك عن العادية",
  "الاحترام يتكسب",
  "العادات الصحيحة تصنع رجال",
  "القاعة هي قبر الأعذار",
  "ما تطلبش الراحة، أطلب التطور",
  "جسمك بطاقة تعريفك",
  "حبّ الرحلة موش كان النتيجة",
  "الهروب من الوجيعة يخلّيها ترجع",
  "تواضع وخدمة",
  "تمرّن وكأن سمعتك على المحك",
  "تعب اليوم هو لمعان غدوة",
  "الانضباط يعطيك حرية",
  "قوّي جسمك وشخصيتك",
  "الطريق صعيب ووحيد، أما يستاهل",
  "يا تتوجع في التمرين، يا تتوجع بالندم",
  "العقول الضعيفة تهرب، القوية تتأقلم",
  "خدمتك هي هويتك",
  "النتيجة هي العذر الوحيد",
  "كل عدّة تخلّيك أعلى من العادي",
  "بلاش تمني، إرفع",
  "إنت موش معمول باش تكون عادي",
  "تمرّن بشراسة وفكّر بحكمة",
  "النتائج الكبيرة تتبنى في صمت",
  "الخدمة تفضح حقيقتك",
  "ما ثماش خطة ثانية، كان التقدم",
  "انضباطك يقلّق الكسالى",
  "تمرّن توا باش الحياة تولّي أسهل",
  "ولّي شخص ما يتنكرش",
  "إنت نتيجة التكرار متاعك",
  "الطريق الشاق دايمًا صادق"
]
;

const gymen = [
  "you're not an npc like everyone else",
  "while they sleep, you build",
  "comfort is the enemy",
  "nobody is coming to save you",
  "discipline beats motivation every time",
  "pain is temporary, pride is forever",
  "weakness leaves the body by effort",
  "you didn't come this far to stop",
  "average is the real failure",
  "train like the world doubts you",
  "your body reflects your habits",
  "excuses don't lift weights",
  "do it tired, do it scared",
  "be obsessed or be average",
  "results don't lie, people do",
  "earn your confidence",
  "every rep is a vote for who you become",
  "they laugh now, they watch later",
  "the bar doesn't care about your feelings",
  "discipline is self-respect",
  "build a body your mind is proud of",
  "comfort zones don't grow muscles",
  "silence your doubts with effort",
  "your future self is watching",
  "train like weakness is chasing you",
  "no shortcuts, only scars",
  "strong body, stronger mind",
  "the mirror never lies",
  "suffer now, dominate later",
  "results are rented, rent is due daily",
  "hard work makes noise, stay quiet",
  "focus beats talent",
  "if it was easy, everyone would do it",
  "your grind will introduce you",
  "build yourself, then flex",
  "sweat is weakness crying",
  "you don't need motivation",
  "outwork your old self",
  "strength is earned, not given",
  "nobody cares, work harder",
  "train like quitting isn't an option",
  "greatness hurts first",
  "be the hardest worker in the room",
  "your limits are lying to you",
  "every workout is a step away",
  "earn the respect you want",
  "strong habits build strong men",
  "the gym is where excuses die",
  "don't chase comfort, chase growth",
  "your body is your resume",
  "fall in love with the process",
  "the pain you avoid is the pain you repeat",
  "no ego, just effort",
  "train like your name is on the line",
  "sweat now, shine later",
  "discipline creates freedom",
  "build muscle, build character",
  "the grind is lonely but worth it",
  "suffer training or suffer regret",
  "weak minds quit, strong minds adapt",
  "your effort defines you",
  "results are the only apology",
  "every rep separates you from average",
  "stop wishing, start lifting",
  "you weren't built to be normal",
  "train like a savage, think like a king",
  "muscles are built in silence",
  "the work reveals who you are",
  "no plan B, only progress",
  "your discipline scares lazy people",
  "train now so life feels lighter",
  "become undeniable",
  "you are built by what you repeat",
  "the grind never lies"
];

let quote =document.getElementById('quote')
let q = Math.floor(Math.random() * gymen.length)
quote.innerText = gymen[q]
let en = true
quote.onclick = trans
function trans() {
    if (en===true){
        en = false
        quote.style.animation = 'none'
        quote.offsetHeight
        quote.style.animation = 'op .5s reverse,op .5s .5s,quot .6s alternate infinite'
        setTimeout(()=>{
            quote.style.setProperty('--rot1','-30deg')
            quote.style.setProperty('--rot2','30deg')
            quote.innerText = gymar[q]
        },500)
    }
    else{
        en=true
        quote.style.animation = 'none'
        quote.offsetHeight
        quote.style.animation = 'op .5s reverse,op .5s .5s,quot .6s alternate infinite'
        setTimeout(()=>{
            quote.innerText = gymen[q]
            quote.style.setProperty('--rot1','30deg')
            quote.style.setProperty('--rot2','-30deg')
        },500)
    }
}