import PokedexUtils from "./PokedexUtils";

test("capitalizes succesfully the input", () => {
    const name = "bulbasaur";
    const capitalizedName = PokedexUtils.capitalizeName(name);
    expect(capitalizedName).toEqual("Bulbasaur");
});

test("converts successfully the height from dm to m", () => {
    const heightInDm = 7;
    const convertedHeight = PokedexUtils.convertHeightToMeters(heightInDm);
    expect(convertedHeight).toEqual("0.7");
});

test("converts successfully hg to kg", () => {
    const weightInHg = 69;
    const convertedWeight = PokedexUtils.convertWeightToKg(weightInHg);
    expect(convertedWeight).toEqual("6.9");
});

test("returns the correct hex color code for a fire type pokemon", () => {
    const hexcode = PokedexUtils.getTypeColor("fire");
    expect(hexcode).toEqual("#F7786B");
});