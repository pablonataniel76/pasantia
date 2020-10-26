// import React, { useState, useEffect } from 'react';
// import {
//   Form,
//   Input,
//   Button,
//   InputNumber,
// } from 'antd';

// // function Example() {

// //   const [count, setCount] = useState(0);

// function Example() {
//     const [count, setCount] = useState(['']);
  
//     useEffect(() => {    document.title = `You clicked ${count} times`;  });

//     function handleClick() {
//         console.log(aux3);
//     }

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <Form
//                 labelCol={{
//                 span: 4,
//                 }}
//                 wrapperCol={{
//                 span: 10,
//                 }}
//             >
//                 <Form.Item label="Name">
//                 <Input />
//                 </Form.Item>
//                 <Form.Item label="Last Name">
//                 <Input />
//                 </Form.Item>
//                 <Form.Item id="aux" name="id2" label="Age">
//                 <InputNumber id="aux3" name="id3" />
//                 </Form.Item>
//                 <Form.Item
//                     name={['user', 'email']}
//                     label="Email"
//                     rules={[
//                     {
//                         type: 'email',
//                     },
//                     ]}
//                 >
//                 <Input />
//             </Form.Item>

//                 <Form.Item>
//                     {/* <Button onClick={() => setCount(id)}> */}
//                     <Button onClick={handleClick}>
//                         Enviar
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     );
// }

// export default Example;

import { Button, notification } from 'antd';
import { Input } from 'antd';
import React, {Fragment, useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        edad: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    // const enviarDatos = (event) => {
    //     event.preventDefault()
    //     console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido + datos.edad)
    // }

    const openNotification = () => {
        notification.open({
          message: 'Nuevo usuario',
          description:
            'click' + '{datos}',
          onClick: () => {
            console.log({datos.apellido});
          },
        });
      };

    return (
        <Fragment>
            <h1>Registrarse</h1>
            <form className="row" onSubmit={openNotification}>
                <div className="col-md-3">
                    <Input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"/>
                </div>
                <div className="col-md-3">
                    <Input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"/>
                </div>
                <div className="col-md-3">
                    <Input type="text" placeholder="Edad" className="form-control" onChange={handleInputChange} name="edad"/>
                </div>
                <Button type="submit" className="btn btn-primary" onClick={openNotification}>Enviar</Button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
                <li>{datos.edad}</li>
            </ul>
        </Fragment>
    );
}
 
export default Formulario;
