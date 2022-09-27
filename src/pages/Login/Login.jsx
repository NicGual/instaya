import React from "react";
import './Login.css'
const Login = () => {
    return (
        <>
            <div className="login-page d-flex container">
                <section className="m-8">
                    <div className="frase">
                        <h2>Envios a un CLICK de distancia</h2>
                    </div>
                    <div>
                        <img src="login-instaya.png" alt="delivery" />
                    </div>
                </section>
                <section className="login-form my-auto mx-auto p-4">
                    <div className="logo d-flex justify-content-center mb-5 mt-3">
                        <img src="logo.png" alt="logo" />
                    </div>
                    <form className="d-flex justify-content-center form-group row mb-5">

                        <div className="  mb-3 col-md-10">
                            <input type="text" className="form-control" placeholder="Usuario" />
                        </div>
                        <div className=" mb-3 col-md-10">
                            <input type="password" className="form-control" placeholder="Contraseña" />
                        </div>
                        <div class="row d-flex justify-content-center mb-4">
                            <button class="btn btn-primary col-md-10" type="submit">Iniciar Sesion</button>
                        </div>
                    </form>
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="text-center"><h6>¿no tienes una cuenta? crea una ahora mismo</h6></div>
                        <div class="row d-flex justify-content-center mb-4">
                            <button class="btn btn-primary col-md-10" type="submit">crear cuenta</button>
                        </div>
                    </div>


                </section>
            </div>
        </>
    )
}
export default Login