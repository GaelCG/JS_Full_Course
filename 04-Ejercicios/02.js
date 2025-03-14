/**
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 *
*/

function resolucion(high, low) {
    if (high >= 7680 && low >= 4320) {
        return "8K";
    }
    else if (high >= 3840 && low >=2160) {
        return "4K";
    }
    else if (high >= 2560 && low >= 1440) {
        return "WQHD";
    }
    else if (high >= 1920 && low >= 1080) {
        return "FHD";
    }
    else if (high >= 1280 && low >= 720) {
        return "HD";
    }
    else {
        return "no es una resolución válida";
    }
}
let resolucion2 = resolucion(1800, 800);
console.log("la resolución es: ", resolucion2);