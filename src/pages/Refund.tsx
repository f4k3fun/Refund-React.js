import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import fileSvg from '../assets/file.svg'

import { Input } from '../components/input'
import { Select } from '../components/Select'
import { CATEGORIES, CATEGORIES_KEYS } from '../utils/category'
import { Upload } from '../components/Upload'
import { Button } from '../components/Button'

export function Refund() {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState('')
  const [filename, setFilename] = useState<File | null>(null)

  const navigate = useNavigate()
  const params = useParams()

  console.log(params)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if(params.id){
      return navigate(-1)
    }

    console.log({ name, amount, category, isLoading, filename })

    navigate('/confirm', { state: { fromSubmit: true } })
  }
  return (
    <form onSubmit={onSubmit} className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:win-w-[512px]">
      <header>
        <h1 className='text-xl font-bold text-gray-100'>Solicitação de reembolso</h1>
        <p className='text-sm text-gray-200 mt-2 mb-4'>Dados da despesa para solictar reembolso</p>
      </header>

      <Input disabled={!!params.id}  required legend="Nome da solicatação" value={name} onChange={(e) => setName(e.target.value)} />
      <div className='flex flex-row gap-4'>
        <Select disabled={!!params.id} required legend='Categoria' value={category} onChange={(e) => setCategory(e.target.value)}>
          {
            CATEGORIES_KEYS.map((category) => (

              <option key={category} value={category}>{CATEGORIES[category].name}</option>
            ))
          }
        </Select>

        <Input disabled={!!params.id} legend='Valor' required value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>

      {
        params.id ?
         <a 
         href="https://www.youtube.com/"
         target="_blank" 
            className='text-sm text-green-100 font-semibold flex items-center- justify-center gap-2 my-2 hover:opacity-70 transition ease-linear'>
        <img
         src={fileSvg}
         alt="Ícone do arquivo" />
         Abrir comprovante
         </a>
          : 
        <Upload 
        legend='Comprovante'
         fileName={filename && filename.name} 
         onChange={(e) => e.target.files && setFilename(e.target.files[0])} />
      }

      

      <Button isLoading={isLoading} type="submit">{params.id ? "Voltar" : "Enviar"}</Button>
    </form>
  )
}