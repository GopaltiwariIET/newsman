import React, { Component } from 'react';

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset > 20) {
            this.setState({
                showButton: true,
            });
        } else {
            this.setState({
                showButton: false,
            });
        }
    };

    scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    };

    render() {
        const scrollToTopStyle = {
            position: 'fixed',
            bottom: '20px',
            right: '30px',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: this.state.showButton ? 'block' : 'none',
            transition: 'display 0.3s ease',
        };

        return (
            <div style={scrollToTopStyle} onClick={this.scrollToTop} >
                <a href="#top">
                <i className="fa-solid fa-arrow-up fa-bounce fa-lg"style={{fontSize: 50}}></i>
                </a>
            </div>
        );
    }
}

export default ScrollToTop;
