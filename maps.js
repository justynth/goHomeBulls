// maps[level][row][col]
// 1-block 2-wall 3-box 4-ball 5-man 6-box&ball 7-man&ball
const MAP_CODE = {
    block: 1,
    wall: 2,
    box: 3,
    ball: 4,
    man: 5,
    boxBall: 6,
    manBall: 7,
}
const CONFIG = {
    blockWidth: 40,
}
window.boxMaps = [
    // 1
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 2, 2, 2, 1, 1, 1, 1,],
        [1, 1, 1, 2, 4, 2, 1, 1, 1, 1,],
        [1, 1, 1, 2, 3, 2, 2, 2, 2, 1,],
        [1, 2, 2, 2, 1, 1, 3, 4, 2, 1,],
        [1, 2, 4, 3, 1, 5, 2, 2, 2, 1,],
        [1, 2, 2, 2, 2, 3, 2, 1, 1, 1,],
        [1, 1, 1, 1, 2, 4, 2, 1, 1, 1,],
        [1, 1, 1, 1, 2, 2, 2, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    ],
    // 2
    [
        [2, 2, 2, 2, 2, 1, 1, 1, 1, 1,],
        [2, 5, 1, 1, 2, 1, 1, 1, 1, 1,],
        [2, 1, 3, 3, 2, 1, 2, 2, 2, 1,],
        [2, 1, 3, 1, 2, 1, 2, 4, 2, 1,],
        [2, 2, 2, 1, 2, 2, 2, 4, 2, 1,],
        [1, 2, 2, 1, 1, 1, 1, 4, 2, 1,],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 1,],
        [1, 2, 1, 1, 1, 2, 2, 2, 2, 1,],
        [1, 2, 2, 2, 2, 2, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    ],
    // 3
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 2, 1, 1, 1, 1, 1, 2, 2, 2,],
        [2, 2, 3, 2, 2, 2, 1, 1, 1, 2,],
        [2, 1, 5, 1, 3, 1, 1, 3, 1, 2,],
        [2, 1, 4, 4, 2, 1, 3, 1, 2, 2,],
        [2, 2, 4, 4, 2, 1, 1, 1, 2, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    ],
]