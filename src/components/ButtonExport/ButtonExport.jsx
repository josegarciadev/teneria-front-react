import React from 'react'

const ButtonExport = ({url}) => {
    return (
        <>
            
            <a href={url} className='btn btn-outline-secondary' target="_blank">
            Exportar PDF
            </a>
        </>
    )
}

export default ButtonExport
