import {useEffect, useState} from "react";

const useWaitEvents = (eventsName) => {
    const [loading, setLoading] = useState(true);
    const [done, setDone] = useState([]);

    const checker = (arr, target) => target.every(v => arr.includes(v));

    useEffect(() => {
        if (checker(done, eventsName)) {
            setLoading(false);
        }
    }, [done, eventsName]);

    useEffect(() => {
        function loadedHandler(event) {
            console.log(
                `%c[Event loaded] %c${event.detail.name} `,
                "color: green",
                "color : #bada55"
            );
            setDone(prev => [...prev, event.detail.name]);
        }

        if (Array.isArray(eventsName) && eventsName.length > 0) {
            eventsName.forEach(event => {
                document.addEventListener(event, loadedHandler, {once: true});
            })
        } else {
            setLoading(false);
        }

        return () => {
            eventsName.forEach(event => {
                document.removeEventListener(event, loadedHandler);
            })
        }
    }, [eventsName]);

    return loading;
};

export {useWaitEvents}