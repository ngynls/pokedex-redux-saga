const PokedexUtils={

    capitalizeName: (name)=> {
        return name.charAt(0).toUpperCase() + name.slice(1);
    },
    convertHeightToMeters:(height)=>{
        let heightInMeters=height/10;
        return heightInMeters.toFixed(1);
    },
    convertWeightToKg: (weight) =>{
        let lbs = weight / 4.536;
        let kg = lbs / 2.205;
        return kg.toFixed(1);
    }
}

export default PokedexUtils;