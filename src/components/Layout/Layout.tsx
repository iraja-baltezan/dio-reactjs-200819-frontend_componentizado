import React from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
        <header>Status/Score</header>
        <main>
            {children}
        </main>
        <footer>Main Menu</footer>
        </>
    );
}

export default Layout;