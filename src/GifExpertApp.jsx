import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

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