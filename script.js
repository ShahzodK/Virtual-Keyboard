let body = document.querySelector('#body');

function buildHTML() {
    body.innerHTML = `
    <h1 class = "title">RSS Virtual Keyboard</h1>
    <textarea type = 'text' id = 'input' rows = '7' cols = '88'></textarea>
    <div class = "keyboard" id="keyboard">
    <div class="keyboard-row">
    <div class="keyboard-keys Backquote"><span class="english">\`</span><span class="russian hidden">ё</span><span class="english-caps hidden">\`</span><span class="russian-caps hidden">Ё</span><span class="english-shift hidden">~</span><span class="russian-shift hidden">Ё</span></div>
    <div class="keyboard-keys Digit1"><span class="english">1</span><span class="russian hidden">1</span><span class="english-caps hidden">1</span><span class="russian-caps hidden">1</span><span class="english-shift hidden">!</span><span class="russian-shift hidden"><!/span></div>
    <div class="keyboard-keys Digit2"><span class="english">2</span><span class="russian hidden">2</span><span class="english-caps hidden">2</span><span class="russian-caps hidden">2</span><span class="english-shift hidden">@</span><span class="russian-shift hidden">"</span></div>
    <div class="keyboard-keys Digit3"><span class="english">3</span><span class="russian hidden">3</span><span class="english-caps hidden">3</span><span class="russian-caps hidden">3</span><span class="english-shift hidden">#</span><span class="russian-shift hidden">№</span></div>
    <div class="keyboard-keys Digit4"><span class="english">4</span><span class="russian hidden">4</span><span class="english-caps hidden">4</span><span class="russian-caps hidden">4</span><span class="english-shift hidden">$</span><span class="russian-shift hidden">;</span></div>
    <div class="keyboard-keys Digit5"><span class="english">5</span><span class="russian hidden">5</span><span class="english-caps hidden">5</span><span class="russian-caps hidden">5</span><span class="english-shift hidden">%</span><span class="russian-shift hidden">%</span></div>
    <div class="keyboard-keys Digit6"><span class="english">6</span><span class="russian hidden">6</span><span class="english-caps hidden">6</span><span class="russian-caps hidden">6</span><span class="english-shift hidden">^</span><span class="russian-shift hidden">:</span></div>
    <div class="keyboard-keys Digit7"><span class="english">7</span><span class="russian hidden">7</span><span class="english-caps hidden">7</span><span class="russian-caps hidden">7</span><span class="english-shift hidden">&</span><span class="russian-shift hidden">?</span></div>
    <div class="keyboard-keys Digit8"><span class="english">8</span><span class="russian hidden">8</span><span class="english-caps hidden">8</span><span class="russian-caps hidden">8</span><span class="english-shift hidden">*</span><span class="russian-shift hidden">*</span></div>
    <div class="keyboard-keys Digit9"><span class="english">9</span><span class="russian hidden">9</span><span class="english-caps hidden">9</span><span class="russian-caps hidden">9</span><span class="english-shift hidden">(</span><span class="russian-shift hidden">(</span></div>
    <div class="keyboard-keys Digit0"><span class="english">0</span><span class="russian hidden">0</span><span class="english-caps hidden">0</span><span class="russian-caps hidden">0</span><span class="english-shift hidden">)</span><span class="russian-shift hidden">)</span></div>
    <div class="keyboard-keys Minus"><span class="english">-</span><span class="russian hidden">-</span><span class="english-caps hidden">-</span><span class="russian-caps hidden">-</span><span class="english-shift hidden">_</span><span class="russian-shift hidden">_</span></div>
    <div class="keyboard-keys Equal"><span class="english">=</span><span class="russian hidden">=</span><span class="english-caps hidden">=</span><span class="russian-caps hidden">=</span><span class="english-shift hidden">+</span><span class="russian-shift hidden">+</span></div>
    <div class="keyboard-keys Backspace"><span class="english key-backspace">Backspace</span><span class="russian hidden key-backspace">Backspace</span><span class="english-caps hidden key-backspace">Backspace</span><span class="russian-caps hidden key-backspace">Backspace</span><span class="english-shift hidden key-backspace">Backspace</span><span class="russian-shift hidden key-backspace">Backspace</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys Tab"><span class="english key-tab">Tab</span><span class="russian hidden key-tab">Tab</span><span class="english-caps hidden key-tab">Tab</span><span class="russian-caps hidden key-tab">Tab</span><span class="english-shift hidden key-tab">Tab</span><span class="russian-shift hidden key-tab">Tab</span></div>
    <div class="keyboard-keys KeyQ"><span class="english">q</span><span class="russian hidden">й</span><span class="english-caps hidden">Q</span><span class="russian-caps hidden">Й</span><span class="english-shift hidden">Q</span><span class="russian-shift hidden">Й</span></div>
    <div class="keyboard-keys KeyW"><span class="english">w</span><span class="russian hidden">ц</span><span class="english-caps hidden">W</span><span class="russian-caps hidden">Ц</span><span class="english-shift hidden">W</span><span class="russian-shift hidden">Ц</span></div>
    <div class="keyboard-keys KeyE"><span class="english">e</span><span class="russian hidden">у</span><span class="english-caps hidden">E</span><span class="russian-caps hidden">У</span><span class="english-shift hidden">E</span><span class="russian-shift hidden">У</span></div>
    <div class="keyboard-keys KeyR"><span class="english">r</span><span class="russian hidden">к</span><span class="english-caps hidden">R</span><span class="russian-caps hidden">К</span><span class="english-shift hidden">R</span><span class="russian-shift hidden">К</span></div>
    <div class="keyboard-keys KeyT"><span class="english">t</span><span class="russian hidden">е</span><span class="english-caps hidden">T</span><span class="russian-caps hidden">Е</span><span class="english-shift hidden">T</span><span class="russian-shift hidden">Е</span></div>
    <div class="keyboard-keys KeyY"><span class="english">y</span><span class="russian hidden">н</span><span class="english-caps hidden">Y</span><span class="russian-caps hidden">Н</span><span class="english-shift hidden">Y</span><span class="russian-shift hidden">Н</span></div>
    <div class="keyboard-keys KeyU"><span class="english">u</span><span class="russian hidden">г</span><span class="english-caps hidden">U</span><span class="russian-caps hidden">Г</span><span class="english-shift hidden">U</span><span class="russian-shift hidden">Г</span></div>
    <div class="keyboard-keys KeyI"><span class="english">i</span><span class="russian hidden">ш</span><span class="english-caps hidden">I</span><span class="russian-caps hidden">Ш</span><span class="english-shift hidden">I</span><span class="russian-shift hidden">Ш</span></div>
    <div class="keyboard-keys KeyO"><span class="english">o</span><span class="russian hidden">щ</span><span class="english-caps hidden">O</span><span class="russian-caps hidden">Щ</span><span class="english-shift hidden">O</span><span class="russian-shift hidden">Щ</span></div>
    <div class="keyboard-keys KeyP"><span class="english">p</span><span class="russian hidden">з</span><span class="english-caps hidden">P</span><span class="russian-caps hidden">З</span><span class="english-shift hidden">P</span><span class="russian-shift hidden">З</span></div>
    <div class="keyboard-keys BracketLeft"><span class="english">[</span><span class="russian hidden">х</span><span class="english-caps hidden">[</span><span class="russian-caps hidden">Х</span><span class="english-shift hidden">[</span><span class="russian-shift hidden">Х</span></div>
    <div class="keyboard-keys BracketRight"><span class="english">]</span><span class="russian hidden">ъ</span><span class="english-caps hidden">]</span><span class="russian-caps hidden">Ъ</span><span class="english-shift hidden">]</span><span class="russian-shift hidden">Ъ</span></div>
    <div class="keyboard-keys Backslash"><span class="english">\\</span><span class="russian hidden">\\</span><span class="english-caps hidden">\\</span><span class="russian-caps hidden">\\</span><span class="english-shift hidden">|</span><span class="russian-shift hidden">/</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys CapsLock"><span class="english key-caps">CapsLock</span><span class="russian hidden key-caps">CapsLock</span><span class="english-caps hidden key-caps">CapsLock</span><span class="russian-caps hidden key-caps">CapsLock</span><span class="english-shift hidden key-caps">CapsLock</span><span class="russian-shift hidden key-caps">CapsLock</span></div>
    <div class="keyboard-keys KeyA"><span class="english">a</span><span class="russian hidden">ф</span><span class="english-caps hidden">A</span><span class="russian-caps hidden">Ф</span><span class="english-shift hidden">A</span><span class="russian-shift hidden">Ф</span></div>
    <div class="keyboard-keys KeyS"><span class="english">s</span><span class="russian hidden">ы</span><span class="english-caps hidden">S</span><span class="russian-caps hidden">Ы</span><span class="english-shift hidden">S</span><span class="russian-shift hidden">Ы</span></div>
    <div class="keyboard-keys KeyD"><span class="english">d</span><span class="russian hidden">в</span><span class="english-caps hidden">D</span><span class="russian-caps hidden">В</span><span class="english-shift hidden">D</span><span class="russian-shift hidden">В</span></div>
    <div class="keyboard-keys KeyF"><span class="english">f</span><span class="russian hidden">а</span><span class="english-caps hidden">F</span><span class="russian-caps hidden">А</span><span class="english-shift hidden">F</span><span class="russian-shift hidden">А</span></div>
    <div class="keyboard-keys KeyG"><span class="english">g</span><span class="russian hidden">п</span><span class="english-caps hidden">G</span><span class="russian-caps hidden">П</span><span class="english-shift hidden">G</span><span class="russian-shift hidden">П</span></div>
    <div class="keyboard-keys KeyH"><span class="english">h</span><span class="russian hidden">р</span><span class="english-caps hidden">H</span><span class="russian-caps hidden">Р</span><span class="english-shift hidden">H</span><span class="russian-shift hidden">Р</span></div>
    <div class="keyboard-keys KeyJ"><span class="english">j</span><span class="russian hidden">о</span><span class="english-caps hidden">J</span><span class="russian-caps hidden">О</span><span class="english-shift hidden">J</span><span class="russian-shift hidden">О</span></div>
    <div class="keyboard-keys KeyK"><span class="english">k</span><span class="russian hidden">л</span><span class="english-caps hidden">K</span><span class="russian-caps hidden">Л</span><span class="english-shift hidden">K</span><span class="russian-shift hidden">Л</span></div>
    <div class="keyboard-keys KeyL"><span class="english">l</span><span class="russian hidden">д</span><span class="english-caps hidden">L</span><span class="russian-caps hidden">Д</span><span class="english-shift hidden">L</span><span class="russian-shift hidden">Д</span></div>
    <div class="keyboard-keys Semicolon"><span class="english">;</span><span class="russian hidden">ж</span><span class="english-caps hidden">;</span><span class="russian-caps hidden">Ж</span><span class="english-shift hidden">;</span><span class="russian-shift hidden">Ж</span></div>
    <div class="keyboard-keys Quote"><span class="english">'</span><span class="russian hidden">э</span><span class="english-caps hidden">'</span><span class="russian-caps hidden">Э</span><span class="english-shift hidden">'</span><span class="russian-shift hidden">Э</span></div>
    <div class="keyboard-keys Enter"><span class="english key-enter">Enter</span><span class="russian hidden key-enter">Enter</span><span class="english-caps hidden key-enter">Enter</span><span class="russian-caps hidden key-enter">Enter</span><span class="english-shift hidden key-enter">Enter</span><span class="russian-shift hidden key-enter">Enter</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys ShiftLeft"><span class="english key-shift">Shift</span><span class="russian hidden key-shift">Shift</span><span class="english-caps hidden key-shift">Shift</span><span class="russian-caps hidden key-shift">Shift</span><span class="english-shift hidden key-shift">Shift</span><span class="russian-shift hidden key-shift">Shift</span></div>
    <div class="keyboard-keys KeyZ"><span class="english">z</span><span class="russian hidden">я</span><span class="english-caps hidden">Z</span><span class="russian-caps hidden">Я</span><span class="english-shift hidden">Z</span><span class="russian-shift hidden">Я</span></div>
    <div class="keyboard-keys KeyX"><span class="english">x</span><span class="russian hidden">ч</span><span class="english-caps hidden">X</span><span class="russian-caps hidden">Ч</span><span class="english-shift hidden">X</span><span class="russian-shift hidden">Ч</span></div>
    <div class="keyboard-keys KeyC"><span class="english">c</span><span class="russian hidden">с</span><span class="english-caps hidden">C</span><span class="russian-caps hidden">С</span><span class="english-shift hidden">C</span><span class="russian-shift hidden">С</span></div>
    <div class="keyboard-keys KeyV"><span class="english">v</span><span class="russian hidden">м</span><span class="english-caps hidden">V</span><span class="russian-caps hidden">М</span><span class="english-shift hidden">V</span><span class="russian-shift hidden">М</span></div>
    <div class="keyboard-keys KeyB"><span class="english">b</span><span class="russian hidden">и</span><span class="english-caps hidden">B</span><span class="russian-caps hidden">И</span><span class="english-shift hidden">B</span><span class="russian-shift hidden">И</span></div>
    <div class="keyboard-keys KeyN"><span class="english">n</span><span class="russian hidden">т</span><span class="english-caps hidden">N</span><span class="russian-caps hidden">Т</span><span class="english-shift hidden">N</span><span class="russian-shift hidden">Т</span></div>
    <div class="keyboard-keys KeyM"><span class="english">m</span><span class="russian hidden">ь</span><span class="english-caps hidden">M</span><span class="russian-caps hidden">Ь</span><span class="english-shift hidden">M</span><span class="russian-shift hidden">Ь</span></div>
    <div class="keyboard-keys Comma"><span class="english">,</span><span class="russian hidden">б</span><span class="english-caps hidden">,</span><span class="russian-caps hidden">Б</span><span class="english-shift hidden"><</span><span class="russian-shift hidden">Б</span></div>
    <div class="keyboard-keys Period"><span class="english">.</span><span class="russian hidden">ю</span><span class="english-caps hidden">.</span><span class="russian-caps hidden">Ю</span><span class="english-shift hidden">></span><span class="russian-shift hidden">Ю</span></div>
    <div class="keyboard-keys Slash"><span class="english">/</span><span class="russian hidden">.</span><span class="english-caps hidden">/</span><span class="russian-caps hidden">.</span><span class="english-shift hidden">?</span><span class="russian-shift hidden">,</span></div>
    <div class="keyboard-keys ShiftRight"><span class="english key-shift">Shift</span><span class="russian hidden key-shift">Shift</span><span class="english-caps hidden key-shift">Shift</span><span class="russian-caps hidden key-shift">Shift</span><span class="english-shift hidden key-shift">Shift</span><span class="russian-shift hidden key-shift">Shift</span></div>
    <div class="keyboard-keys ArrowUp"><span class="english">▲</span><span class="russian hidden">▲</span><span class="english-caps hidden">▲</span><span class="russian-caps hidden">▲</span><span class="english-shift hidden">▲</span><span class="russian-shift hidden">▲</span></div>
</div>
<div class="keyboard-row">
    <div class="keyboard-keys ControlLeft"><span class="english">Ctrl</span><span class="russian hidden">Ctrl</span><span class="english-caps hidden">Ctrl</span><span class="russian-caps hidden">Ctrl</span><span class="english-shift hidden">Ctrl</span><span class="russian-shift hidden">Ctrl</span></div>
    <div class="keyboard-keys MetaLeft"><span class="english">Win</span><span class="russian hidden">Win</span><span class="english-caps hidden">Win</span><span class="russian-caps hidden">Win</span><span class="english-shift hidden">Win</span><span class="russian-shift hidden">Win</span></div>
    <div class="keyboard-keys AltLeft"><span class="english">Alt</span><span class="russian hidden">Alt</span><span class="english-caps hidden">Alt</span><span class="russian-caps hidden">Alt</span><span class="english-shift hidden">Alt</span><span class="russian-shift hidden">Alt</span></div>
    <div class="keyboard-keys Space"><span class="english key-space">Space</span><span class="russian hidden key-space">Space</span><span class="english-caps hidden key-space">Space</span><span class="russian-caps hidden key-space">Space</span><span class="english-shift hidden key-space">Space</span><span class="russian-shift hidden key-space">Space</span></div>
    <div class="keyboard-keys AltRight"><span class="english">Alt</span><span class="russian hidden">Alt</span><span class="english-caps hidden">Alt</span><span class="russian-caps hidden">Alt</span><span class="english-shift hidden">Alt</span><span class="russian-shift hidden">Alt</span></div>
    <div class="keyboard-keys" ><span class="english">Win</span><span class="russian hidden">Win</span><span class="english-caps hidden">Win</span><span class="russian-caps hidden">Win</span><span class="english-shift hidden">Win</span><span class="russian-shift hidden">Win</span></div>
    <div class="keyboard-keys ControlRight"><span class="english">Ctrl</span><span class="russian hidden">Ctrl</span><span class="english-caps hidden">Ctrl</span><span class="russian-caps hidden">Ctrl</span><span class="english-shift hidden">Ctrl</span><span class="russian-shift hidden">Ctrl</span></div>
    <div class="keyboard-keys ArrowLeft"><span class="english">◄</span><span class="russian hidden">◄</span><span class="english-caps hidden">◄</span><span class="russian-caps hidden">◄</span><span class="english-shift hidden">◄</span><span class="russian-shift hidden">◄</span></div>
    <div class="keyboard-keys ArrowDown"><span class="english">▼</span><span class="russian hidden">▼</span><span class="english-caps hidden">▼</span><span class="russian-caps hidden">▼</span><span class="english-shift hidden">▼</span><span class="russian-shift hidden">▼</span></div>
    <div class="keyboard-keys ArrowRight"><span class="english">►</span><span class="russian hidden">►</span><span class="english-caps hidden">►</span><span class="russian-caps hidden">►</span><span class="english-shift hidden">►</span><span class="russian-shift hidden">►</span></div>
</div>
    </div>

    <div class = 'instructions'> 
        <p>To switch keyboard Layout press LeftAlt + Shift</p>
        <p>Keyboard created for Windows OS</p>
    </div>
    `
}
console.log(window.localStorage)

buildHTML()
let keyboard = document.querySelector('.keyboard')
let english = document.querySelectorAll('.english');
let russian = document.querySelectorAll('.russian');
let englishCaps = document.querySelectorAll('.english-caps');
let russianCaps = document.querySelectorAll('.russian-caps');
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
    ';': 'ж',
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
class functionalKeys {
    constructor(input) {
        this.input = input
    }
    tab() {
        input.textContent += '  '
    }
    space() {
        input.textContent += ' '
    }
    backSpace() {
        input.textContent = input.textContent.slice(0, -1)
    }
    enter() {
        input.textContent += "\n"
    }
}
let functionalKey = new functionalKeys(input);
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'Tab':
            functionalKey.tab();
            break;
        case ' ':
            functionalKey.space();
            break;
        case 'Backspace':
            functionalKey.backSpace();
            break;
        case 'Enter':
            functionalKey.enter()
            break;
        default:
            break;
    }

})
//switchToCaps
function switchToCaps(elem, eventListener, equalToCaps) {
    elem.addEventListener(eventListener, (e) => {
        if (e.getModifierState('CapsLock')) {
            if (equalToCaps == 'CapsLock') {
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

}

// Animation
function keyAnimation(onAnimEventListener, offAnimEventListener) {
    document.addEventListener(onAnimEventListener, (e) => {

        if (e.target.tagName == 'SPAN') {
            e.target.classList.add('key-clicked')

        } else {
            if (e.code && e.code[0] == 'F') {
                throw new Error('F keys are not allowed!')
            } else if (e.code) {
                keyboard.querySelector(`.${e.code}`).childNodes.forEach(item => {
                    item.classList.add('key-clicked');
                });
            }
        }
    });
    document.addEventListener(offAnimEventListener, (e) => {
        if (e.target.tagName == 'SPAN') {
            e.target.classList.remove('key-clicked');
        } else {
            if (e.code && e.code[0] == 'F') {
                throw new Error('F keys are not allowed!')
            } else if (e.code) {
                keyboard.querySelector(`.${e.code}`).childNodes.forEach(item => {
                    item.classList.remove('key-clicked')
                });
            }
        }
    });
}

input.addEventListener('keyup', () => {
    let end = input.value.length;
    input.focus()
    input.setSelectionRange(end, end);
})
input.addEventListener('keydown', (e) => {

    e.preventDefault();

    if (e.key && e.key !== 'Backspace' && e.key !== 'Escape' && e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Enter' && e.key !== 'Tab' && e.key !== 'CapsLock' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.code[0] !== 'F') {

        if (!english[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                input.textContent += e.key;
            } else {
                input.textContent += e.code.slice(-1).toLowerCase();
            }
        } else if (!englishCaps[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                input.textContent += e.key;
            } else {
                input.textContent += e.code.slice(-1).toUpperCase();
            }
        } else if (!russian[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                console.log(e.key)
                input.textContent += e.key;
            } else {
                let code = e.code.slice(-1).toLowerCase();
                input.textContent += engToRus[code];
            }
        } else if (!russianCaps[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                input.textContent += e.key.toLowerCase();
            } else {
                let codeCaps = e.code.slice(-1).toLowerCase();
                input.textContent += engToRus[codeCaps].toUpperCase();
            }
        }

    }
})

// Writing in physical keyboard
document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key == 'Alt') {
        pressed.add('Alt')
    }
    if (e.key == 'Shift') {
        pressed.add('Shift')
    }

    if (e.key && e.key !== 'Backspace' && e.key !== 'Escape' && e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Enter' && e.key !== 'Tab' && e.key !== 'CapsLock' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.path[0] !== input && e.code[0] !== 'F') {
        if (!english[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                input.textContent += e.key
            } else {
                input.textContent += e.code.slice(-1).toLowerCase();

            }
        } else if (!englishCaps[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                console.log(e.key)
                input.textContent += e.key
            } else {
                input.textContent += e.code.slice(-1).toUpperCase();

            }
        } else if (!russian[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                input.textContent += e.key.toLowerCase()
            } else {
                let code = e.code.slice(-1).toLowerCase();
                input.textContent += engToRus[code];
            }

        } else if (!russianCaps[0].classList.contains('hidden')) {
            if (e.code.length > 4) {
                console.log(e.key)
                input.textContent += e.key
            } else {
                let codeCaps = e.code.slice(-1).toLowerCase();
                input.textContent += engToRus[codeCaps].toUpperCase();
            }


        }

    }


    if (pressed.size == 2 && (!russian[0].classList.contains('hidden') || !russianCaps[0].classList.contains('hidden'))) {


        if (!russian[0].classList.contains('hidden')) {
            window.localStorage.clear()
            window.localStorage.setItem('en', 'true');
            russian.forEach(item => {
                item.classList.add('hidden')
            });
            english.forEach(item => {
                item.classList.remove('hidden')
            });
        } else if (!russianCaps[0].classList.contains('hidden')) {
            window.localStorage.clear()
            window.localStorage.setItem('enCaps', 'true');
            englishCaps.forEach(item => {
                item.classList.remove('hidden')
            });
            russianCaps.forEach(item => {
                item.classList.add('hidden')
            });
        }

    } else if (pressed.size == 2 && (!english[0].classList.contains('hidden') || !englishCaps[0].classList.contains('hidden'))) {
        if (!english[0].classList.contains('hidden')) {
            window.localStorage.clear()
            window.localStorage.setItem('ru', 'true');
            english.forEach(item => {
                item.classList.add('hidden')
            });
            russian.forEach(item => {
                item.classList.remove('hidden')
            });

        } else if (!englishCaps[0].classList.contains('hidden')) {
            window.localStorage.clear()
            window.localStorage.setItem('ruCaps', 'true');
            russianCaps.forEach(item => {
                item.classList.remove('hidden')
            });
            englishCaps.forEach(item => {
                item.classList.add('hidden')
            });
        }


    }

})


document.addEventListener('keyup', () => {
    keyAnimation('keydown', 'keyup');
})



document.addEventListener('keyup', (e) => {
    if (e.key == 'Alt') {
        pressed.delete('Alt')
    }

    if (e.key == 'Shift') {
        pressed.delete('Shift')
    }
    switchToCaps(document, 'keyup', e.key)

});


keyboard.addEventListener('mousedown', (e) => {
    keyAnimation('mousedown', 'mouseup')

    // Animation 
    if (e.target && e.target.tagName == 'SPAN' && e.target.textContent !== 'Backspace' && e.target.textContent !== 'Escape' && e.target.textContent !== 'Shift' && e.target.textContent !== 'Alt' && e.target.textContent !== 'Ctrl' && e.target.textContent !== 'Enter' && e.target.textContent !== 'Tab' && e.target.textContent !== 'CapsLock' && e.target.textContent !== 'ArrowLeft' && e.target.textContent !== 'ArrowRight' && e.target.textContent !== 'ArrowUp' && e.target.textContent !== 'ArrowDown' && e.target.textContent !== 'Space' && e.target.textContent !== 'Win' && e.path[0] !== input) {
        input.textContent += e.target.textContent;
    }
    //switchToCaps
    switchToCaps(keyboard, 'mousedown', e.target.textContent, );

});
// document.addEventListener('keydown', (e) => {
//     console.log(e.code.slice(-1).toLowerCase() == e.key)
//     console.log(e.key)
//     console.log(e.code.slice(-1))
//     // console.log(e.code.slice(-1).toLowerCase())
//     // console.log(checker.textContent)
// })

// replace.(/q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m|/g, 'c')