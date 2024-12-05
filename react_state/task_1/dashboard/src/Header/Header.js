import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Header(props) {
    return (
        <header className={css(styles.appHeader)}>
            <img src={props.src} alt={props.alt} className={css(styles.appHeaderImg)}/>
            <h1>{props.text}</h1>
        </header>
    );
}

const styles = StyleSheet.create({
    appHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fonSize: '1.2rem',
        color: '#e11d3f',
        bordeBottom: 'solid #e11d3f'
    },
      
    appHeaderImg: {
        width: 250
    }
});
