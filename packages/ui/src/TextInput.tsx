interface Props{
    placeholder :string
}

export function TextInput({placeholder}:Props){
    return <input type="text" placeholder={placeholder}/>
}