namespace SpriteKind {
    export const e2 = SpriteKind.create()
    export const p2 = SpriteKind.create()
}
namespace StatusBarKind {
    export const Cooldown = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.e2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 300)
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(WaveShape.Sine, 1144, 0, 255, 0, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar.value < 90) {
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 150)
        p2.setKind(SpriteKind.p2)
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 100)
        p2.setKind(SpriteKind.p2)
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 150, 0)
        p2.setKind(SpriteKind.p2)
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 100)
        p2.setKind(SpriteKind.p2)
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -150)
        p2.setKind(SpriteKind.p2)
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, -100)
        p2.setKind(SpriteKind.p2)
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -150, 0)
        p2.setKind(SpriteKind.p2)
        p2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . a a a a a . . . . . . 
            . . . . . a 2 2 1 a . . . . . . 
            . . . . . a 2 2 2 a . . . . . . 
            . . . . . a 2 a a a . . . . . . 
            . . . . . a a a 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, -100)
        p2.setKind(SpriteKind.p2)
        music.play(music.createSoundEffect(WaveShape.Triangle, 2693, 999, 255, 49, 200, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        statusbar.value += 5
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 1 1 3 3 1 1 3 . . . . 
        . . . 3 3 1 3 3 3 3 1 3 3 . . . 
        . . . . 3 3 3 e e 3 3 3 3 . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . 3 c c c c 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . 4 4 2 e e e e 2 4 4 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . 4 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
        . 2 2 2 . . 2 2 2 2 . . 2 2 2 . 
        . 2 2 2 . . . 2 2 . . . 2 2 2 . 
        . 2 2 2 . . 6 6 6 6 . . 2 2 2 . 
        . 2 2 3 . . 6 . . 6 . . 3 2 2 . 
        . 3 3 3 . . 8 . . 8 . . 3 3 3 . 
        . . . . . . . . . . . . . . . . 
        `)
    timer.after(100, function () {
        mySprite.setImage(img`
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . . 3 1 1 3 3 1 1 3 3 . . . 
            . . . 3 3 1 3 3 3 3 1 3 3 . . . 
            . . . 3 3 3 3 e e 3 3 3 . . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . . . 3 c c c c 3 . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . 4 4 2 e e e e 2 4 4 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . 4 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
            . 2 2 2 . . 2 2 2 2 . . 2 2 2 . 
            . 2 2 2 . . . 2 2 . . . 2 2 2 . 
            . 2 2 2 . . 6 6 6 6 . . 2 2 2 . 
            . 2 2 3 . . 6 . . 6 . . 3 2 2 . 
            . 3 3 3 . . 8 . . 8 . . 3 3 3 . 
            . . . . . . . . . . . . . . . . 
            `)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar.value < 90) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 150)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 100)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 150, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 100)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -150)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, -100)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -150, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 2 2 1 5 . . . . . . 
            . . . . . 5 2 2 2 5 . . . . . . 
            . . . . . 5 2 5 5 5 . . . . . . 
            . . . . . 5 5 5 4 4 . . . . . . 
            . . . . . 4 4 4 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, -100)
        music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 0, 255, 0, 200, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        statusbar.value += 5
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . 3 1 1 3 3 1 1 3 3 . . . 
        . . . 3 3 1 3 3 3 3 1 3 3 . . . 
        . . . 3 3 3 3 e e 3 3 3 . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . . . 3 c c c c 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . 4 4 2 e e e e 2 4 4 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . 4 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
        . 2 2 2 . . 2 2 2 2 . . 2 2 2 . 
        . 2 2 2 . . . 2 2 . . . 2 2 2 . 
        . 2 2 2 . . 6 6 6 6 . . 2 2 2 . 
        . 2 2 3 . . 6 . . 6 . . 3 2 2 . 
        . 3 3 3 . . 8 . . 8 . . 3 3 3 . 
        . . . . . . . . . . . . . . . . 
        `)
    timer.after(100, function () {
        mySprite.setImage(img`
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 3 1 1 3 3 1 1 3 . . . . 
            . . . 3 3 1 3 3 3 3 1 3 3 . . . 
            . . . . 3 3 3 e e 3 3 3 3 . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . . . 3 c c c c 3 . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . 4 4 2 e e e e 2 4 4 . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . 4 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
            . 2 2 2 . . 2 2 2 2 . . 2 2 2 . 
            . 2 2 2 . . . 2 2 . . . 2 2 2 . 
            . 2 2 2 . . 6 6 6 6 . . 2 2 2 . 
            . 2 2 3 . . 6 . . 6 . . 3 2 2 . 
            . 3 3 3 . . 8 . . 8 . . 3 3 3 . 
            . . . . . . . . . . . . . . . . 
            `)
    })
})
info.onCountdownEnd(function () {
    scene.setBackgroundColor(8)
    effects.blizzard.startScreenEffect()
    sprites.destroyAllSpritesOfKind(SpriteKind.Food, effects.fire, 200)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.vx = 60
        value.vy = 80
    }
    info.startCountdown(60)
})
sprites.onOverlap(SpriteKind.p2, SpriteKind.e2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(WaveShape.Noise, 2552, 0, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite, effects.disintegrate, 200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(WaveShape.Noise, 2552, 0, 255, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    scene.cameraShake(4, 300)
    sprites.destroy(otherSprite)
    music.play(music.createSoundEffect(WaveShape.Sine, 1144, 0, 255, 0, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
let turkey: Sprite = null
let e2: Sprite = null
let myEnemy: Sprite = null
let projectile: Sprite = null
let p2: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 1 1 3 3 1 1 3 . . . . 
    . . . 3 3 1 3 3 3 3 1 3 3 . . . 
    . . . c 3 3 3 e e 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 c . . . 
    . . . . c 3 c c c c 3 c . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . 4 4 2 e e e e 2 4 4 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . 4 2 2 2 2 2 2 2 2 2 2 2 2 4 . 
    . 2 2 2 c c 2 2 2 2 c c 2 2 2 . 
    . 2 2 2 . . c 2 2 c . . 2 2 2 . 
    . 2 2 2 . . 6 6 6 6 . . 2 2 2 . 
    . 2 2 3 . . 6 . . 6 . . 3 2 2 . 
    . 3 3 3 c . 8 . . 8 . c 3 3 3 . 
    . . c c c . . . . . . c c c . . 
    `, SpriteKind.Player)
info.setLife(10)
tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
statusbar = statusbars.create(20, 4, StatusBarKind.Cooldown)
statusbar.value = 0
statusbar.positionDirection(CollisionDirection.Bottom)
statusbar.setLabel("COOLDOWN")
statusbar.setColor(2, 15)
statusbar.setOffsetPadding(0, 5)
info.startCountdown(60)
game.onUpdateInterval(50, function () {
    if (!(controller.A.isPressed()) || !(controller.B.isPressed())) {
        statusbar.value += -1
    }
})
game.onUpdateInterval(700, function () {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.collectibleInsignia)
    myEnemy.setVelocity(30, 50)
    myEnemy.setBounceOnWall(true)
})
game.onUpdateInterval(700, function () {
    e2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ffaaaaff........
        .......fbaaaaaabf.......
        .......faaaaaaaaf.......
        ......f8aaaaaaaa8f......
        ......f8aaaaaaaa8f......
        ......f888aaaa888f......
        ......fb8bf88fb8bf......
        ......fc8cfaafc8cf......
        .......fbaaaaaabf.......
        ......fffc8ba8affff.....
        ....fcaaacbfbfcaaacf....
        ....fababaffffababaf....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.e2)
    tiles.placeOnRandomTile(e2, sprites.dungeon.collectibleInsignia)
    e2.setVelocity(30, 50)
    e2.setBounceOnWall(true)
})
game.onUpdateInterval(7000, function () {
    turkey = sprites.create(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(turkey, assets.tile`transparency16`)
})
