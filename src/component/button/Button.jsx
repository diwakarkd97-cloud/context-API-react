import { useContext } from "react";
import Context from "../Context";

const Button=({name}) =>{

    const{ count, setCount } = useContext(Context);

    return <button onClick={() => {setCount(count +1)}} className="btn">{name}</button>
};

export default Button;