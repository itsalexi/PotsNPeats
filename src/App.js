import './App.css';

import LeftTree from './assets/CoconutTrees1.png';
import RightTree from './assets/CoconutTrees2.png';
import Snowfall from 'react-snowfall';
import Coconut1 from './assets/Coconut1.png';
import CoconutOpened1 from './assets/OpenCoconut1.png';

import Coconut2 from './assets/Coconut2.png';
import CoirPot from './assets/CoconutCoirPotswLeaves.png';
import CocopeatBlocks from './assets/3DCocopeatBlocks.png';
import CocoPeatButton1 from './assets/2DCocopeatBlocks1.png';
import CocoPeatButton2 from './assets/2DCocopeatBlocks2.png';
import { useState } from 'react';

function App() {
    const [openedCoconut, setOpenedCoconut] = useState(false);

    return (
        <div className="App">
            <Snowfall color="lightblue" />
            <h1 className="title">Pots N' Peats</h1>
            <div className="button-manager">
                <button className="menu-button">
                    <img
                        className="menu-button-image"
                        src={CocoPeatButton1}
                        alt=" cocopeat"
                    />
                </button>
                <button className="menu-button">
                    <img
                        className="menu-button-image"
                        src={CocoPeatButton1}
                        alt=" cocopeat"
                    />
                </button>
                <button className="menu-button">
                    <img
                        className="menu-button-image"
                        src={CocoPeatButton1}
                        alt=" cocopeat"
                    />
                </button>
            </div>
            <img src={LeftTree} className="left-tree" alt="left tree" />
            <img src={RightTree} className="right-tree" alt="right tree" />
            <img
                src={!openedCoconut ? Coconut1 : CoconutOpened1}
                className="drop-coconut"
                alt="coconut"
                onClick={() => setOpenedCoconut(!openedCoconut)}
            />
            <img src={CoirPot} className="coir-pot" alt="Coirpot" />
            <img src={CocopeatBlocks} className="cocopeatblocks" alt="Coirpot" />
        </div>
    );
}

export default App;
