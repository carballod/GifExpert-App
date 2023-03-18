import { useState } from 'react';
import { AddCategory, GifGrid }from './components';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Hunter X Hunter']);

    const onAddCategory = ( NewCategory ) => {
        
        if ( categories.includes( NewCategory ) ) return;

        setCategories([ NewCategory, ...categories ]);

    };

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />


            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }/>
                ))
            }

        </>
    )
}