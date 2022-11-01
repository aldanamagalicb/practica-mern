import React from 'react'

export default function BotonCambiar(props) {
    let {nombre, estilos, accion} = props;
  return (
    <button className={estilos} onClick={accion}>{nombre}</button>
  )
}