import React, { useState } from 'react'
import bin2dec from './bin2dec'

const Bin2dec = () => {
  const [result, setResult] = useState<number>()
  const [errorMsg, setErrorMsg] = useState<String>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setErrorMsg('')
      setResult(undefined)
    } else if (e.target.value.match('^(1|0)+$')) {
      setErrorMsg('')
      setResult(bin2dec(e.target.value))
    } else {
      setErrorMsg('Please Enter a binary number!')
    }
  }

  return (
    <>
      <h1>bin2dec app</h1>
      <form>
        <label>Binary to Decimal: </label>
        <input type='text' onChange={onChange} />
        <input id='result' type='text' readOnly value={result || ''} />
      </form>
      <p>{errorMsg}</p>
    </>
  )
}

export default Bin2dec
