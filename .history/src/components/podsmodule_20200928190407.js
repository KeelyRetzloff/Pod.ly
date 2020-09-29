import React from "react"
import { Link} from "gatsby"

import Pods from "./data.js"
import Generatequote from "../components/generatequote"



const Podsmodule = () => {

    const mapRows = Pods.map((pod, index) => (

            <li key={index}>
                <Link to="/shopsingle/">
                    <div className="podmodule" style={{ borderColor: pod.hex }}>
                        <img src={pod.img} alt={pod.title} />
                        <h2>lite.weight in {pod.title}</h2>
                        <h5>${pod.price}</h5>
                    </div>
                </Link>
            </li>

        ));
    return <ul className="podslist">{mapRows}</ul>;

};




export default Podsmodule