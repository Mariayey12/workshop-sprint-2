import React, { useEffect, useState } from 'react'
import { getD } from '../helpers/getData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'
import  "../style/style.css"

export const Detail = () => {
  let url = 'https://6243a5813da3ac772b04e2cd.mockapi.io/sessions';
  const navigate = useNavigate()

  const back = () =>{
    navigate('/')
  }
  const [idQ, setIdQ] = useState(1)
  const [card, setcard] = useState({
    Title: '',
    subTitle: '',
    description: '',
    speakers: '',
    industry: '',
    topic: '',
  })
  ///Me trae la data
  const getData = async (i) => {
    const data = await getD(url + i)
    console.table(data)
    const { nombre, img, resumen, precio, categoria, id } = data
    setcard({
      Title: nombre,
      subTitle: precio,
      description: resumen,
      speakers: img,
      industry: categoria,
      topic: id,
    })
  }

  useEffect(() => {
    getData(idQ);
    
  }, []);


  return (
    <div>
      <button className='btnBack' onClick={() => { back() }}>
        <ArrowBackIcon color="primary" />
        Back
      </button>
      <div className='card'>
        <h2>Gtc 2022</h2>
        <h4>Gtc 2022</h4>
        <p><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
        </p>
        <p>Nvidia</p>
        <p> <b>Industry:</b> All industries</p>
        <p> <b>Primary Topic:</b> Al Strategy for Business Leaders</p>
      </div>
    </div>
  )
}
