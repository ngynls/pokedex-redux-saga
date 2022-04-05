const PokedexUtils = {

    capitalizeName: (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    },
    convertHeightToMeters:(height) => {
        let heightInMeters = height / 10;
        return heightInMeters.toFixed(1);
    },
    convertWeightToKg: (weight) => {
        let lbs = weight / 4.536;
        let kg = lbs / 2.205;
        return kg.toFixed(1);
    },
    getTypeColor: (type) => {
        switch (type){
            case "fire":
                return "#F7786B";
            case "water":
                return "#77C4FE";
            case "poison":
                return "#7C538C";
            case "grass":
                return "#4FC1A6";
            case "electric":
                return "#FFCE4B";
            case "rock":
                return "#B1736C";
            case "dark":
                return "#565669";
            case "flying":
                return "#cdcde6";
            case "dragon":
                return "#f7af5a";
            case "bug":
                return "#92df68";
            case "ground":
                return "#be7447";
            case "psychic":
                return "#405483";
            case "fighting":
                return "#a2a29b";
            case "ghost":
                return "#9473b4";
            case "ice":
                return "#a4def6";
            default:
                return "#c5c5c5";
        }
    }
};

export default PokedexUtils;