import React, { useCallback, useEffect, useRef, useState } from 'react'
import './passwordProject.css'

const PasswordProject = () => {

    const [length, setlength] = useState(8)
    const [AllowNumber, setAllowNumber] = useState("false")
    const [AllowChar, setAllowChar] = useState("false")
    const [password, setpassword] = useState("")


    const copy = useRef()
    const copied = () => {
        window.navigator.clipboard.writeText(password)
        copy.current?.select()

    }


    const passwordgenrator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (AllowNumber) str += "0123456789"
        if (AllowChar) str += "~!`@#$%^&*<>"

        for (let i = 1; i <= length; i++) {

            let char = Math.floor(Math.random() * str.length + 1)

            pass += str.charAt(char)
        }

        setpassword(pass)



    }, [length, AllowNumber, AllowChar])







    useEffect(() => {

        passwordgenrator()
    }, [length, AllowNumber, AllowChar])



    return (
        <div>
            <div className="body">
                <div className="container">
                    <div className="input-container" >
                        <input type="text" value={password} className='input' ref={copy} />
                        <button onClick={copied}>copy</button>

                    </div>

                    <div className="button-container">
                        <input type="range" min={6} max={100} value={length} onChange={(e) => { setlength(e.target.value) }} />
                        <label htmlFor="length"> length : {length} </label>
                        &nbsp;


                        <label htmlFor="numbers">numbers </label>
                        <input type="checkbox" defaultChecked={AllowNumber} onChange={() => {
                            setAllowNumber((prev) => !prev)
                        }} />
                        <label htmlFor=" character">character</label>
                        <input type="checkbox" defaultChecked={AllowChar} onChange={() => {
                            setAllowChar((prev) => !prev)
                        }} />

                    </div>
                </div>
            </div>
        </div>



    )
}

export default PasswordProject