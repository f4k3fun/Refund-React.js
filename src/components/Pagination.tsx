import leftSvg from '../assets/left.svg'
import rightSvg from '../assets/right.svg'
import { Button } from './Button'

type Props = {
  current: number
  total: number
  onNext: () => void
  onPrevious: () => void
}

export function Pagination({current, total, onNext, onPrevious}: Props){
  return(
    <div className="w-full flex justify-center items-center gap-4 my-6">
      <Button disabled={current === 1 && true} variant='iconSmall' ><img src={leftSvg} alt="Ícone de voltar" onClick={onPrevious} /></Button>
      <span className='text-sm text-gray-200 '>
        {current} / {total}
      </span>
      <Button variant='iconSmall' disabled={current === total && true}  ><img src={rightSvg} alt="Ícone de avançar" onClick={onNext} /></Button>

    </div>
  )
}