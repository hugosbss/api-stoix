export const generateCsrfToken = () => {
    return Math.random().toString(36).substring(2)
}

export const validateCsrfToken = (token: any) => {
    return typeof token === 'string' && token.length > 10
}