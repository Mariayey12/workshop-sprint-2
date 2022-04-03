import React, { useEffect, useState } from 'react'
import {  obData } from '../helpers/obtenerData'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

export const Detalle = () => {
  let url = 'https://workshops-2.herokuapp.com/sessions/'
  const navigate = useNavigate()
  let k = localStorage.getItem('key')


  const back = () => {
    navigate('/')
  }
  const [idQ, setIdQ] = useState()
  const [card, setcard] = useState({
    tit: '',
    subTi: '',
    descr: '',
    speak: '',
    audieT: '',
    audieL: '',
    language: '',
    indus: '',
    topic: '',
  })
  ///Me trae la data
  const obtenerData = async (i) => {
    const data = await obData(url + k)
    console.table(data)
    const { title, session_type, description, speakers, industry_segment, primary_topic, audience_type, audience_level, lenguage, id } = data
    setcard({
      tit: title,
      subTi: session_type,
      descr: description,
      speak: speakers[0] + ', ' + speakers[1] + ', ' + speakers[2],
      audieT: audience_type,
      audieL: audience_level,
      indus: industry_segment,
      topic: primary_topic
    })
  }
  const { tit, subTi, descr, speak, audieT, audieL, indus, topic} = card

  useEffect(() => {
    obtenerData(idQ)

  }, [])


  return (
    <div>
      <button className='btnBack' onClick={() => { back() }}>
        <ArrowBackIcon color="primary" />
        Back to Session 
      </button>
      <div className='card'>
        <h2>{tit}</h2>
        <h4>{subTi}</h4>
        <p>{descr}</p>
        <p>{speak}</p>
        <p> <b>Audience:</b> {audieT}</p>
        <p> <b>Audience level:</b> {audieL}</p>
      
        <p> <b>Industry:</b> {indus}</p>
        <p> <b>Primary Topic:</b> {topic}</p>
      </div>
    </div>
  )
}
