
export const ADD_TO_CART ="ADD_TO_CART";
export const REMOVE_TO_CART ="REMOVE_TO_CART";
export const EDIT_TO_CART ="EDIT_TO_CART";




export function addToCart(data){
    
console.log(data)
return{

    type:'ADD_TO_CART',
    data:data // or direct data , 
}

}

export const removeToCart=(data)=>{

    return{
    
        type:'REMOVE_TO_CART',
        data:data // or direct data , 
    }
    
    }


    export const edit=(data)=>{

        return{
        
            type:'EDIT_TO_CART',
            data:data // or direct data , 
        }
        
        }