type SelectColorInputProps = {
    text: string;
    colorValue: string;
    setColorValue: (value: string) => void;
    backgroundColor?: string;
    className?: string;
};

const SelectColorInput = ({
    text: label,
    colorValue,
    setColorValue,
    backgroundColor,
    className,
}: SelectColorInputProps) => {
    return (
        <label className={`btn ${className ?? ''}`} style={{ backgroundColor: backgroundColor }}>
            <span>{label}</span>
            <input
                type={'color'}
                value={colorValue}
                onChange={e => setColorValue(e.target.value)}
                style={{
                    visibility: 'hidden',
                    width: 0,
                    height: 0,
                }}
            ></input>
        </label>
    );
};

export default SelectColorInput;
