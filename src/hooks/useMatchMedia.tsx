import React from 'react';

const useMedia = (media: any) => {
    const [ match, setMatch ] = React.useState(() => {
        const { matches } = window.matchMedia(media);
        return matches;
    });

    React.useEffect(() => {
        const changeMatch = () => {
            const { matches } = window.matchMedia(media);
            setMatch(matches);
        }

        window.addEventListener('resize', changeMatch);

        return () => {
            window.removeEventListener('resize', changeMatch);
        }
    }, [media])

    return match
}

export default useMedia;