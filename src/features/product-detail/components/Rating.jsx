import { Star } from "lucide-react";
import "../styles/Rating.css";

export default function Rating({ rating }) {
    return (
        <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => {

                let porcentajeLlenar = (rating - star + 1) * 100;
                if (porcentajeLlenar > 100) {
                    porcentajeLlenar = 100;
                }
                if (porcentajeLlenar < 0) {
                    porcentajeLlenar = 0;
                }

                return (
                    <div className="star" key={star}>
                        <Star
                            size={20}
                            className="star-empty"
                        />

                        <div
                            className="star-fill"
                            style={{ width: `${porcentajeLlenar}%` }}
                        >
                            <Star
                                size={20}
                                className="star-full"
                            />
                        </div>
                    </div>
                );
            })}

            <span>{rating}</span>
        </div>
    );
}