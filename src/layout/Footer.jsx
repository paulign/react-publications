import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                &copy; 2018 Smartly coded by
                <a
                    className="ml-1 text-dark"
                    href="https://www.linkedin.com/in/paul-ignatiev/"
                >
                    <strong>Paul Ihnatiev</strong>
                </a>
            </footer>
        );
    }
}

export default Footer;