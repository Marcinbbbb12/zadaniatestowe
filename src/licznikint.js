import { useState, useEffect } from "react";

function useLicznikInt(initialCount) {
    const [count, setCount] = useState(initialCount);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isCounting && count > 0) {
            intervalId = setInterval(() => {
                setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isCounting, count]);

    function startCount() {
        setIsCounting(true);
        setCount(initialCount);
    }

    function stopCount() {
        setIsCounting(false);
        setCount(0);
    }

    return { count, isCounting, startCount, stopCount };
}

export default useLicznikInt;