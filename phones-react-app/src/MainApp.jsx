import React from 'react';
import PhoneListContainer from './PhoneListContainer';
//import css from './MainApp.scss';
const Header = ({ title }) => (<header>{title}</header>);
const Main = ({ title }) => (<main><PhoneListContainer /></main>);
const Footer = ({ title }) => (<footer>{title}</footer>);

export default class MainApp extends React.Component {
    render() {
        const { header, main, footer } = this.props;
        return (
            <div className="app">
                <Header title={header} />
                <Main title={main} />
                <Footer title={footer} />
            </div>
        );
    }
};
