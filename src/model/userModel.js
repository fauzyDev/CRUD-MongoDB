export const userSchema = {
    name: "",
    email: "",
    age: null
}

export function Schema( schema, data ) {
    const result = { ...schema };
    for (const key in schema) {
      if (data[key] !== undefined) {
        result[key] = data[key];
      }
    }
    return result;
}

export function validateUser( data ) {
    const errors = [];

    if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
      errors.push("Harap masukkan nama.");
    }
    if (!data.email || typeof data.email !== "string" || !/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.push("Harap masukkan email.");
    }
    if (!data.age || typeof data.age !== "number" || data.age < 0) {
      errors.push("Harap masukkan umur.");
    }
    return errors;
  }


