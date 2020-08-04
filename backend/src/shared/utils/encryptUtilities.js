import bcrypt from 'bcrypt'

export const encrypt = (plaintextValue) => {
    return bcrypt.hashSync(plaintextValue, 10);
}

export const compare = (plaintextValue, hashedValue) => {
    return bcrypt.compareSync(plaintextValue, hashedValue);
}
