



export function addItemInLocalStorage(product) {
    let productInStorage = localStorage.getItem('Products')

    if (productInStorage) {
        
        productInStorage = JSON.parse(productInStorage)

        let productIndex = productInStorage.findIndex((obj)=>{
           return obj.id === product.id
        })

        if(productIndex == -1){
            productInStorage.push(product)
        }
        else{
            productInStorage[productIndex].quantity++
        }
    }

    else{
        productInStorage = [product]
    }

    localStorage.setItem('Products', JSON.stringify(productInStorage))

    return productInStorage
}

export function getItemFromLocalStorage() {
   let productInStorage = localStorage.getItem('Products')
    if (productInStorage) {
        return JSON.parse(productInStorage)
    }
    else{
        return []
    }
}

export function updateItemInLocalStorage(id , updatedobj) {
   let productInStorage = localStorage.getItem("Products");
    productInStorage = JSON.parse(productInStorage)
    let productIndex = productInStorage.findIndex((obj)=> obj.id === id)

    if(productIndex === -1){
        return "PRODUCT NOT FOUND"
    }
 
    productInStorage[productIndex] = updatedobj;
    localStorage.setItem("Products", JSON.stringify(productInStorage))
    
    
}


export function deleteItemFromLocalStorage(id) {
    let productInStorage = localStorage.getItem("Products")

    productInStorage = JSON.parse(productInStorage);

    let productIndex = productInStorage.findIndex((obj) => obj.id === id);

    if(productIndex === -1){
        return "NO PRODUCT FOUND"
    }

    productInStorage.splice(productIndex,1)

    localStorage.setItem("Products", JSON.stringify(productInStorage))

}
    


