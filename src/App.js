import './App.css';

import LeftTree from './assets/CoconutTrees1.png';
import RightTree from './assets/CoconutTrees2.png';
import Snowfall from 'react-snowfall';
import Coconut1 from './assets/Coconut1.png';
import CoconutOpened1 from './assets/OpenCoconut1.png';

import Coconut2 from './assets/Coconut2.png';
import CoirPot from './assets/CoconutCoirPotswLeaves.png';
import CocopeatBlocks from './assets/3DCocopeatBlocks.png';
import Phase1 from './assets/PhaseOne.png';
import Phase2 from './assets/PhaseTwo.png';
import Phase3 from './assets/PhaseThree.png';

import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

function App() {
    const [openedCoconut, setOpenedCoconut] = useState(false);

    return (
        <div className="App">
            <Snowfall color="lightblue" />
            <div className="ui-elements">
                <h1 className="title">Pots N' Peats</h1>
                <div className="button-manager">
                    <button className="menu-button">
                        <img
                            className="menu-button-image"
                            src={Phase1}
                            alt=" cocopeat"
                        />
                    </button>
                    <button className="menu-button">
                        <img
                            className="menu-button-image"
                            src={Phase2}
                            alt=" cocopeat"
                        />
                    </button>
                    <button className="menu-button">
                        <img
                            className="menu-button-image"
                            src={Phase3}
                            alt=" cocopeat"
                        />
                    </button>
                </div>
            </div>
            <Tooltip title="Stop shaking me :c" placement="right" arrow>
                <img src={LeftTree} className="left-tree" alt="left tree" />
            </Tooltip>

            <Tooltip title="Stop shaking me :c" placement="left" arrow>
                <img src={RightTree} className="right-tree" alt="right tree" />
            </Tooltip>

            <Tooltip title="Crack me open!" arrow>
                <img
                    src={!openedCoconut ? Coconut1 : CoconutOpened1}
                    className="drop-coconut"
                    alt="coconut"
                    onClick={() => setOpenedCoconut(!openedCoconut)}
                />
            </Tooltip>
            <Tooltip title="I'm a pot made out of coconut coir!" arrow>
                <img src={CoirPot} className="coir-pot" alt="Coirpot" />
            </Tooltip>
            <Tooltip title="I'm a coconut peat block!" arrow>
                <img
                    src={CocopeatBlocks}
                    className="cocopeatblocks"
                    alt="Coirpot"
                />
            </Tooltip>
        </div>
    );
}

export default App;
