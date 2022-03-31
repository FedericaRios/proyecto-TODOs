import React from 'react';

function useLocalStorage(itemName, initialValue) {  //custom hook 
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {    //si los usuarios son nuevos y no hay 
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 2000);
    });

    const saveItem = (newItem) => {   //guarda los cambios, sirve como puente entre las funciones complete, delete y el local Storage y estado.
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };




