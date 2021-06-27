import React from 'react';
import { WelcomeDialog, SignUpDialog } from './Dialog';
import { SplitPane } from './SplitPane';
import { Chat } from './Chat';
import './index.css'

function App() {
    return (
        <article>
            <SplitPane
                left={ <WelcomeDialog /> }
                right={ <Chat /> } 
                bottom={ <SignUpDialog /> }
            />

        </article>
    )
}

export default App;
