import React from 'react'

import './brownbutton.styles.scss'

const BrownButton= ({
    children,
    inverted,
    isGoogleSignIn,
    ...otherProps
}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}brownbutton` } {...otherProps}>{children}</button>
);

export default BrownButton;