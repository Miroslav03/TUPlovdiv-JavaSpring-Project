import { useState } from "react";

export default function usePersistedState(key, initailSate) {
    const [state, setState] = useState(() => {
        const auth = localStorage.getItem(key);

        if (!auth) {
            return typeof initailSate === "function"
                ? initailSate()
                : initailSate;
        }

        return JSON.parse(auth);
    });

    const setPersistedState = (value) => {
        const newState = typeof value === "function" ? value(state) : value;

        localStorage.setItem(key, JSON.stringify(newState));
        setState(newState);
    };

    return [state, setPersistedState];
}
