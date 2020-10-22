export const reducer = (state, action) => {
    switch(action.type) {
    
        case 'ADD_TRANSACTION': 
            
            return {
                    ...state,
                    transaction: [action.payload, ...state.transaction]
            };

        case 'DELETE_TRANSACTION': 
        
            return {
                ...state,
                transaction: state.transaction.filter(trans=> trans.name !== action.payload)
            }
    }
} 