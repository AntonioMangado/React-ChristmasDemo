import React from "react";
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import "./Footer.css"


const Footer = () => {

  const { theme } = useContext(ThemeContext)

  return <footer className={`footer-${theme}`}> Footer </footer>;
};

export default Footer;
