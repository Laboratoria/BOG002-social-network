// creacion de formulario sign up

export  function FormularioDeRegistro(){
    const NewForm = document.createElement("form");
    console.log(NewForm)
    let SignUp = document.getElementsByTagName("main")
    Formulario = `
    <form>
    <h1> Created account </h1>
    
    <input type="text" placeholder="User name"> 
    <input type="email" placeholder="email"> 
    <input type="password" placeholder="password> 
    
    <button type="submit" id="Register" class="btn" > <a href="#Register"> REGISTER</a></button>
    
    </form>`
    NewForm.appendChild(Formulario)
    SignUp.innerHTML = NewForm
    
}
