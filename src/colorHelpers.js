
import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    for(let level of levels) {
        newPalette.colors[level] = [];
    }
    for(let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for(let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                // Replace a space globally with a dash
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }
    return newPalette;
}

function getRange(hexColor) {
    const end = "#fff";
    return [
        // Color being wrapped in chroma to darken it and get a hex value.
        // Middle value is our hex value and end value is white.
        chroma(hexColor).darken(1.4).hex(),
        hexColor,
        end
    ]
}

function getScale(hexColor, numberOfColors) {
    // .colors() will take the scale generated (which is not an array of numbers yet) and will give you the number of
    // colors specified in numberOfColors.
    return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors)
}

export {generatePalette};