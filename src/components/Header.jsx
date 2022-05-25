import PropTypes from "prop-types";
import {Link , NavLink} from 'react-router-dom'
import { motion } from "framer-motion";

export default function Header({ text }) {
  return (
    <header>

      
        <Link to='/'><motion.h2 animate={{x:'0px'}} initial={{x:'-300'}} transition={{delay: 0.2 ,duration:0.9 , type:'tween'}}>{text}</motion.h2> </Link>
     
   
        
        <ul>
          <NavLink to='/'> <li className="nav-links">Home</li></NavLink>
          <NavLink to='/about'> <li className="nav-links">About</li></NavLink>
        </ul>
    
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback app",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
