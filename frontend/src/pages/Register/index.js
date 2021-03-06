import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';

import api from '../../services/api';

function Register() {
    const history = useHistory();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState(''); 
    const [ whatsapp, setWhatsapp ] = useState(''); 
    const [ city, setCity ] = useState(''); 
    const [ uf, setUf ] = useState(''); 

    async function handleRegister(event){
        event.preventDefault();
        
        const data ={
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }catch(err){
            alert('Erro no cadastro tente novamente');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input type="text" 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e => setName(e.target.value) }
                    />
                    <input type="e-mail" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value) }
                    />
                    <input type="text" 
                        placeholder="whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value) }
                    />

                    <div className="input-group">
                        <input type="text" 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value) }
                        />
                        <input type="text" 
                            placeholder="UF" 
                            style={{ width: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value) }
                        />
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;