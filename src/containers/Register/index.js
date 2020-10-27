import { Button, notification } from 'antd';
import { Input, Form } from 'antd';
import {Fragment, useEffect} from 'react';
import React, {useReducer} from 'react';
//
const initialState = {
  name: '',
  lastname: '',
  age: '',
  email: '',
}

function reducer(state, {field, value}) {
  return {
    ...state,
    [field]: value
  }
}
//

const Formulario = () => {
//
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({
      field: e.target.name,
      value: e.target.value
    })
  }

  const { name, lastname, age, email } = state
  console.log(state)
//
    const openNotification = () => {
        notification.open({
          message: 'Nuevo usuario',
          description:
            `El usuario ${state.name} ${state.lastname} ha sido registrado`,
          onClick: () => {
            console.log(state.name);
          },
        });
      };
    
      useEffect(() => {
        console.log(state);
        return () => {
            console.log("Se desmontó el componente register");
        }
    }, [])

    return (
        <Fragment>
            <h1>Registrarse</h1>
            <Form className="row" onSubmit={openNotification}>
                <Form.Item
                label="Nombre"
                rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input name="name" value={name} onChange={onChange} />
                </Form.Item>

                <Form.Item
                label="Lastname"
                rules={[{ required: true, message: 'Please input your lastname!' }]}
                >
                    <Input name="lastname" value={lastname} onChange={onChange}/>
                </Form.Item>

                <Form.Item
                label="Age"
                rules={[{ required: true, message: 'Please input your age!' }]}
                >
                    <Input name="age" value={age} onChange={onChange}/>
                </Form.Item>

                <Form.Item
                label="Email"
                rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input name="email" value={email} onChange={onChange}/>
                </Form.Item>
                <Button type="submit" className="btn btn-primary" onClick={openNotification} >Enviar</Button>
            </Form>
        </Fragment>
    );
}
 
export default Formulario;
