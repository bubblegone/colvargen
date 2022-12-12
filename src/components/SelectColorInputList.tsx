import SelectColorInput from './SelectColorInput';

type ColorPickersProps = {
    colors: string[];
    setColors: (value: string[]) => void;
};

const SelectColorInputList = ({ colors, setColors }: ColorPickersProps) => {
    const createSetterFunc = (index: number) => {
        const setterFunction = (newColorValue: string) => {
            const updatedColorArray = colors.map((color, i) => (i == index ? newColorValue : color));
            setColors(updatedColorArray);
        };
        return setterFunction;
    };

    const createColorRemovalFunc = (index: number) => {
        const removalFunction = () => {
            const updatedColorArray = colors.filter((_, i) => i != index);
            setColors(updatedColorArray);
        };
        return removalFunction;
    };

    return (
        <>
            {colors.map((color, i) => (
                <div className="posRelative">
                    <SelectColorInput
                        text={''}
                        colorValue={color}
                        setColorValue={createSetterFunc(i)}
                        backgroundColor={color}
                    />
                    <button
                        className="trashButton"
                        aria-label="Delete color button"
                        onClick={createColorRemovalFunc(i)}
                    >
                        <img src="/trash-icon.svg" alt="Delete color" width="16px" height="16px" />
                    </button>
                </div>
            ))}
        </>
    );
};

export default SelectColorInputList;
