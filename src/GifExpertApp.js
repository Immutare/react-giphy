import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Piece', 'Naruto', 'Samurai X'];
    const [categories, setCategories] = useState(['One Piece'])
    // const handleAdd = () => {
    //     setCategories([...categories, 'Agregado']);
    // };

    return (
        <div>
            <h2>Gif Expert</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map((cat) => (
                    
                    <GifGrid 
                        key={ cat }
                        category={ cat }/>
                    ))
                }
            </ol>

        </div>
    );
}