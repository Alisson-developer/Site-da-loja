import React, { useState, useMemo } from 'react'
import api from '../../services/api'
import './index.css'

import plus from '../../assets/plus.png'

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null)
    const [nameProduct, setNameProduct] = useState('')
    const [typeProduct, setTypeProduct] = useState('')
    const [price, setPrice] = useState('')

    const preview = useMemo(() =>{
        return thumbnail ? URL.createObjectURL(thumbnail): null
    },[thumbnail])

    async function handleSubmit(event){
        event.preventDefault()

        const data = new FormData()
        const enterprise_id = localStorage.getItem('empresa')

        data.append('thumbnail', thumbnail)
        data.append('nameProduct', nameProduct)
        data.append('typeProduct', typeProduct)
        data.append('price', price)

        await api.post('/products', data, { headers: {enterprise_id}})
        
        alert('Produto salvo com sucesso!')

    }

    function backRoute(){
        history.push('/')
    }

    return (
        <>
            <div id="back" onClick={backRoute}>&#9754; <p>Voltar</p></div>
            <h1>Registrar Produto</h1>

            <form onSubmit={handleSubmit}>
            
            <label id="thumbnail" 
                   style={{backgroundImage: `url(${preview})`}}
                   className={thumbnail ? 'has-thumbnail': ''}
            >
                <input type="file" onChange={event =>{setThumbnail(event.target.files[0])}} />
                <img src={plus} alt="Selecionar Imagem" />
            </label>

            <label htmlFor="nameProduct">Nome de Produto *</label>
            <input type="text"
                   id="nameProduct"
                   placeholder="Seu produto"
                   value={nameProduct}
                   onChange={event => {setNameProduct(event.target.value)}}
            />

            <label htmlFor="typeProduct">Tipo de Produto *</label>
            <input type="text"
                   id="typeProduct"
                   placeholder="Ex.: não pereciveis"
                   value={typeProduct}
                   onChange={event => {setTypeProduct(event.target.value)}}
            />

            <label htmlFor="price">Preço *</label>
            <input type="text"
                   id="price"
                   placeholder="R$0,00"
                   value={price}
                   onChange={event => (setPrice(event.target.value))}
            />

            <button className="btn" type="submit">Registrar</button>

            </form>
        </>
    )
}