import { useState } from 'react';

const ListItems = () => {

    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState('');

    const handleInputChange = (event) => {
        setCurrentItem(event.target.value);
    };

    const handleAddItem = () => {
        if (currentItem.trim() !== '') {
            setItems([...items, currentItem]);
            setCurrentItem('');
        }
    };

    return (
        <>
            <ul>
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )
                }
            </ul>
            
            <div>
                <input
                    type="text"
                    value={currentItem}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>

        </>
    )
}

export default ListItems;