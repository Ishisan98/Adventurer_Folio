import {React} from 'react';
import { ScrollContainer, ScrollPage, Animator, batch, Sticky, Fade, MoveOut, StickyIn, FadeIn, ZoomIn} from 'react-scroll-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';
import Card from 'react-bootstrap/Card';

import NavBar from '../components/NavBar';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

function Main() {

    return (
        <ScrollContainer>
            <ScrollPage>
                <NavBar />
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -1000))} className="full-width">
                    <Introduction />
                </Animator>
            </ScrollPage>
            
            <ScrollPage>
                <Animator className="full-width full-height">
                    <Skills />
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <Animator className="full-width">
                </Animator>
            </ScrollPage>

        </ScrollContainer>
    )
}

export default Main;