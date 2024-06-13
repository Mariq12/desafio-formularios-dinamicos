export const validateForm = ({ name, email, password }) => {
    const newErrors = {};
    if (!name) newErrors.name = "El nombre es obligatorio.";
    else if (name.length < 3) newErrors.name = "El nombre debe tener al menos 3 caracteres.";
    if (!email) newErrors.email = "El correo electrónico es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "El correo electrónico no es válido.";
    if (!password) newErrors.password = "La clave es obligatoria.";
    else if (password.length < 6) newErrors.password = "La clave debe tener al menos 6 caracteres.";
    return newErrors;
};
