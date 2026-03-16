import { useState } from 'react'
import { Input } from '../components/input'
import { Button } from '../components/Button'

export function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [passwordConfirm, setPasswordConfirm] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    alert(`
      Nome: ${name}
      Email: ${email}
      Senha: ${password}
      Confimar Senha: ${passwordConfirm}
      `)
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input required legend='Name' placeholder='Nome' autoFocus value={name} onChange={(e) => setName(e.target.value)} />

      <Input required legend='E-mail' placeholder='seu@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input required legend='Senha' type="password" placeholder='123456' value={password} onChange={(e) => setPassword(e.target.value)} />
      <Input type="password" legend="Confirme a senha" required placeholder='123456' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
      <Button children="Cadastrar" type='submit' isLoading={isLoading} />

      <a href='/' className='text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear' >Já tenho Conta</a>
    </form>
  )
}