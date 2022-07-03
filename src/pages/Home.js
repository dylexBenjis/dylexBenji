import React, { useState } from 'react'
import AboutUs from '../Components/Home/About';
import Side_bar from '../Components/Home/SideBar';
import MyWorks from '../Components/Home/MySkills-Works';
import NavBar from '../Components/Home/NavBar';
import SideNav from '../Components/Home/SideNav';
import ConnectSMedia from '../Components/Home/Connect';

const Home = ({toggle, scrollNav, ChangeToggle, ChangeTheme}) => {


  const [IsOpen, setIsOpen] = useState(false)

  const open = () => {
      setIsOpen(!IsOpen)
  }


  return (
    <div>
    <Side_bar IsOpen={IsOpen} toggle={open} changeBtnIcon={toggle} scrollNav={scrollNav} ChangeToggle={ChangeToggle} ChangeTheme={ChangeTheme}/>
    <NavBar IsOpen={IsOpen} toggle={open} changeBtnIcon={toggle} scrollNav={scrollNav} ChangeToggle={ChangeToggle} ChangeTheme={ChangeTheme}/>  
    <SideNav/>  
    <AboutUs/>
    <MyWorks toggle={toggle}/>
    <ConnectSMedia toggle={toggle}/>
    </div>
    
  );
};

export default Home;
