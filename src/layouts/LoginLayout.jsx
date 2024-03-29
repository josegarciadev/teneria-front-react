import React,{useEffect, useState} from 'react'
import axiosFetch from '../config/config'
import LoadingSpinner from '../components/Loading/Loading'
import Swal from 'sweetalert2'

const LoginLayout = (props) => {

    const [Form, setForm] = useState({
        email:'',
        password:''
    })
    const [loading, setLoading] = useState(false)
    const handleLogin = async (e)=>{
        e.preventDefault();

        setLoading(true);
        await axiosFetch.post('/user/login',Form).then(({data})=>{
            localStorage.setItem('user-token',data.token);
            localStorage.setItem('user',JSON.stringify(data));
            setLoading(false);
            if(data.roles?.includes('admin')){
                props.history.push('/admin/dashboard')
            }else if(data.roles?.includes('root')){
                props.history.push('/ROOT/dashboard')
            }else if(data.roles?.includes('user')){
                props.history.push('/user/dashboard')
            }
        }).catch((error)=>{
            setLoading(false);
            Swal.fire({
                title: 'Error!',
                text: 'Su correo/contraseña no es valida',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
    }
    const handleChangeInput=(e)=>{

        setForm({
            ...Form,
            [e.target.name]:e.target.value
        })
    }
    const handleCheckLogin = ()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        
        if(user && user.roles?.includes('admin'))
        {
            props.history.push('/admin/dashboard')
        }else if(user && user.roles?.includes('root')){
            props.history.push('/ROOT/dashboard')
        }else if(user && user.roles?.includes('user')){
            props.history.push('/user/dashboard')
        }
        
    }
    useEffect(() => {
        handleCheckLogin();
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
                            
                            {
                                loading
                                ?
                                <LoadingSpinner/>
                                :

                                <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary rounded submit px-3" onClick={(e)=>handleLogin(e)}>Ingresar</button>
                            </div>
                            }
                            
                            <div className="form-group d-md-flex">
                                <div className="w-50">
                                    <label className="checkbox-wrap checkbox-primary px-2">
                                        Recuerdame
                                    </label>
                                    <input type="checkbox" />
                                    <span className="checkmark "></span>
                                </div>
                                {/* <div className="w-50 text-md-right">
                                    <Link to='/'>¿Olvidaste la contraseña?</Link>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           {/*  <div className="text-center">
                <p>¿No tienes cuenta? <a>Registrate</a></p>
            </div> */}

        </section>
    )
}

export default LoginLayout
