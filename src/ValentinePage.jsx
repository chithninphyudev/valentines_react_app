import React, { useState } from 'react';
import catImage from "./valentines_cat.jpg";
import happycat from "./happy_cat.jpg";

const ValentinePage = () => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [noButtonPos, setNoButtonPos] = useState(null);

    const moveButton = (e) => {
        if (e && e.cancelable) e.preventDefault();
        const randomTop = Math.floor(Math.random() * 80 + 10) + '%';
        const randomLeft = Math.floor(Math.random() * 80 + 10) + '%';
        setNoButtonPos({ top: randomTop, left: randomLeft });
    };

    if (isAccepted) {
        return (
            <div style={styles.container}>
                <img src={happycat} alt="cat" height="200px" />
                <h1 style={styles.title}>Yay! ❤️ See you then!</h1>
                <div style={styles.heartContainer}>💖✨🌹</div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <img src={catImage} alt="cat" height="200px" />
            <h1 style={styles.title}>Will you be my Valentine?</h1>

            <div style={styles.buttonWrapper}>
                <button
                    style={styles.yesButton}
                    onClick={() => setIsAccepted(true)}
                >
                    Yes!
                </button>

                <div style={styles.noButtonPlaceholder}>
                    <button
                        style={{
                            ...styles.noButton,
                            position: noButtonPos ? 'fixed' : 'relative',
                            top: noButtonPos?.top,
                            left: noButtonPos?.left,
                            transition: 'all 0.2s ease-out',
                            touchAction: 'none',
                            margin: noButtonPos ? 0 : 'auto',
                        }}
                        onMouseEnter={moveButton}
                        onTouchStart={moveButton}
                        onClick={moveButton}
                    >
                        No
                    </button>
                </div>
            </div>

            <div style={styles.bgHearts}>💕 🌸 💞 🌷 💌</div>
        </div>
    );
};

const styles = {
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe4e1',
        fontFamily: 'sans-serif',
        overflow: 'hidden',
        position: 'relative',
    },
    title: {
        fontSize: 'clamp(2rem, 8vw, 3rem)',
        color: '#d02090',
        marginBottom: '50px',
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        width: '100%',
    },
    noButtonPlaceholder: {
        width: '120px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    yesButton: {
        backgroundColor: '#ff69b4',
        color: 'white',
        border: 'none',
        padding: '15px 35px',
        fontSize: '1.5rem',
        borderRadius: '50px',
        cursor: 'pointer',
        width: '120px',
    },
    noButton: {
        backgroundColor: 'white',
        color: '#ff69b4',
        border: '2px solid #ff69b4',
        padding: '15px 35px',
        fontSize: '1.5rem',
        borderRadius: '50px',
        cursor: 'pointer',
        width: '120px',
        whiteSpace: 'nowrap',
    },
    heartContainer: { fontSize: '5rem' },
    bgHearts: { position: 'absolute', bottom: '20px', opacity: 0.5 }
};

export default ValentinePage;