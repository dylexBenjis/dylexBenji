import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../Components/GlobalNav/Header'
import ConnectSMedia from '../Components/Home/Connect'
import Project from '../Components/Project/Projec/Project'

const ProjecT = ({toggle}) => {

  useEffect(()=>{ 
    window.scrollTo(0,0)
   }, [])
  return (
    <Pro>
      <Header/>
      <Project/>
      <ConnectSMedia toggle={toggle}/>
    </Pro>
  )
}

export default ProjecT

const Pro = styled.div`
  display: flex ;
  flex-direction: column ;
`