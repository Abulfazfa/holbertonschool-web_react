import React from "react";
import { StyleSheet, css } from 'aphrodite';

export default function Login(props) {
    return (
        <>
            <p>{props.text}</p>
            <div className={css(styles.small, styles.inline)}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className={css(styles.maringRight)}></input>
            </div>
            <div className={css(styles.small, styles.inline)}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className={css(styles.maringRight)}></input>
            </div> 
            <button type='button'>OK</button>
        </>
    );
}

const styles = StyleSheet.create({
    maringRight: {
        marginRight: '1rem'
    },
    inline: {
        display: 'inline-block'
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'block',
        }
    }
});
