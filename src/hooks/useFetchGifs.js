import { useState, useEffect } from "react";
import { getGif } from "../helpers/giphsHelper";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({data: [], loading: true});

    console.log(category)

    useEffect(() => {
        getGif(category).then((imgs) => setstate({data: imgs, loading: false}));
    }, []);

    

    return state;
}

