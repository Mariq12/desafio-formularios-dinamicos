import { useState } from "react";
import "./RegistrationForm.css";
import { validateForm } from "./validations/Validations";

const RegistrationForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm({ name, email, password });
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Formulario enviado:", { name, email, password });
            alert("Registro exitoso");
        }
    };

    return (
        <main className="main-container">
        <header>
            <h1>Formulario dinámico</h1>
        </header>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="group-form">
                    <label>Nombre</label>
                    <input
                        placeholder="Escribir los nombres completos"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="group-form">
                    <label>Correo Electrónico</label>
                    <input
                        placeholder="Escribir correo electrónico"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="group-form">
                    <label>Contraseña</label>
                    <input
                        placeholder="Escribir contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button type="submit">Registrar</button>
            </form>
        </main>
    );
};

export default RegistrationForm;
