import { NextApiRequest, NextApiResponse } from 'next'
import csrf from 'csurf'
import cookie from 'cookie'

const csrfProtection = csrf({ cookie: true })

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Set-Cookie', cookie.serialize('XSRF-TOKEN', 'valor-do-token-aqui', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  }))

  res.status(200).json({ csrfToken: 'valor-do-token-aqui' })
}