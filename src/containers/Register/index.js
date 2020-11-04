import { Button, Cascader, notification, Select } from 'antd';
import { Input, Form } from 'antd';
import {Fragment, useEffect} from 'react';
import React, {useReducer} from 'react';
import { Option, OptGroup } from 'antd/lib/mentions';
//
const options = [
  {
    label: "Bolivia",
    value: "bolivia",
  },
  {
    label: "Peru",
    value: "peru",
  },
  {
    label: "Colombia",
    value: "colombia",
  },
];

//
const initialState = {
  name: '',
  lastname: '',
  ci: '',
  age: '',
  country: '',
  city: '',
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

  const { name, lastname, ci, age, country, city } = state
  console.log(state)
//
    const openNotification = () => {
        notification.open({
          message: 'Nuevo usuario',
          description:
            `El usuario ${state.name} 
                        ${state.lastname} 
                        ${state.ci} 
                        ${state.age} 
                        ${state.country} 
                        ${state.city}  
            ha sido registrado`,
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
                label="Apellido"
                rules={[{ required: true, message: 'Please input your lastname!' }]}
                >
                    <Input name="lastname" value={lastname} onChange={onChange}/>
                </Form.Item>

                <Form.Item
                label="CI"
                rules={[{ required: true, message: 'Please input your ci!' }]}
                >
                    <Input name="ci" value={ci} onChange={onChange}/>
                </Form.Item>

                <Form.Item
                label="Edad"
                rules={[{ required: true, message: 'Please input your age!' }]}
                >
                    <Input name="age" value={age} onChange={onChange}/>
                </Form.Item>
              
                <Form.Item
                  label="Pais"
                >
                  
                  <select name="country" value={country} onChange={onChange}>
                    {options.map((option) => (
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  

                </Form.Item>
                <Form.Item
                label="Ciudad"
                rules={[{ required: true, message: 'Please input your city!' }]}
                >
                    <Input name="city" value={city} onChange={onChange}/>
                </Form.Item>

                <Button type="submit" className="btn btn-primary" onClick={openNotification} >Enviar</Button>
                <Button type="" className="btn btn-primary" onClick={openNotification} >Iniciar Sesion</Button>
            </Form>
        </Fragment>
    );
}
 
export default Formulario;
