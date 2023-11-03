import './App.css'
import React, { CSSProperties } from 'react'

type Floor = { title?: string, draw?: string, desc?: string, html?: React.ReactNode, color?: string }
type FlashCardContent = { name: string, front: Floor, back: Floor }

type UiuaGroup = { name: string, description: string, color: string, checked: boolean }

const uiuaGroups: UiuaGroup[] = [
  { name: "stack", description: "work with stack", color: "#FF5733", checked: true },
  { name: "constants", description: "push constant value onto the stack", color: "#33FF57", checked: true },
  { name: "monadic pervasive", description: "operate on every element in an array", color: "#5733FF", checked: true },
  { name: "dyadic pervasive", description: "operate on every pair of elements in two arrays", color: "#FF5733", checked: true },
  { name: "monadic array", description: "operate on a single array", color: "#33FF57", checked: true },
  { name: "dyadic array", description: "operate on two arrays", color: "#5733FF", checked: true },
  { name: "iterating modifiers", description: "iterate and apply a function to an array or arrays", color: "#FF5733", checked: true },
  { name: "aggregating modifiers", description: "apply a function to aggregate an array", color: "#33FF57", checked: true },
  { name: "other modifiers", description: "apply various other modifiers", color: "#5733FF", checked: true },
  { name: "control", description: "control the flow of execution", color: "#FF5733", checked: true },
  { name: "advanced stack manipulation", description: "advanced stack manipulation operations", color: "#33FF57", checked: true },
  { name: "ocean 🪸", description: "create rank lists", color: "#5733FF", checked: true },
  { name: "miscellaneous", description: "various miscellaneous operations", color: "#FF5733", checked: true },
  { name: "system - filesystem", description: "work with files and directories", color: "#33FF57", checked: false },
  { name: "system - standard I/O", description: "read and write standard input and output", color: "#5733FF", checked: false },
  { name: "system - environment", description: "query the environment", color: "#FF5733", checked: false },
  { name: "system - streams", description: "read from and write to streams", color: "#33FF57", checked: false },
  { name: "system - commands", description: "execute commands", color: "#5733FF", checked: false },
  { name: "system - audio", description: "work with audio", color: "#FF5733", checked: false },
  { name: "system - images", description: "work with static images", color: "#33FF57", checked: false },
  { name: "system - GIFs", description: "work with animated GIFs", color: "#5733FF", checked: false },
  { name: "system - TCP", description: "work with TCP sockets", color: "#FF5733", checked: false },
  { name: "system - misc", description: "various system-related operations", color: "#33FF57", checked: false }
]

const WHITE_COLOR = '#ffffff';
const RED_COLOR = '#ff0000';
const ORANGE_COLOR = '#ff9900';
const GREEN_COLOR = '#00ff00';
const BLUE_COLOR = '#0000ff';
const PURPLE_COLOR = '#ff00ff';
const LIGHTBLUE_COLOR = '#00ffff';
const x = [

  { "char": "/", "name": "reduce", },
  { "char": "\\", "name": "scan", },
  { "char": "⊕", "name": "group", },
  { "char": "⊜", "name": "partition", },
  { "char": "∧", "name": "fold", },
  { "char": "⊐", "name": "pack", },
  { "char": "⍘", "name": "invert", },
  { "char": "⍜", "name": "under", },
  { "char": "⬚", "name": "fill", },
  { "char": "spawn", "name": "spawn", },
  { "char": "?", "name": "if", },
  { "char": "⍣", "name": "try", },
  { "char": "⍤", "name": "assert", },
  { "char": "⎋", "name": "break", },
  { "char": "∘", "name": "identity", },
  { "char": "⋅", "name": "gap", },
  { "char": "⟜", "name": "reach", },
  { "char": "⊙", "name": "dip", },
  { "char": "⊃", "name": "fork", },
  { "char": "⊓", "name": "bracket", },
  { "char": "⋄", "name": "rock", },
  { "char": "~", "name": "surface", },
  { "char": "≊", "name": "deep", },
  { "char": "≃", "name": "abyss", },
  { "char": "∸", "name": "seabed", }

]

const uiuaSymbols = [
  { char: ".", name: "duplicate", description: "duplicate the top value on stack", group: "stack", color: WHITE_COLOR },
  { char: ",", name: "over", description: "duplicate the second-to-top value to the top of the stack", group: "stack", color: WHITE_COLOR },
  { char: ":", name: "flip", description: "swap the top two values on the stack", group: "stack", color: WHITE_COLOR },
  { char: ";", name: "pop", description: "discard the top stack value", group: "stack", color: WHITE_COLOR },
  { char: "∩", name: "both", description: "call a funtion on two sets of values", group: "stack", color: ORANGE_COLOR },
  { char: "⸮", name: "trace", description: "debug print the top value one the stack without pooping it", group: "stack", color: WHITE_COLOR },
  { char: "dump", name: "dump", description: "debug print all the balues currently on stack without popping them", group: "stack", color: ORANGE_COLOR },

  { char: "η", name: "eta", "description": "the number of radians in a quarter circle", group: "constants", color: RED_COLOR },
  { char: "π", name: "pi", "description": "the ratio of a circle's circumference to its diameter", group: "constants", color: RED_COLOR },
  { char: "τ", name: "tau", "description": "the ratio of a circle's circumference to its radius", group: "constants", color: RED_COLOR },
  { char: "∞", name: "infinity", "description": "the biggest number", group: "constants", color: RED_COLOR },

  { char: "¬", name: "not", description: "logical not", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "±", name: "sign", description: "numerical sign (1, -1, or 0)", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "¯", name: "negate", description: "negate a number", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "⌵", name: "absolute value", description: "get the absolute value of a number", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "√", name: "sqrt", description: "take the square root of a number", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "○", name: "sine", description: "get the sine of a number", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "⌊", name: "floor", description: "round to the nearest integer towards -∞", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "⌈", name: "ceiling", description: "round to the nearest integer towards ∞", group: "monadic pervasive", color: GREEN_COLOR },
  { char: "⁅", name: "round", description: "round to the nearest integer", group: "monadic pervasive", color: GREEN_COLOR },

  { char: "=", name: "equals", description: "compare for equality", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "≠", name: "not equals", description: "compare for inequality", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "<", name: "less than", description: "compare for less than", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "≤", name: "less or equal", description: "compare for less than or equal", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: ">", name: "greater than", description: "compare for greater than", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "≥", name: "greater or equal", description: "compare for greater than or equal", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "+", name: "add", description: "add values", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "-", name: "subtract", description: "subtract values", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "×", name: "multiply", description: "multiply values", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "÷", name: "divide", description: "divide values", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "◿", name: "modulus", description: "modulo values", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "ⁿ", name: "power", description: "raise a value to a power", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "ₙ", name: "logarithm", description: "get the base logarithm of a number", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "↧", name: "minimum", description: "take the minimum of two arrays", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "↥", name: "maximum", description: "take the maximum of two arrays", group: "dyadic pervasive", color: BLUE_COLOR },
  { char: "∠", name: "atangent", description: "take the arctangent of two numbers", group: "dyadic pervasive", color: BLUE_COLOR },

  { char: "⧻", name: "length", description: "get the number of rows in an array", group: "monadic array", color: GREEN_COLOR },
  { char: "△", name: "shape", description: "get the dimensions of an array", group: "monadic array", color: GREEN_COLOR },
  { char: "⇡", name: "range", description: "make an array of all natural numbers less than a number", group: "monadic array", color: GREEN_COLOR },
  { char: "⊢", name: "first", description: "get the first row of an array", group: "monadic array", color: GREEN_COLOR },
  { char: "⇌", name: "reverse", description: "reverse the rows of an array", group: "monadic array", color: GREEN_COLOR },
  { char: "♭", name: "deshape", description: "make an array 1-dimensional", group: "monadic array", color: GREEN_COLOR },
  { char: "⋯", name: "bits", description: "encode an array as bits (big-endian)", group: "monadic array", color: GREEN_COLOR },
  { char: "⍉", name: "transpose", description: "rotate the shape of an array", group: "monadic array", color: WHITE_COLOR },
  { char: "⍏", name: "rise", description: "get the indices into an array if it were sorted ascending", group: "monadic array", color: GREEN_COLOR },
  { char: "⍖", name: "fall", description: "get the indices into an array if it were sorted descending", group: "monadic array", color: GREEN_COLOR },
  { char: "⊚", name: "where", description: "get indices where array values are not equal to zero", group: "monadic array", color: GREEN_COLOR },
  { char: "⊛", name: "classify", description: "assign a unique index to each unique element in an array", group: "monadic array", color: GREEN_COLOR },
  { char: "⊝", name: "deduplicate", description: "remove duplicate elements from an array", group: "monadic array", color: GREEN_COLOR },
  { char: "□", name: "box", description: "turn an array into a box", group: "monadic array", color: GREEN_COLOR },
  { char: "⊔", name: "unbox", description: "take an array out of a box", group: "monadic array", color: GREEN_COLOR },

  { char: "≍", name: "match", description: "check if two arrays are exactly the same", group: "dyadic array", color: BLUE_COLOR },
  { char: "⊟", name: "couple", description: "combine two arrays as rows of a new array", group: "dyadic array", color: BLUE_COLOR },
  { char: "⊂", name: "join", description: "append two arrays end-to-end", group: "dyadic array", color: BLUE_COLOR },
  { char: "⊏", name: "select", description: "select multiple rows from an array", group: "dyadic array", color: BLUE_COLOR },
  { char: "⊡", name: "pick", description: "index a row or elements from an array", group: "dyadic array", color: BLUE_COLOR },
  { char: "↯", name: "reshape", description: "change the shape of an array", group: "dyadic array", color: BLUE_COLOR },
  { char: "↙", name: "take", description: "take the first n elements of an array", group: "dyadic array", color: BLUE_COLOR },
  { char: "↘", name: "drop", description: "drop the first n elements of an array", group: "dyadic array", color: BLUE_COLOR },
  { char: "↻", name: "rotate", description: "rotate the elements of an array by n", group: "dyadic array", color: BLUE_COLOR },
  { char: "◫", name: "windows", description: "the n-wise windows of an array", group: "dyadic array", color: BLUE_COLOR },
  { char: "▽", name: "keep", description: "discard or copy some rows of an array", group: "dyadic array", color: BLUE_COLOR },
  { char: "⌕", name: "find", description: "find the occurrences of one array in another", group: "dyadic array", color: BLUE_COLOR },
  { char: "∊", name: "member", description: "check if each row of one array exists in another", group: "dyadic array", color: BLUE_COLOR },
  { char: "⊗", name: "indexof", description: "find the index of each row of one array in another", group: "dyadic array", color: BLUE_COLOR },

  { char: "∵", name: "each", description: "apply a function to each element of an array or arrays", group: "iterating modifiers", color: ORANGE_COLOR },
  { char: "≡", name: "rows", description: "apply a function to each row of an array or arrays", group: "iterating modifiers", color: ORANGE_COLOR },
  { char: "∺", name: "distribute", description: "apply a function to a fixed value and each row of an array", group: "iterating modifiers", color: ORANGE_COLOR },
  { char: "≐", name: "tribute", description: "apply a function to each row of an array and a fixed value", group: "iterating modifiers", color: ORANGE_COLOR },
  { char: "⊞", name: "table", description: "apply a function to each combination of elements of two arrays", group: "iterating modifiers", color: ORANGE_COLOR },
  { char: "⊠", name: "cross", description: "apply a function to each combination of rows of two arrays", group: "iterating modifiers", color: ORANGE_COLOR },
  { char: "⍥", name: "repeat", description: "repeat a function a number of times", group: "iterating modifiers", color: ORANGE_COLOR },
  { char: "≑", name: "level", description: "repeat a function while a condition holds", group: "iterating modifiers", color: PURPLE_COLOR },
  { char: "◳", name: "combinate", description: "apply a function at a different array depth", group: "iterating modifiers", color: PURPLE_COLOR },

  { char: "/", name: "reduce", description: "apply a reducing function to an array", group: "aggregating modifiers", color: ORANGE_COLOR },
  { char: "\\", name: "scan", description: "reduce, but keep intermediate values", group: "aggregating modifiers", color: ORANGE_COLOR },
  { char: "⊕", name: "group", description: "group elements of an array into buckets by index", group: "aggregating modifiers", color: ORANGE_COLOR },
  { char: "⊜", name: "partition", description: "group elements of an array into buckets by sequential keys", group: "aggregating modifiers", color: ORANGE_COLOR },
  { char: "∧", name: "fold", description: "apply a function to aggregate at different array depths", group: "aggregating modifiers", color: PURPLE_COLOR },
  { char: "⊐", name: "pack", description: "apply a function with implicit (un)boxing", group: "other modifiers", color: ORANGE_COLOR },
  { char: "⍘", name: "invert", description: "invert the behavior of a function", group: "other modifiers", color: ORANGE_COLOR },
  { char: "⍜", name: "under", description: "apply a function under another", group: "other modifiers", color: PURPLE_COLOR },
  { char: "⬚", name: "fill", description: "set the fill value for a function", group: "other modifiers", color: PURPLE_COLOR },
  { char: "'", name: "bind", description: "spawn a thread", group: "other modifiers", color: PURPLE_COLOR },
  { char: "spawn", name: "spawn", description: "call one of two functions based on a condition", group: "other modifiers", color: ORANGE_COLOR },

  { char: "?", name: "if", description: "call a function and catch errors", group: "control", color: PURPLE_COLOR },
  { char: "⍣", name: "try", description: "throw an error if a condition is not met", group: "control", color: PURPLE_COLOR },
  { char: "⍤", name: "assert", description: "break out of a loop", group: "control", color: BLUE_COLOR },
  { char: "⎋", name: "break", description: "do nothing", group: "control", color: GREEN_COLOR },

  { char: "∘", name: "identity", description: "discard the top stack value then call a function", group: "advanced stack manipulation", color: WHITE_COLOR },
  { char: "⋅", name: "gap", description: "pop the second stack value then call a function", group: "advanced stack manipulation", color: ORANGE_COLOR },
  { char: "⟜", name: "reach", description: "temporarily pop the top value off the stack and call a function", group: "advanced stack manipulation", color: ORANGE_COLOR },
  { char: "⊙", name: "dip", description: "call two functions on the same values", group: "advanced stack manipulation", color: ORANGE_COLOR },
  { char: "⊃", name: "fork", description: "call two functions on two distinct sets of values", group: "advanced stack manipulation", color: PURPLE_COLOR },
  { char: "⊓", name: "bracket", description: "⊂ ∞ to an array", group: "advanced stack manipulation", color: PURPLE_COLOR },

  { char: "⋄", name: "rock", description: "⊂ -1 to an array", group: "ocean 🪸", color: LIGHTBLUE_COLOR },
  { char: "~", name: "surface", description: "⊂ 2 to an array", group: "ocean 🪸", color: LIGHTBLUE_COLOR },
  { char: "≊", name: "deep", description: "⊂ 1 to an array", group: "ocean 🪸", color: LIGHTBLUE_COLOR },
  { char: "≃", name: "abyss", description: "⊂ 0 to an array", group: "ocean 🪸", color: LIGHTBLUE_COLOR },
  { char: "∸", name: "seabed", description: "⊂ 0 to an array", group: "ocean 🪸", color: LIGHTBLUE_COLOR },

  { char: "wait", name: "wait", description: "", group: "miscellaneous", color: GREEN_COLOR },
  { char: "send", name: "send", description: "", group: "miscellaneous", color: BLUE_COLOR },
  { char: "recv", name: "recv", description: "", group: "miscellaneous", color: GREEN_COLOR },
  { char: "tryrecv", name: "tryrecv", description: "", group: "miscellaneous", color: GREEN_COLOR },
  { char: "⚂", name: "random", description: "", group: "miscellaneous", color: RED_COLOR },
  { char: "gen", name: "gen", description: "", group: "miscellaneous", color: GREEN_COLOR },
  { char: "deal", name: "deal", description: "", group: "miscellaneous", color: BLUE_COLOR },
  { char: "parse", name: "parse", description: "", group: "miscellaneous", color: GREEN_COLOR },
  { char: "regex", name: "regex", description: "", group: "miscellaneous", color: BLUE_COLOR },
  { char: "utf", name: "utf", description: "", group: "miscellaneous", color: GREEN_COLOR },
  { char: "tag", name: "tag", description: "", group: "miscellaneous", color: RED_COLOR },
  { char: "type", name: "type", description: "", group: "miscellaneous", color: GREEN_COLOR },
  { char: "now", name: "now", description: "", group: "miscellaneous", color: RED_COLOR },

  { char: "&cd", name: "change directory", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&i", name: "import", description: "", group: "system - filesystem", color: BLUE_COLOR },
  { char: "&fo", name: "file - open", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&fc", name: "file - create", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&fde", name: "file - delete", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&ftr", name: "file - trash", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&fe", name: "file - exists", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&fld", name: "file - list directory", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&fif", name: "file - is file", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&fras", name: "file - read all to string", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&frab", name: "file - read all to bytes", description: "", group: "system - filesystem", color: GREEN_COLOR },
  { char: "&fwa", name: "file - write all", description: "", group: "system - filesystem", color: BLUE_COLOR },

  { char: "&s", name: "show", description: "", group: "system - standard I/O", color: GREEN_COLOR },
  { char: "&pf", name: "print and flush", description: "", group: "system - standard I/O", color: GREEN_COLOR },
  { char: "&p", name: "print with newline", description: "", group: "system - standard I/O", color: GREEN_COLOR },
  { char: "&sc", name: "scan line", description: "", group: "system - standard I/O", color: RED_COLOR },

  { char: "&ts", name: "terminal size", description: "", group: "system - environment", color: RED_COLOR },
  { char: "&raw", name: "set raw mode", description: "", group: "system - environment", color: GREEN_COLOR },
  { char: "&args", name: "arguments", description: "", group: "system - environment", color: RED_COLOR },
  { char: "&var", name: "environment variable", description: "", group: "system - environment", color: GREEN_COLOR },

  { char: "&rs", name: "read to string", description: "", group: "system - streams", color: BLUE_COLOR },
  { char: "&rb", name: "read to bytes", description: "", group: "system - streams", color: BLUE_COLOR },
  { char: "&ru", name: "read until", description: "", group: "system - streams", color: BLUE_COLOR },
  { char: "&w", name: "write", description: "", group: "system - streams", color: BLUE_COLOR },
  { char: "&cl", name: "close handle", description: "", group: "system - streams", color: GREEN_COLOR },

  { char: "&runi", name: "run command inherit", description: "", group: "system - commands", color: GREEN_COLOR },
  { char: "&runc", name: "run command capture", description: "", group: "system - commands", color: GREEN_COLOR },
  { char: "&invk", name: "invoke", description: "", group: "system - commands", color: GREEN_COLOR },

  { char: "&tcpl", name: "tcp - listen", description: "", group: "system - TCP", color: GREEN_COLOR },
  { char: "&tcpa", name: "tcp - accept", description: "", group: "system - TCP", color: GREEN_COLOR },
  { char: "&tcpc", name: "tcp - connect", description: "", group: "system - TCP", color: GREEN_COLOR },
  { char: "&tcpsnb", name: "tcp - set non-blocking", description: "", group: "system - TCP", color: GREEN_COLOR },
  { char: "&tcpsrt", name: "tcp - set read timeout", description: "", group: "system - TCP", color: BLUE_COLOR },
  { char: "&tcpswt", name: "tcp - set write timeout", description: "", group: "system - TCP", color: BLUE_COLOR },
  { char: "&tcpaddr", name: "tcp - address", description: "", group: "system - TCP", color: GREEN_COLOR },
  { char: "&httpsw", name: "http - Make an HTTP request", description: "", group: "system - TCP", color: BLUE_COLOR },

  { char: "&ad", name: "audio - decode", description: "", group: "system - audio", color: GREEN_COLOR },
  { char: "&ae", name: "audio - encode", description: "", group: "system - audio", color: BLUE_COLOR },
  { char: "&ap", name: "audio - play", description: "", group: "system - audio", color: GREEN_COLOR },
  { char: "&asr", name: "audio - sample rate", description: "", group: "system - audio", color: RED_COLOR },
  { char: "&ast", name: "audio - stream", description: "", group: "system - audio", color: ORANGE_COLOR },

  { char: "&imd", name: "image - decode", description: "", group: "system - images", color: BLUE_COLOR },
  { char: "&ime", name: "image - encode", description: "", group: "system - images", color: BLUE_COLOR },
  { char: "&ims", name: "image - show", description: "", group: "system - images", color: GREEN_COLOR },

  { char: "&gifd", name: "gif - decode", description: "", group: "system - GIFs", color: GREEN_COLOR },
  { char: "&gife", name: "gif - encode", description: "", group: "system - GIFs", color: BLUE_COLOR },
  { char: "&gifs", name: "gif - show", description: "", group: "system - GIFs", color: BLUE_COLOR },

]


function App() {
  const [groups, setGroups] = React.useState(uiuaGroups)
  const [cards, setCards] = React.useState<FlashCardContent[]>([])

  const [tickCardNames, setTickCards] = React.useState<string[]>([])
  const [crossCardNames, setCrossCards] = React.useState<string[]>([])

  React.useEffect(() => {
    const enabledGroups = groups.filter(g => g.checked).map(g => g.name)
    const enabledSymbols = uiuaSymbols.filter(s => enabledGroups.includes(s.group))
    const fcards: FlashCardContent[] = enabledSymbols.map((uiua) => ({ name: uiua.name, group: uiua.group, front: { title: uiua.char, color: uiua.color }, back: { title: uiua.name, desc: uiua.description, color: uiua.color } }),)
    setCards(fcards)
  }, [groups])


  return (
    <>
      <CheckboxGroup groups={uiuaGroups} onChange={
        (gn, st) => {
          setGroups(g => {
            const groups = g.filter(i => i.name !== gn)
            const previousGroup = g.filter(i => i.name === gn)[0]
            previousGroup.checked = st
            return groups.concat(previousGroup)

          })
        }} />
      <p>
        <button onClick={() => {
          const enabledGroups = groups.filter(g => g.checked).map(g => g.name)
          const enabledSymbols = uiuaSymbols.filter(s => enabledGroups.includes(s.group))
          const fcards = enabledSymbols.map((uiua) => ({ name: uiua.name, group: uiua.group, front: { title: uiua.char, color: uiua.color }, back: { title: uiua.name, desc: uiua.description, color: uiua.color } }),)
          const wrongCards = crossCardNames.map(n => fcards.find(fc => fc.name === n)!)
          const rightCards = tickCardNames.map(n => fcards.find(fc => fc.name === n)!)
          const notRespondedCards = fcards.filter(fc => !tickCardNames.concat(crossCardNames).includes(fc.name))
          setCards(wrongCards.concat(notRespondedCards.concat(rightCards)))
          setCrossCards([])
          setTickCards([])
        }} className="icon-button" style={{ backgroundColor: "#AA0000" }}> RESTART
        </button>
        <span className="tick-icon"></span>RIGHT:{tickCardNames.length}
        <span className="x-icon"></span>WRONG:{crossCardNames.length}
      </p>
      <FlashCardContainer>
        {cards.map(fc =>
          <FlipCard
            key={fc.name}
            front={<CardUiuaSign floor={fc.front} />}
            back={<CardFloor floor={fc.back} />}
            onClick={(right) => {
              right ? setTickCards(tc => tc.concat(fc.name)) : setCrossCards(cc => cc.concat(fc.name))
              setCards(cards => cards.filter(c => c.name !== fc.name))
            }}
          />)}

      </FlashCardContainer>
    </>
  )
}

const CheckboxGroup = ({ groups, onChange }: { groups: UiuaGroup[], onChange: (groupName: String, status: boolean) => void }) => {
  const state = Object.fromEntries(groups.map(g => [g.name, g.checked]))
  const [checkboxes, setCheckboxes] = React.useState(state);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked, });
    onChange(name, checked)
  };

  return (
    <div className="checkbox-group">
      {
        groups.map((group) =>
        (<label>
          <input
            type="checkbox"
            name={group.name}
            checked={checkboxes[group.name]}
            onChange={handleCheckboxChange}
          />
          {group.name}
        </label>))

      }
    </div>
  );
};


function CardUiuaSign({ floor }: { floor: Floor }) {
  return <>
    {floor?.title && <h1 style={{ color: floor.color }}>{floor?.title}</h1>}
  </>
}
function CardFloor({ floor }: { floor: Floor }) {
  return <>
    {floor?.title && <div style={{ color: floor.color }}>{floor?.title}</div>}
    {floor?.draw && <div>{floor?.draw}</div>}
    {floor?.desc && <div>{floor?.desc}</div>}
    {floor?.html && <div>{floor?.html}</div>}
  </>
}

export default App

type FlashCardShape = { front: React.ReactNode, back: React.ReactNode }
function FlashCardContainer(props: { children: React.ReactNode }) {
  return (
    <div className='flash-card-container'>
      {props.children}
    </div>
  )
}

function Sign() {
  return (
    <code><span className="code-font monadic-function">±</span> sign</code>
  )
}

function FlashCard({ front, back }: FlashCardShape) {
  const [rotate, setRotate] = React.useState(false)
  const sharedStyle: CSSProperties = { backfaceVisibility: "hidden", transition: "transform 1.2s" }
  const backStyle: CSSProperties = { transform: "rotateY(180deg)", ...sharedStyle, position: "absolute" }
  const frontStyle: CSSProperties = { transform: "rotateY(0deg)", ...sharedStyle }
  return (
    <>
      <div
        className='flash-card'
        onClick={() => setRotate(state => !state)}
      >
        <div
          style={{ ...(rotate ? backStyle : frontStyle), background: "gray" }}
        >
          {!rotate && <div>{front}</div>}
        </div>
        <div
          style={{ ...(!rotate ? backStyle : frontStyle), background: "gray" }}
        >
          {rotate && <div>{back}</div>}
        </div>
      </div>
    </>
  )
}

function FlipCard({ front, back, onClick }: { front: React.ReactNode, back: React.ReactNode, onClick: (right: boolean) => void }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const flipCardClass = isFlipped ? 'flip-card flipped' : 'flip-card';

  return (
    <div className={flipCardClass} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {front}
        </div>
        <div className="flip-card-back">
          {back}
          <div style={{ marginTop: "auto", marginBottom: "10px" }}>
            <button onClick={() => {
              onClick(true)
            }} className="icon-button">
              <span className="tick-icon"></span>RIGHT
            </button>
            <button onClick={() => {
              onClick(false)
            }} className="icon-button" style={{ backgroundColor: "#AA0000" }}>
              <span className="x-icon"></span>WRONG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
