import { React } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

import { slideInAnimation } from '../animations/slideInAnimation';

function Introduction() {
    return (
        <div className='row'>
            <div className="float-sm-start col-sm-5 col-12 vertical-left-center-column">
                <motion.div className="full-width" initial="hidden" animate="visible" variants={slideInAnimation(1.5, '-100%', 0)}>
                    <div className="d-flex flex-row pl-lg">
                        <h1 className="custom-title-xlg white">WATHANTA</h1>
                        <h1 className="custom-title-xlg orange pl-sm">AUNG</h1>
                    </div>
                </motion.div>
                <motion.div className="full-width" initial="hidden" animate="visible" variants={slideInAnimation(2.0, '-100%', 0)}>
                    <div className="d-flex flex-row pl-lg">
                        <h1 className="custom-title-lg white">SOFTWARE</h1>
                        <h1 className="custom-title-lg orange pl-sm">DEVELOPER</h1>
                    </div>
                </motion.div>
                <br></br><br></br>
                <motion.div className="full-width" initial="hidden" animate="visible" variants={slideInAnimation(2.5, '-100%', 0)}>
                    <div className="d-flex flex-row pl-lg pr-lg pb-lg">
                        <p className="white">
                            An enthusiastic Software Developer with 2 years of experience, passionate about solving everyday-life problems and business challenges through creative and dedicated development of Applications, Websites, and Web-based Systems.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="float-sm-start col-sm-1 col-12"></div>

            <div className="float-sm-end col-sm-6 col-12">
                <motion.div className="full-width" initial="hidden" animate="visible" variants={slideInAnimation(1.5, '100%', '20%')}>
                    <img src={require('../../src/images/character.png')} className="character-img pr-lg" alt="character-img" />
                </motion.div>
            </div>
        </div>
    )
}

export default Introduction;