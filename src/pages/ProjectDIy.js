import React, { useEffect } from 'react'
import Header from '../Components/GlobalNav/Header'
import ConnectSMedia from '../Components/Home/Connect'
import WebApps from '../Components/Project/WebApps/WebApps'

const ProjectDIy = ({toggle}) => {
    useEffect(()=>{ 
        window.scrollTo(0,0)
       }, [])
      return (
          <>    
            <Header/>
            <WebApps/>
            <ConnectSMedia toggle={toggle} />
            
        </>
    
  )
}

export default ProjectDIy