import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);
    
    // useEffect(() => {
    //     getGif(category).then((imgs) => setImages(imgs));
    // }, [category])

    
    return (
        <>
            <h5 className='animate__animated animate__fadeInLeft'>{category}</h5>
            { loading && 'Cargando...'}
            <div className='card-grid'>
                <br/>
                { images.map(img => <GifGridItem key={img.id} img={img} className="card" />) }
            </div>
        </>
    );
}
