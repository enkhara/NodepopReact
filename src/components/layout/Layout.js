import React from 'react';

import Header from './Header';
import './Layout.css';

function Layout({ children, title, ...props }) {
	return (
		<div className="layout">
			<Header className="layout-header " {...props} />
			<main className="layout-main ">
				<h2 className="layout-title ">{title}</h2>
				<section className="layout-content">{children}</section>
			</main>
			<footer className="layout-footer ">© 2021 Nodepop</footer>
		</div>
	);
}

export default Layout;
