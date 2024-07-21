import { React } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';
import Card from 'react-bootstrap/Card';

function Skills() {
    return (
        <div>
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
                        <Card className='transparent-bg-3 full-width'>
                            <Card.Body>
                                <div className='d-flex flex-wrap justify-content-center'>
                                    <img src={require('../../src/images/icons/c-sharp.png')} className='icon-lg pr-md pl-sm shake zoom' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/react.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/php.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/html.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/javascript.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/css.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/java.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/nodejs.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/python.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/angularjs.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
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
                        <Card className='transparent-bg-3 full-width'>
                            <Card.Body>
                                <div className='d-flex flex-wrap justify-content-center'>
                                    <img src={require('../../src/images/icons/dotnet.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/springboot.png')} className='icon-lg pr-md pl-sm shake' alt='c-sharp-icon' />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="float-sm-start col-sm-3 col-12 vertical-left-center-column">
                    <div className="spacing-div-md"></div>
                    <div className="d-flex flex-row pl-lg">
                        <h4 className="custom-title-sm orange">Databases</h4>
                    </div><br></br>
                    <div className="d-flex flex-row pl-lg pr-lg full-width">
                        <Card className='transparent-bg-3 full-width'>
                            <Card.Body>
                                <div className='d-flex flex-wrap justify-content-center'>
                                    <img src={require('../../src/images/icons/mssql.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/mysql.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="float-sm-start col-sm-3 col-12 vertical-left-center-column">
                    <div className="spacing-div-md"></div>
                    <div className="d-flex flex-row pl-lg">
                        <h4 className="custom-title-sm orange">Cloud</h4>
                        <h4 className="custom-title-sm white pl-sm">Services</h4>
                    </div><br></br>
                    <div className="d-flex flex-row pl-lg pr-lg full-width">
                        <Card className='transparent-bg-3 full-width'>
                            <Card.Body>
                                <div className='d-flex flex-wrap justify-content-center'>
                                    <img src={require('../../src/images/icons/azure.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/aws.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/firebase.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="float-sm-start col-sm-3 col-12 vertical-left-center-column">
                    <div className="spacing-div-md"></div>
                    <div className="d-flex flex-row pl-lg">
                        <h4 className="custom-title-sm orange">Version</h4>
                        <h4 className="custom-title-sm white pl-sm">Control</h4>
                    </div><br></br>
                    <div className="d-flex flex-row pl-lg pr-lg full-width">
                        <Card className='transparent-bg-3 full-width'>
                            <Card.Body>
                                <div className='d-flex flex-wrap justify-content-center'>
                                    <img src={require('../../src/images/icons/git.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/github.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/bitbucket.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="float-sm-start col-sm-3 col-12 vertical-left-center-column">
                    <div className="spacing-div-md"></div>
                    <div className="d-flex flex-row pl-lg">
                        <h4 className="custom-title-sm orange">UI</h4>
                        <h4 className="custom-title-sm white pl-sm pr-sm">&</h4>
                        <h4 className="custom-title-sm orange">Design</h4>
                    </div><br></br>
                    <div className="d-flex flex-row pl-lg pr-lg full-width">
                        <Card className='transparent-bg-3 full-width'>
                            <Card.Body>
                                <div className='d-flex flex-wrap justify-content-center'>
                                    <img src={require('../../src/images/icons/figma.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                    <img src={require('../../src/images/icons/photoshop.png')} className='icon-lg pr-sm pl-sm shake' alt='c-sharp-icon' />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;