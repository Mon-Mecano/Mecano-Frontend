import { useState, useEffect } from "react";
import axios from "./Axios";

const Test = () => {
    const [pokemon, setpokemon] = useState({});
    useEffect(() => {getPokemon()},[]);
    const getPokemon = async () => {
        try {
            const response = await axios.get('/pokemon/ditto');
            setpokemon(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <h1>Test</h1>
    )
}

export default Test;