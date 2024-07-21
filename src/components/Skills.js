import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';
import Card from 'react-bootstrap/Card';

function Skills() {
    return (
        <div className='row'>
            <div className='col'>
                <div className="d-flex flex-row pl-lg">
                    <h1 className="custom-title-xlg white">Technical</h1>
                    <h1 className="custom-title-xlg orange pl-sm">SKILLS</h1>
                </div>
                

                <div className="row">
                    <div className="float-sm-start col-sm-9 col-12 vertical-left-center-column">
                        <div className="spacing-div-md"></div>
                        <div className="d-flex flex-row pl-lg full-width">
                            <h4 className="custom-title-sm orange">Programming</h4>
                            <h4 className="custom-title-sm white pl-sm">Languages</h4>
                        </div><br></br>
                        <div className="d-flex flex-row pl-lg pr-lg full-width">
                            <Card className='transparent-bg full-width'>
                                <Card.Body>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <img src={require('../../src/images/icons/c-sharp.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/php.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/html.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/javascript.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/css.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/java.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/nodejs.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/python.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/angularjs.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    
                    <div className="float-sm-start col-sm-3 col-12 vertical-left-center-column">
                    <div className="spacing-div-md"></div>
                        <div className="d-flex flex-row pl-lg pr-lg">
                            <h4 className="custom-title-sm orange">Frameworks</h4>
                        </div><br></br>
                        <div className="d-flex flex-row pl-lg pr-lg full-width">
                            <Card className='transparent-bg full-width'>
                                <Card.Body>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <img src={require('../../src/images/icons/c-sharp.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row">
                    <div className="col-3">
                        <div className="spacing-div-md"></div>
                        <div className="d-flex flex-row pl-lg">
                            <h4 className="custom-title-sm orange">Databases</h4>
                        </div><br></br>
                        <div className="d-flex flex-row pl-lg pr-sm">
                            <Card className='transparent-bg full-width'>
                                <Card.Body>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <img src={require('../../src/images/icons/c-sharp.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/php.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="spacing-div-md"></div>
                        <div className="d-flex flex-row pl-lg">
                            <h4 className="custom-title-sm orange">Version</h4>
                            <h4 className="custom-title-sm white pl-sm">Control</h4>
                        </div><br></br>
                        <div className="d-flex flex-row pl-lg pr-sm">
                            <Card className='transparent-bg full-width'>
                                <Card.Body>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <img src={require('../../src/images/icons/c-sharp.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/php.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="spacing-div-md"></div>
                        <div className="d-flex flex-row pl-lg">
                            <h4 className="custom-title-sm orange">Cloud</h4>
                            <h4 className="custom-title-sm white pl-sm">Services</h4>
                        </div><br></br>
                        <div className="d-flex flex-row pl-lg pr-sm">
                            <Card className='transparent-bg full-width'>
                                <Card.Body>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <img src={require('../../src/images/icons/c-sharp.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-md' alt='c-sharp-icon' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="spacing-div-md"></div>
                        <div className="d-flex flex-row pl-lg">
                            <h4 className="custom-title-sm orange">UI</h4>
                            <h4 className="custom-title-sm white pl-sm pr-sm">&</h4>
                            <h4 className="custom-title-sm orange">Design</h4>
                        </div><br></br>
                        <div className="d-flex flex-row pl-lg pr-lg">
                            <Card className='transparent-bg full-width'>
                                <Card.Body>
                                    <div className='d-flex flex-wrap justify-content-center'>
                                        <img src={require('../../src/images/icons/c-sharp.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                        <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-sm' alt='c-sharp-icon' />
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;