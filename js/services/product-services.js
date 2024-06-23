

/* se crea una función para hacer las requisiciones*/ 



const productList = () =>{

    return fetch("https://seba-3.vercel.app/products") /* el fecth trabaja con programación asícrona*/
            .then((res) => res.json()) /** res = respuesta */
            .catch( (err) => console.log(err));
}

/**función para agregar producto */

const createProducts = (name, price, image) =>{

    return fetch("https://seba-3.vercel.app/products", {

        method: "POST",
        headers: {

            "Content-Type": "application/json", /**Tipo de la requisición en el header, que en este caso es json */
        },
        body: JSON.stringify({ /**stringif -> lo transforma a todo en texto */

                name,
                price,
                image,

        }),
    }).then ((res) =>  {
        // Después de crear el producto, recarga la página
        location.reload();
        return res.json();
    }).catch((err) => console.log(err));

};


/**función para eliminar producto */

const deleteProducts = (id) => {
    return fetch(`https://seba-3.vercel.app/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(res => res.json())
        .catch(err => console.error(err));
};

export const servicesProducts = {

    productList,
    createProducts,
    deleteProducts,
}
