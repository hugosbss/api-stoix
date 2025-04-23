import { NextApiRequest, NextApiResponse } from 'next'
import { validateCsrfToken } from '../../../lib/csrf'
import { users } from '../../../lib/users'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const csrfToken = req.headers['x-csrf-token']
  if (!validateCsrfToken(csrfToken)) {
    return res.status(403).json({ error: 'CSRF inválido' })
  }

  const { user, password } = req.body
  const match = users.find(u => u.user === user && u.password === password)

  if (!match) return res.status(401).json({ error: 'Credenciais inválidas' })

  res.setHeader('Set-Cookie', `auth=${user}; HttpOnly; Path=/`)
  res.status(200).json({ message: 'Login com sucesso' })
}