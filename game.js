kaboom({
    global: true,
    fullscreen: true,
    scale: 4,
    debug: true,
    clearColor: [0, 0, 0, 1]
})


const mvspd = 120

loadSprite("om", "/sprites/om.png")
loadSprite("vyoam", "/sprites/v.png")
loadSprite("vyoamr", "/sprites/vr.png")
loadSprite("vyoaml", "/sprites/vl.png")
loadSprite("vyoamu", "/sprites/vu.png")
loadSprite("tile", "/sprites/t1.png")
loadSprite("bg", "/sprites/bg.png")
loadSound("vyoamTheme", "/music/gng.mp3")




scene("scene1", () => {
    layer(['bg', 'obj', 'ui'], 'obj')
    const map = [
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        'a                               a',
        'a                               a',
        'a                               a',
        'a                               a',
        'a          e                    a',
        'a                               a',
        'a                               a',
        'a                               a',
        'a                               a',
        'a                               a',
        'a                               a',
        'a                               a',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',

    ]

    const levelCfg = {
        width: 14,
        height: 16,
        'a': [sprite('tile'), solid()],
        'e': [sprite('om'), solid(), scale(0.45)],
    }

    addLevel(map, levelCfg)
    add([sprite('bg'), layer('bg')])


    const player = add([
        sprite('vyoam'),
        pos(15, 19),
        {
            dir: vec2(1, 0),


        },
        scale(0.5),

    ])


    player.action(() => {
        player.resolve()
    })
    keyDown('left', () => {
        player.changeSprite('vyoaml')
        player.move(-mvspd, 0)
        player.dir = vec2(-1, 0)

    })
    keyDown('right', () => {
        player.changeSprite('vyoamr')
        player.move(mvspd, 0)
        player.dir = vec2(1, 0)

    })
    keyDown('up', () => {
        player.changeSprite('vyoamu')
        player.move(0, -mvspd)
        player.dir = vec2(0, -1)

    })
    keyDown('down', () => {
        player.changeSprite('vyoam')
        player.move(0, mvspd)
        player.dir = vec2(0, 1)

    })



    const music = play("vyoamTheme", {
        loop: true,
    })

})



start("scene1")