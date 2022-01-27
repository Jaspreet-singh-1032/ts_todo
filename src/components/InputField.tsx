import React, {useRef} from 'react'
import './InputField.css'

interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e: React.FormEvent) => void
}
const InputField = ({todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e:React.FormEvent)=>{
        handleAdd(e);
        inputRef.current?.blur()
    }
    return (
        <form className="input" onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Enter a task'
            className='input__box'
            ref={inputRef}
            value={todo}
            onChange={(e)=> setTodo(e.target.value)}
            />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    )
}

export default InputField
