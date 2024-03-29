import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error ? s.errorFalse : "";

    return (
        <div className={s.content}>
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={'Enter Name'}/>
            <span>{error}</span>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
