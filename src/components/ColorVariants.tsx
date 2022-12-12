import { getContrastColor, getDarkerVariations, getLightVariations } from '../common/utils';

type ColorTileProps = {
    colorValue: string;
    className?: string;
};

const ColorTile = ({ className, colorValue }: ColorTileProps) => {
    const fontColor = getContrastColor(colorValue);
    return (
        <div style={{ backgroundColor: colorValue, color: fontColor }} className={`colorTile ${className ?? ''}`}>
            {colorValue}
        </div>
    );
};

type ColorSeparatorProps = {
    backgroundColor: string;
};

const ColorSeparator = ({ backgroundColor }: ColorSeparatorProps) => {
    const color = getContrastColor(backgroundColor);
    return <div className="verticalSeparator" style={{ backgroundColor: color }}></div>;
};

type ColorRowProps = {
    mainColor: string;
    backgroundColor: string;
};

const ColorTileRow = ({ mainColor, backgroundColor }: ColorRowProps) => {
    return (
        <div className="colorsRow">
            {getDarkerVariations(mainColor).map(color => (
                <ColorTile colorValue={color} />
            ))}
            <ColorSeparator backgroundColor={backgroundColor} />
            <ColorTile colorValue={mainColor} className="primaryColorTile" />
            <ColorSeparator backgroundColor={backgroundColor} />
            {getLightVariations(mainColor).map(color => (
                <ColorTile colorValue={color} />
            ))}
        </div>
    );
};

export default ColorTileRow;
