import React from "react";
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: "",
            password: "",
            enableSubmit: false
        };
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleEnableSubmit = this.handleEnableSubmit.bind(this);
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        this.setState({isLoggedIn: true});
    }

    handleChangeEmail(newEmail) {
        this.setState({email: newEmail}, () => {
            if (this.state.email !== "" && this.state.password != "") this.handleEnableSubmit(true);
            else this.handleEnableSubmit(false);
        });
    }

    handleChangePassword(newPassword) {
        this.setState({password: newPassword}, () => {
            if (this.state.email !== "" && this.state.password !== "") this.handleEnableSubmit(true);
            else this.handleEnableSubmit(false);
        });
    }

    handleEnableSubmit(isEnabled) {
        this.setState({enableSubmit: isEnabled});
    }

    render() {
        return (
            <>
                <p>{this.props.text}</p>
                <form onSubmit={(e) => {this.handleLoginSubmit(e)}}>
                    <div className={css(styles.small, styles.inline)}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className={css(styles.maringRight)} value={this.state.email}
                               onChange={(e) => {this.handleChangeEmail(e.target.value)}}></input>
                    </div>
                    <div className={css(styles.small, styles.inline)}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" className={css(styles.maringRight)} value={this.state.password}
                               onChange={(e) => {this.handleChangePassword(e.target.value)}}></input>
                    </div>
                    <input type='submit' value='OK' disabled={!this.state.enableSubmit}></input>
                </form>
            </>
        );
    }
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

export default Login;
