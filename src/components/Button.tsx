import { classMerge } from "../utils/classMerge"

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean
  variant?: "base" | "icon" | 'iconSmall'
}

const variants = {
  button: {
    base: `h-12 `,
    icon: 'w-12 h-12 flex items-center',
    iconSmall: 'w-8 h-8 flex items-center'
  }
}

export function Button({ children, isLoading, type = "button", variant = "base", ...rest}: Props){
  return(
    <button type = { type } disabled={isLoading} 
      className={
        classMerge(["flex items-center justify-center p-2 bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed", variants.button[variant]])
       }
    {...rest}   >{children}</button>
  )
}