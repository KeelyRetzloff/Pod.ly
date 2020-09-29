import React from "react"
import { Link} from "gatsby"

import Pods from "./data.js"




const Podsmodule = () => {

    const mapRows = Pods.map(function (pod, index) {
            return (

                <li key={index}>
                    <Link to="/shopsingle/">
                        <div className="podmodule" style={{ borderColor: pod.hex }}>
                            <img src={pod.img} alt={pod.title} />
                            <h2>lite.weight in {pod.title}</h2>
                            <p>${pod.price}</p>
                        </div>
                    </Link>
                </li>

            );
        });
    return <ul className="podslist">{mapRows}</ul>;

};




export default Podsmodule