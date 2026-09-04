import { useRange } from "react-instantsearch";
import "../styles/PriceSlider.css";

export default function PriceSlider(props) {
    const { range, refine, start } = useRange(props);
    const { min, max } = range;

    if (min === null || max === null || min === undefined || max === undefined) {
        return null;
    }

    const currentMin = (start[0] !== -Infinity && start[0] !== Infinity && !isNaN(start[0])) ? start[0] : min;
    const currentMax = (start[1] !== -Infinity && start[1] !== Infinity && !isNaN(start[1])) ? start[1] : max;

    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value <= currentMax) {
            refine([value, currentMax]);
        }
    };

    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value >= currentMin) {
            refine([currentMin, value]);
        }
    };

    return (
        <div className="price-slider-container">
            <div className="price-range-text">
                ₡{Number(currentMin).toLocaleString("en-US")} - ₡{Number(currentMax).toLocaleString("en-US")}
            </div>
            
            <div className="dual-slider">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={currentMin}
                    onChange={handleMinChange}
                    className="thumb thumb-min"
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={currentMax}
                    onChange={handleMaxChange}
                    className="thumb thumb-max"
                />
                <div className="slider-track"></div>
            </div>

            <div className="price-limits">
                <span>₡{Number(min).toLocaleString("en-US")}</span>
                <span>₡{Number(max).toLocaleString("en-US")}</span>
            </div>
        </div>
    );
}