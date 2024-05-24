export function Validate( email,password){
    const em=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/  
    const pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if(!em.test(email))return "Invalid email";
    if(!pass.test(password)) return "Invalid password";

      return null;
}