import { useState } from 'react'
import { Input } from '../components/input'
import { Button } from '../components/Button'
export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    alert(`
      Email: ${email}
      Senha: ${password}
      `)
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input autoFocus required legend='E-mail' placeholder='seu@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input required legend='Senha' type="passwor" placeholder='123456' value={password} onChange={(e) => setPassword(e.target.value)} />

      <Button children="Entrar" type='submit' isLoading={isLoading} />

      <a href='/signUp' className='text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear' >Criar conta</a>
    </form>
  )
}