import { useEffect, useState } from 'react';
import { DEFAULT_BG, DEFAULT_TILE_COLOR, NEARLY_WHITE } from './common/colorValues';
import { getContrastColor } from './common/utils';
import ColorTileRow from './components/ColorVariants';
import SelectColorInput from './components/SelectColorInput';
import SelectColorInputList from './components/SelectColorInputList';

function App() {
    const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BG);
    const [bgContrastColor, setFontColor] = useState(NEARLY_WHITE);
    const [colors, setColors] = useState([DEFAULT_TILE_COLOR]);

    useEffect(() => {
        setFontColor(getContrastColor(backgroundColor));
    }, [backgroundColor]);

    const addColor = () => {
        setColors([...colors, DEFAULT_TILE_COLOR]);
    };

    return (
        <div className="windowHeight">
            <header className="controls">
                <SelectColorInput
                    text={'Set background color'}
                    colorValue={backgroundColor}
                    setColorValue={setBackgroundColor}
                    className="btn"
                />
                <button className="btn" onClick={addColor}>
                    Add color
                </button>
                <SelectColorInputList colors={colors} setColors={setColors} />
            </header>
            <main className="main" style={{ backgroundColor: backgroundColor, color: bgContrastColor }}>
                <div className="colorRowsContainer">
                    {colors.map(color => (
                        <ColorTileRow backgroundColor={backgroundColor} mainColor={color} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
