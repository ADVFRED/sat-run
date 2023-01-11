// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`60000800000000000000000000000000000000000000000000000000000000000202020505050505050505050202050505050502050505050505050500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202050505050505020303020205050505050505050505050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020505020202030303030302020505050303030303030000000000000000000000000000000000000000000600060006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020303030303030303030303030303030303000000000000000000000000000000000000000101010000000000010100000000000000000000000000000000000000000000000000000000000000010101010000000000000000000000000000000303030303030303030303030303030304040401010100000000000000000000000001010202020000000000020201010000000000000000000000000000000000000000000000000000010101020505020101000000000000000000000000000303030303030303030303030303040405050505020201010000000000000001010102020202020000000000020202020101000000000000000000000000000000000000000000000101020202050505050202010000000000000000000001010404030303030303030303030404050505050505050502020101010101010102020202020205050808080808050202020202010100000000000000010101010101010101010101010202020205050505050502020101010101010101010102050505040404070704040404040505050505050505050505050202020202020202020202020205050505050505050202020202020201010101010101`, img`
............................2...........22.............2........................................
.............................22........2..22.....222222.........................................
...............................2.....22.....22222...........................2.2.2...............
................................22222....................................222.....22.............
..................2222...............................222222............22..2.....2.22...........
...............2222...22...........................22......22.......222....2.....2...22.........
.............22.........2..........2222..........22..........2222222.......2.....2.....22.......
2222222222222222.........2222222222....222..22222..........................2222222.......2222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "spike0":
            case "tile7":return tile7;
            case "spike":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
