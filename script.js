let body = document.querySelector('#body');

function buildHTML() {
    body.innerHTML = `
    <h1 class = "title">RSS Virtual Keyboard</h1>
    <textarea type = 'text' id = 'input' rows = '7' cols = '88'></textarea>
    <div class = "keyboard" id="keyboard">
    <div class="keyboard-row">
    <div class="keyboard-keys"><span class="english">\`\</span><span class="russian hidden">ё</span><span class="english-caps hidden">\`\</span><span class="russian-caps hidden">Ё</span><span class="english-shift hidden">~</span><span class="russian-shift hidden">Ё</span></div>
    <div class="keyboard-keys"><span class="english">1</span><span class="russian hidden">1</span><span class="english-caps hidden">1</span><span class="russian-caps hidden">1</span><span class="english-shift hidden">!</span><span class="russian-shift hidden"><!/span></div>
    <div class="keyboard-keys"><span class="english">2</span><span class="russian hidden">2</span><span class="english-caps hidden">2</span><span class="russian-caps hidden">2</span><span class="english-shift hidden">@</span><span class="russian-shift hidden">"</span></div>
    <div class="keyboard-keys"><span class="english">3</span><span class="russian hidden">3</span><span class="english-caps hidden">3</span><span class="russian-caps hidden">3</span><span class="english-shift hidden">#</span><span class="russian-shift hidden">№</span></div>
    <div class="keyboard-keys"><span class="english">4</span><span class="russian hidden">4</span><span class="english-caps hidden">4</span><span class="russian-caps hidden">4</span><span class="english-shift hidden">$</span><span class="russian-shift hidden">;</span></div>
    <div class="keyboard-keys"><span class="english">5</span><span class="russian hidden">5</span><span class="english-caps hidden">5</span><span class="russian-caps hidden">5</span><span class="english-shift hidden">%</span><span class="russian-shift hidden">%</span></div>
    <div class="keyboard-keys"><span class="english">6</span><span class="russian hidden">6</span><span class="english-caps hidden">6</span><span class="russian-caps hidden">6</span><span class="english-shift hidden">^</span><span class="russian-shift hidden">:</span></div>
    <div class="keyboard-keys"><span class="english">7</span><span class="russian hidden">7</span><span class="english-caps hidden">7</span><span class="russian-caps hidden">7</span><span class="english-shift hidden">&</span><span class="russian-shift hidden">?</span></div>
    <div class="keyboard-keys"><span class="english">8</span><span class="russian hidden">8</span><span class="english-caps hidden">8</span><span class="russian-caps hidden">8</span><span class="english-shift hidden">*</span><span class="russian-shift hidden">*</span></div>
    <div class="keyboard-keys"><span class="english">9</span><span class="russian hidden">9</span><span class="english-caps hidden">9</span><span class="russian-caps hidden">9</span><span class="english-shift hidden">(</span><span class="russian-shift hidden">(</span></div>
    <div class="keyboard-keys"><span class="english">0</span><span class="russian hidden">0</span><span class="english-caps hidden">0</span><span class="russian-caps hidden">0</span><span class="english-shift hidden">)</span><span class="russian-shift hidden">)</span></div>
    <div class="keyboard-keys"><span class="english">-</span><span class="russian hidden">-</span><span class="english-caps hidden">-</span><span class="russian-caps hidden">-</span><span class="english-shift hidden">_</span><span class="russian-shift hidden">_</span></div>
    <div class="keyboard-keys"><span class="english">=</span><span class="russian hidden">=</span><span class="english-caps hidden">=</span><span class="russian-caps hidden">=</span><span class="english-shift hidden">+</span><span class="russian-shift hidden">+</span></div>
    <div class="keyboard-keys"><span class="english key-backspace">Backspace</span><span class="russian hidden key-backspace">Backspace</span><span class="english-caps hidden key-backspace">Backspace</span><span class="russian-caps hidden key-backspace">Backspace</span><span class="english-shift hidden key-backspace">Backspace</span><span class="russian-shift hidden key-backspace">Backspace</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys"><span class="english key-tab">Tab</span><span class="russian hidden key-tab">Tab</span><span class="english-caps hidden key-tab">Tab</span><span class="russian-caps hidden key-tab">Tab</span><span class="english-shift hidden key-tab">Tab</span><span class="russian-shift hidden key-tab">Tab</span></div>
    <div class="keyboard-keys"><span class="english">q</span><span class="russian hidden">й</span><span class="english-caps hidden">Q</span><span class="russian-caps hidden">Й</span><span class="english-shift hidden">Q</span><span class="russian-shift hidden">Й</span></div>
    <div class="keyboard-keys"><span class="english">w</span><span class="russian hidden">ц</span><span class="english-caps hidden">W</span><span class="russian-caps hidden">Ц</span><span class="english-shift hidden">W</span><span class="russian-shift hidden">Ц</span></div>
    <div class="keyboard-keys"><span class="english">e</span><span class="russian hidden">у</span><span class="english-caps hidden">E</span><span class="russian-caps hidden">У</span><span class="english-shift hidden">E</span><span class="russian-shift hidden">У</span></div>
    <div class="keyboard-keys"><span class="english">r</span><span class="russian hidden">к</span><span class="english-caps hidden">R</span><span class="russian-caps hidden">К</span><span class="english-shift hidden">R</span><span class="russian-shift hidden">К</span></div>
    <div class="keyboard-keys"><span class="english">t</span><span class="russian hidden">е</span><span class="english-caps hidden">T</span><span class="russian-caps hidden">Е</span><span class="english-shift hidden">T</span><span class="russian-shift hidden">Е</span></div>
    <div class="keyboard-keys"><span class="english">y</span><span class="russian hidden">н</span><span class="english-caps hidden">Y</span><span class="russian-caps hidden">Н</span><span class="english-shift hidden">Y</span><span class="russian-shift hidden">Н</span></div>
    <div class="keyboard-keys"><span class="english">u</span><span class="russian hidden">г</span><span class="english-caps hidden">U</span><span class="russian-caps hidden">Г</span><span class="english-shift hidden">U</span><span class="russian-shift hidden">Г</span></div>
    <div class="keyboard-keys"><span class="english">i</span><span class="russian hidden">ш</span><span class="english-caps hidden">I</span><span class="russian-caps hidden">Ш</span><span class="english-shift hidden">I</span><span class="russian-shift hidden">Ш</span></div>
    <div class="keyboard-keys"><span class="english">o</span><span class="russian hidden">щ</span><span class="english-caps hidden">O</span><span class="russian-caps hidden">Щ</span><span class="english-shift hidden">O</span><span class="russian-shift hidden">Щ</span></div>
    <div class="keyboard-keys"><span class="english">p</span><span class="russian hidden">з</span><span class="english-caps hidden">P</span><span class="russian-caps hidden">З</span><span class="english-shift hidden">P</span><span class="russian-shift hidden">З</span></div>
    <div class="keyboard-keys"><span class="english">[</span><span class="russian hidden">х</span><span class="english-caps hidden">[</span><span class="russian-caps hidden">Х</span><span class="english-shift hidden">[</span><span class="russian-shift hidden">Х</span></div>
    <div class="keyboard-keys"><span class="english">]</span><span class="russian hidden">ъ</span><span class="english-caps hidden">]</span><span class="russian-caps hidden">Ъ</span><span class="english-shift hidden">]</span><span class="russian-shift hidden">Ъ</span></div>
    <div class="keyboard-keys"><span class="english">\\\</span><span class="russian hidden">\\\</span><span class="english-caps hidden">\\\</span><span class="russian-caps hidden">\\\</span><span class="english-shift hidden">|</span><span class="russian-shift hidden">/</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys"><span class="english key-caps">CapsLock</span><span class="russian hidden key-caps">CapsLock</span><span class="english-caps hidden key-caps">CapsLock</span><span class="russian-caps hidden key-caps">CapsLock</span><span class="english-shift hidden key-caps">CapsLock</span><span class="russian-shift hidden key-caps">CapsLock</span></div>
    <div class="keyboard-keys"><span class="english">a</span><span class="russian hidden">ф</span><span class="english-caps hidden">A</span><span class="russian-caps hidden">Ф</span><span class="english-shift hidden">A</span><span class="russian-shift hidden">Ф</span></div>
    <div class="keyboard-keys"><span class="english">s</span><span class="russian hidden">ы</span><span class="english-caps hidden">S</span><span class="russian-caps hidden">Ы</span><span class="english-shift hidden">S</span><span class="russian-shift hidden">Ы</span></div>
    <div class="keyboard-keys"><span class="english">d</span><span class="russian hidden">в</span><span class="english-caps hidden">D</span><span class="russian-caps hidden">В</span><span class="english-shift hidden">D</span><span class="russian-shift hidden">В</span></div>
    <div class="keyboard-keys"><span class="english">f</span><span class="russian hidden">а</span><span class="english-caps hidden">F</span><span class="russian-caps hidden">А</span><span class="english-shift hidden">F</span><span class="russian-shift hidden">А</span></div>
    <div class="keyboard-keys"><span class="english">g</span><span class="russian hidden">п</span><span class="english-caps hidden">G</span><span class="russian-caps hidden">П</span><span class="english-shift hidden">G</span><span class="russian-shift hidden">П</span></div>
    <div class="keyboard-keys"><span class="english">h</span><span class="russian hidden">р</span><span class="english-caps hidden">H</span><span class="russian-caps hidden">Р</span><span class="english-shift hidden">H</span><span class="russian-shift hidden">Р</span></div>
    <div class="keyboard-keys"><span class="english">j</span><span class="russian hidden">о</span><span class="english-caps hidden">J</span><span class="russian-caps hidden">О</span><span class="english-shift hidden">J</span><span class="russian-shift hidden">О</span></div>
    <div class="keyboard-keys"><span class="english">k</span><span class="russian hidden">л</span><span class="english-caps hidden">K</span><span class="russian-caps hidden">Л</span><span class="english-shift hidden">K</span><span class="russian-shift hidden">Л</span></div>
    <div class="keyboard-keys"><span class="english">l</span><span class="russian hidden">д</span><span class="english-caps hidden">L</span><span class="russian-caps hidden">Д</span><span class="english-shift hidden">L</span><span class="russian-shift hidden">Д</span></div>
    <div class="keyboard-keys"><span class="english">;</span><span class="russian hidden">ж</span><span class="english-caps hidden">;</span><span class="russian-caps hidden">Ж</span><span class="english-shift hidden">;</span><span class="russian-shift hidden">Ж</span></div>
    <div class="keyboard-keys"><span class="english">'</span><span class="russian hidden">э</span><span class="english-caps hidden">'</span><span class="russian-caps hidden">Э</span><span class="english-shift hidden">'</span><span class="russian-shift hidden">Э</span></div>
    <div class="keyboard-keys"><span class="english key-enter">Enter</span><span class="russian hidden key-enter">Enter</span><span class="english-caps hidden key-enter">Enter</span><span class="russian-caps hidden key-enter">Enter</span><span class="english-shift hidden key-enter">Enter</span><span class="russian-shift hidden key-enter">Enter</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys"><span class="english key-shift">Shift</span><span class="russian hidden key-shift">Shift</span><span class="english-caps hidden key-shift">Shift</span><span class="russian-caps hidden key-shift">Shift</span><span class="english-shift hidden key-shift">Shift</span><span class="russian-shift hidden key-shift">Shift</span></div>
    <div class="keyboard-keys"><span class="english">z</span><span class="russian hidden">я</span><span class="english-caps hidden">Z</span><span class="russian-caps hidden">Я</span><span class="english-shift hidden">Z</span><span class="russian-shift hidden">Я</span></div>
    <div class="keyboard-keys"><span class="english">x</span><span class="russian hidden">ч</span><span class="english-caps hidden">X</span><span class="russian-caps hidden">Ч</span><span class="english-shift hidden">X</span><span class="russian-shift hidden">Ч</span></div>
    <div class="keyboard-keys"><span class="english">c</span><span class="russian hidden">с</span><span class="english-caps hidden">C</span><span class="russian-caps hidden">С</span><span class="english-shift hidden">C</span><span class="russian-shift hidden">С</span></div>
    <div class="keyboard-keys"><span class="english">v</span><span class="russian hidden">м</span><span class="english-caps hidden">V</span><span class="russian-caps hidden">М</span><span class="english-shift hidden">V</span><span class="russian-shift hidden">М</span></div>
    <div class="keyboard-keys"><span class="english">b</span><span class="russian hidden">и</span><span class="english-caps hidden">B</span><span class="russian-caps hidden">И</span><span class="english-shift hidden">B</span><span class="russian-shift hidden">И</span></div>
    <div class="keyboard-keys"><span class="english">n</span><span class="russian hidden">т</span><span class="english-caps hidden">N</span><span class="russian-caps hidden">Т</span><span class="english-shift hidden">N</span><span class="russian-shift hidden">Т</span></div>
    <div class="keyboard-keys"><span class="english">m</span><span class="russian hidden">ь</span><span class="english-caps hidden">M</span><span class="russian-caps hidden">Ь</span><span class="english-shift hidden">M</span><span class="russian-shift hidden">Ь</span></div>
    <div class="keyboard-keys"><span class="english">,</span><span class="russian hidden">б</span><span class="english-caps hidden">,</span><span class="russian-caps hidden">Б</span><span class="english-shift hidden"><</span><span class="russian-shift hidden">Б</span></div>
    <div class="keyboard-keys"><span class="english">.</span><span class="russian hidden">ю</span><span class="english-caps hidden">.</span><span class="russian-caps hidden">Ю</span><span class="english-shift hidden">></span><span class="russian-shift hidden">Ю</span></div>
    <div class="keyboard-keys"><span class="english">/</span><span class="russian hidden">.</span><span class="english-caps hidden">/</span><span class="russian-caps hidden">.</span><span class="english-shift hidden">?</span><span class="russian-shift hidden">,</span></div>
    <div class="keyboard-keys"><span class="english key-shift">Shift</span><span class="russian hidden key-shift">Shift</span><span class="english-caps hidden key-shift">Shift</span><span class="russian-caps hidden key-shift">Shift</span><span class="english-shift hidden key-shift">Shift</span><span class="russian-shift hidden key-shift">Shift</span></div>
    <div class="keyboard-keys"><span class="english">▲</span><span class="russian hidden">▲</span><span class="english-caps hidden">▲</span><span class="russian-caps hidden">▲</span><span class="english-shift hidden">▲</span><span class="russian-shift hidden">▲</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys"><span class="english">Ctrl</span><span class="russian hidden">Ctrl</span><span class="english-caps hidden">Ctrl</span><span class="russian-caps hidden">Ctrl</span><span class="english-shift hidden">Ctrl</span><span class="russian-shift hidden">Ctrl</span></div>
    <div class="keyboard-keys"><span class="english">Win</span><span class="russian hidden">Win</span><span class="english-caps hidden">Win</span><span class="russian-caps hidden">Win</span><span class="english-shift hidden">Win</span><span class="russian-shift hidden">Win</span></div>
    <div class="keyboard-keys"><span class="english">Alt</span><span class="russian hidden">Alt</span><span class="english-caps hidden">Alt</span><span class="russian-caps hidden">Alt</span><span class="english-shift hidden">Alt</span><span class="russian-shift hidden">Alt</span></div>
    <div class="keyboard-keys"><span class="english key-space">Space</span><span class="russian hidden key-space">Space</span><span class="english-caps hidden key-space">Space</span><span class="russian-caps hidden key-space">Space</span><span class="english-shift hidden key-space">Space</span><span class="russian-shift hidden key-space">Space</span></div>
    <div class="keyboard-keys"><span class="english">Alt</span><span class="russian hidden">Alt</span><span class="english-caps hidden">Alt</span><span class="russian-caps hidden">Alt</span><span class="english-shift hidden">Alt</span><span class="russian-shift hidden">Alt</span></div>
    <div class="keyboard-keys"><span class="english">Win</span><span class="russian hidden">Win</span><span class="english-caps hidden">Win</span><span class="russian-caps hidden">Win</span><span class="english-shift hidden">Win</span><span class="russian-shift hidden">Win</span></div>
    <div class="keyboard-keys"><span class="english">Ctrl</span><span class="russian hidden">Ctrl</span><span class="english-caps hidden">Ctrl</span><span class="russian-caps hidden">Ctrl</span><span class="english-shift hidden">Ctrl</span><span class="russian-shift hidden">Ctrl</span></div>
    <div class="keyboard-keys"><span class="english">◄</span><span class="russian hidden">◄</span><span class="english-caps hidden">◄</span><span class="russian-caps hidden">◄</span><span class="english-shift hidden">◄</span><span class="russian-shift hidden">◄</span></div>
    <div class="keyboard-keys"><span class="english">▼</span><span class="russian hidden">▼</span><span class="english-caps hidden">▼</span><span class="russian-caps hidden">▼</span><span class="english-shift hidden">▼</span><span class="russian-shift hidden">▼</span></div>
    <div class="keyboard-keys"><span class="english">►</span><span class="russian hidden">►</span><span class="english-caps hidden">►</span><span class="russian-caps hidden">►</span><span class="english-shift hidden">►</span><span class="russian-shift hidden">►</span></div>
</div>
    </div>
    `
}

buildHTML()
let english = document.querySelectorAll('.english');
let russian = document.querySelectorAll('.russian');
let englishCaps = document.querySelectorAll('.english-caps')
let russianCaps = document.querySelectorAll('.russian-caps')
//let keyboard = document.querySelector('#keyboard');
let input = document.querySelector('#input');
let pressed = new Set();
let engToRus = {
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    '[': 'х',
    ']': 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    ';':'ж',
    "'": 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    ',': 'б',
    '.': 'ю',
    '/': '.'
}
 
input.addEventListener('keyup', (e) => {
    let end = input.value.length;
    input.focus()
    input.setSelectionRange(end, end);
})
input.addEventListener('keydown', (e) => {

    e.preventDefault();

    if (e.key && e.key !== 'Backspace' && e.key !== 'Escape' && e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Enter' && e.key !== 'Tab' && e.key !== 'CapsLock' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
   
        console.log(!english[0].classList.contains('hidden'))
        if (!english[0].classList.contains('hidden')) {

            input.textContent += e.code.slice(-1).toLowerCase();
        } else if (!englishCaps[0].classList.contains('hidden')) {
            console.log(2)

            input.textContent += e.code.slice(-1).toUpperCase();
        } else if (!russian[0].classList.contains('hidden')) {
            console.log(3)
            let code = e.code.slice(-1).toLowerCase();
            input.textContent += engToRus[code];
            
        } else if (!russianCaps[0].classList.contains('hidden')) {
            console.log(4)
            let codeCaps = e.code.slice(-1).toLowerCase();

            input.textContent += engToRus[codeCaps].toUpperCase();

        }
        else {
            console.log('gr')
        }

    }
})
document.addEventListener('keydown', (e) => {
    let key = e.key;
    if (e.key == 'Alt') {
        pressed.add('Alt')
    }
    if (e.key == 'Shift') {
        pressed.add('Shift')
    }

    if (e.key && e.key !== 'Backspace' && e.key !== 'Escape' && e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Enter' && e.key !== 'Tab' && e.key !== 'CapsLock' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.path[0] !== input) {
        if (!english[0].classList.contains('hidden')) {
            
            input.textContent += e.code.slice(-1).toLowerCase();
        } else if (!englishCaps[0].classList.contains('hidden')) {
            console.log(2)

            input.textContent += e.code.slice(-1).toUpperCase();
        } else if (!russian[0].classList.contains('hidden')) {
            console.log(3)
            let code = e.code.slice(-1).toLowerCase();
            input.textContent += engToRus[code];
            
        } else if (!russianCaps[0].classList.contains('hidden')) {
            console.log(4)
            let codeCaps = e.code.slice(-1).toLowerCase();

            input.textContent += engToRus[codeCaps].toUpperCase();

        }

    }


    if (pressed.size == 2 && (!russian[0].classList.contains('hidden') || !russianCaps[0].classList.contains('hidden'))) {


        if (!russian[0].classList.contains('hidden')) {

            russian.forEach(item => {
                item.classList.add('hidden')
            });
            english.forEach(item => {
                item.classList.remove('hidden')
            });
        } else if (!russianCaps[0].classList.contains('hidden')) {


            englishCaps.forEach(item => {
                item.classList.remove('hidden')
            });
            russianCaps.forEach(item => {
                item.classList.add('hidden')
            });
        }

    } else if (pressed.size == 2 && (!english[0].classList.contains('hidden') || !englishCaps[0].classList.contains('hidden'))) {
        if (!english[0].classList.contains('hidden')) {


            english.forEach(item => {
                item.classList.add('hidden')
            });
            russian.forEach(item => {
                item.classList.remove('hidden')
            });

        } else if (!englishCaps[0].classList.contains('hidden')) {


            russianCaps.forEach(item => {
                item.classList.remove('hidden')
            });
            englishCaps.forEach(item => {
                item.classList.add('hidden')
            });
        }


    }

})

document.addEventListener('keyup', (e) => {
    if (e.key == 'Alt') {
        pressed.delete('Alt')
    }

    if (e.key == 'Shift') {
        pressed.delete('Shift')
    }



    if (e.getModifierState('CapsLock')) {
        if (e.key == 'CapsLock') {
            if (russian[0].classList.contains('hidden') && russianCaps[0].classList.contains('hidden')) {
                englishCaps.forEach(item => {
                    item.classList.toggle('hidden')
                });
                english.forEach(item => {
                    item.classList.toggle('hidden')
                });
            } else if (english[0].classList.contains('hidden')) {
                russianCaps.forEach(item => {
                    item.classList.toggle('hidden')
                });
                russian.forEach(item => {
                    item.classList.toggle('hidden')
                });
            }
        }

    }

})




// document.addEventListener('keydown', (e) => {
//     console.log(e.code.slice(-1).toLowerCase() == e.key)
//     console.log(e.key)
//     console.log(e.code.slice(-1))
//     // console.log(e.code.slice(-1).toLowerCase())
//     // console.log(checker.textContent)
// })

// replace.(/q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m|/g, 'c')