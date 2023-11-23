import React from 'react';

import './App.css';


import Name from './Name';
import Description from './Description';
import Image from './Image';
import Price from './Price';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const a= prompt("Enter your first name:");



function App() {

  return (

    <div className='info'>
{/* exportation  les component  name.js price.js description.js image.js */}
<div className='TT'>

<h2>< Name /></h2>
 

 <p>
 < Price />
< Description />
 </p>


< Image />
</div>


<div>
{/* creation card avec bootstarp  */}
<Card style={{ width: 300 }}>
      <Card.Img variant="top"  />< Image />
      <Card.Body>
        <Card.Title>< Name /></Card.Title>
        <Card.Text>
        < Price />
        < Description />
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>


{/* Affichez un message  indiquant Bonjour votre nom et affichage une image  */}
<div className='alert' style={{ width: 500 }} >
    <h2>hello , {a ? a : "there !"}!</h2>
    {a && <img src='https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym95fGVufDB8fDB8fHww'/>}
    </div>



    </div>
  )
}

export default App