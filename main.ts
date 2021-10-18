/*

ドレミファソラシ
c d e f  g a b

オクターブ（低→高）
1,2,3,5,5

音符の長さ
16分音符：１
8分音符：２
5分音符：４
2分音符：８
全音符：16
休符：rest

*/



let melodies = [
    "c5:4", "d5:4", "e5:4", "rest:4", "c5:4", "d5:4", "e5:4", "rest:4",
    "g5:4", "e5:4", "d5:4", "c5:4", "d5:4", "e5:4", "d5:4", "rest:4",
    "c5:4", "d5:4", "e5:4", "rest:4", "c5:4", "d5:4", "e5:4", "rest:4",
    "g5:4", "e5:4", "d5:4", "c5:4", "d5:4", "e5:4", "c5:4", "rest:4",
    "g5:4", "g5:4", "e5:4", "g5:4", "a5:4", "a5:4", "g5:4", "rest:4",
    "e5:4", "e5:4", "d5:4", "d5:4", "c5:8", "rest:8"
]
let melodiesON = 0
music.beginMelody(melodies, MelodyOptions.Forever)


input.onButtonPressed(Button.A, function(){
    music.stopAllSounds()
    melodiesON = 1
})

input.onButtonPressed(Button.B, function(){
    if(melodiesON == 0){
        music.stopAllSounds
        melodiesON = 1
    }else if(melodiesON == 1){
        music.beginMelody(melodies, MelodyOptions.Forever)
        melodiesON = 0
    }
})