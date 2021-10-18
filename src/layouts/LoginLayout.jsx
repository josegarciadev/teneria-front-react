import React,{useEffect, useState} from 'react'
//import { Redirect } from 'react-router'
import axiosFetch from '../config/config'

const LoginLayout = (props) => {

    const [Form, setForm] = useState({
        email:'',
        password:''
    })
    const handleLogin = async (e)=>{
        e.preventDefault();
        await axiosFetch.post('/v1/user/login',Form).then(({data})=>{
            console.log(data)
            localStorage.setItem('user-token',JSON.stringify(data));
            if(data.roles?.includes('admin')){

                props.history.push('/dashboard')

            }else if(data.roles?.includes('partner')){
                console.log('partner')
            }else if(data.roles?.includes('user')){
                console.log('user')
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
    const handleChangeInput=(e)=>{

        setForm({
            ...Form,
            [e.target.name]:e.target.value
        })
    }
    useEffect(() => {
    }, [])
    return (
        <section className="container d-flex  flex-column justify-content-center " style={{ height: '100vh' }}>

            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <h2 className="heading-section">Teneria Rubio C.A</h2>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="col-md-7 col-lg-5 card rounded-lg shadow-lg">
                    <div className="login-wrap p-4 p-md-5">
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-user-o"></span>
                        </div>
                        <h3 className="text-center mb-4">Inicia Sesión</h3>
                        <form action="#" className="login-form">
                            <div className="form-group">
                                <input type="text" value={Form.email} className="form-control rounded-left" name="email" onChange={(e)=>handleChangeInput(e)} placeholder="Email" required />
                            </div>
                            <div className="form-group d-flex">
                                <input type="password" value={Form.password} className="form-control rounded-left" name="password" placeholder="Contraseña" onChange={(e)=>handleChangeInput(e)} required />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary rounded submit px-3" onClick={(e)=>handleLogin(e)}>Ingresar</button>
                            </div>
                            <div className="form-group d-md-flex">
                                <div className="w-50">
                                    <label className="checkbox-wrap checkbox-primary px-2">
                                        Recuerdame
                                    </label>
                                    <input type="checkbox" checked />
                                    <span className="checkmark "></span>
                                </div>
                                <div className="w-50 text-md-right">
                                    <a href="#">¿Olvidaste la contraseña?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p>¿No tienes cuenta? <a href="#">Registrate</a></p>
            </div>

        </section>
    )
}

export default LoginLayout
