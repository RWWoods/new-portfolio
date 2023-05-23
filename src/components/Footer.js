import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const styles = {
    footer: {
        padding: '10px',
        textAlign: 'center',
        marginTop: '30px'
    },
    icon: {
        color: 'black',
        fontSize: '40px',
        padding: 20,
        position: 'relative'
    }
}
// class Icon extends Component {
// render() {
//     return (
//         <div> 
//         <FaGithub />
//         <FaLinkedin />
//         <FaStackOverflow />
//         </div>
//     )
// }
// }


export default function Footer() {
    return (
        <footer style={styles.footer}>
            <a style= {styles.icon} href='https://stackoverflow.com/users/21950049/kiggles'><FaStackOverflow /></a> 
            <a style= {styles.icon} href='https://github.com/RWWoods'><FaGithub /></a>
            <a style= {styles.icon} href='https://www.linkedin.com/in/ridge-woods-8a9023105/'><FaLinkedin /></a>
        </footer>
    )
}