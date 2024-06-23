import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

/* **  Para crear dinámicamente a las cards  ****/

function createCard(name, price, image, id) {

    const card = document.createElement("div");

    card.classList.add("card") /**estelización, llamada lista-productos*/
    card.innerHTML = `
        
                <div class="producto">
                   <img src="${image}" alt="${name}"> <!--creamos una interopalción -->
                </div>

                <div class="producto-container--info">
                    <p>${name}</p>
                    <div>
                        <p>$ ${price}</p>
                        <button class="delete-button" data-id="${id}">
                            <img src="./assets/Imagen/trash.svg" alt="Borrar">
                        </button>

                    </div>


                </div>
    `;

    productContainer.appendChild(card);
    return card;

}


const render = async() => { /* * Función asíncrona = async***/

    try {

        const listProducts = await servicesProducts.productList();
        console.log(listProducts) /** es para verificar que sí están llegando esos productos */
        
        /**Para que se se vea en la app se uliza un forEach */
        listProducts.forEach(product => {
            productContainer.appendChild(

                createCard(

                    product.name,
                    product.price,
                    product.image,
                    product.id
                )

            )
            
        });

    } catch (error) {
        
        console.log(error); /**para que muestre el error en la consola */
    }
};

form.addEventListener("submit", (event) =>{

    event.preventDefault(); /**eventDefault -> va a evitar que el formulario tenga un compartamiento default */

    const name =document.querySelector("[data-name]").value; /**es par que captue el valor del formulario */
    const price =document.querySelector("[data-price]").value;
    const image =document.querySelector("[data-image]").value;


   /* console.log(name);
    console.log(price);
    console.log(image);*/

    servicesProducts.createProducts(name, price, image).then((res) =>console.log(res)).catch((err)=>
    console.log(err));

} )

document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.querySelector('.contenedor-productos');
    const form = document.querySelector('[data-form]');
    const clearButton = document.querySelector('.limpiar-input');

    // Función para eliminar productos
    const handleDeleteProduct = async (event) => {
        const button = event.target.closest('.delete-button');
        if (!button) return;
        
        const id = button.getAttribute('data-id');
        if (id) {
            await servicesProducts.deleteProducts(id);
            // Remover el producto del DOM
            button.closest('.card').remove();
        }
    };

    // Event listener para los botones de eliminar en las tarjetas
    productContainer.addEventListener('click', handleDeleteProduct);

    // Función para limpiar el formulario
    const handleClearForm = () => {
        form.reset();
    };

    // Event listener para el botón de borrar del formulario
    clearButton.addEventListener('click', handleClearForm);

    // Función para agregar un producto al DOM
    const addProductToDOM = (product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');
        productCard.setAttribute('data-id', product.id);
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Precio: $${product.price}</p>
            <button class="delete-button" data-id="${product.id}">
                <img src="assets/Imagen/trash.svg" alt="borrar">
            </button>
        `;
        productContainer.appendChild(productCard);
    };

    // Cargar productos existentes al iniciar
    const loadProducts = async () => {
        const products = await servicesProducts.productList();
        products.forEach(addProductToDOM);
    };

    loadProducts();
});