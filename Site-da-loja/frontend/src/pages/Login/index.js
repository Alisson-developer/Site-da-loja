import React, { useState } from 'react'
import api from '../../services/api'

export default function Login({ history }) {
    const [empresa, setEmpresa] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(event){
        event.preventDefault()
        
        const response = await api.post('/enterprise', { empresa, senha })
        const { _id } = response.data
        
        localStorage.setItem('empresa', _id)

        if(_id){
            history.push('/sessions')
        }else{
            alert('Usuário não encontrado!')
            
        } // proxima rota a ser exibida.
        
    }
    return (
        <>            
            <p>Cadastre sua empresa.</p>
            
            <form onSubmit={handleSubmit}>
            <label htmlFor="empresa">Nome da empresa *</label>
            <input 
                type="text"
                id="empresa"
                placeholder="Sua empresa"
                value={empresa}
                onChange= {event => {setEmpresa(event.target.value)}}
            />

            <label htmlFor="senha">Senha *</label>
            <input 
                type="password" 
                id="senha" 
                placeholder="Senha da empresa" 
                value={senha}
                onChange={event => {setSenha(event.target.value)}}
            />

            <button className="btn" type="submit">Cadastrar</button>

            </form>
        </>
    )
}