// export const login = (user, password)=>{
//     if(password === null || password === undefined){
//         return "No se ha proporcionado un password"
//     }
//     if(user === null || user === undefined){
//         return "No se ha proporcionado un usuario"
//     }
//     if(password !== "123"){
//         return "Contraseña incorrecta"
//     }
//     if(user !== "coderUser"){
//         return "Credenciales incorrectas"
//     }
//     if( user == "coderUser" && password === "123"){
//         return "logueado"
//     }
// }
export const login = (user, password)=>{
    if(!password) return "No se ha proporcionado una contraseña";
    if(!user) return "No se ha proporcionado un usuario";
    if(password !=="123") return "Contraseña incorrecta";
    if(user !=="coderUser") return "Credenciales incorrectas";
    return "logueado";
}