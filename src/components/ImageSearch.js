import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

function ImageSearch({searchText}) {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault(); 
        searchText(text)
    }
  return (
    <div className='search-wrapper'>
        <form action="#" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} className='form-control' placeholder='Search' />
            <button className='btn btn-primary'><AiOutlineSearch/></button>
        </form>
    </div>
  )
}

export default ImageSearch
