//1) primero se crea el context 

import React, {createContext} from 'react';

const FirebaseContext = createContext(null);

//sera null por ser su valor incial

export default FirebaseContext;