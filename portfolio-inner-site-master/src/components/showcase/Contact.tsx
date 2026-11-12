import React from 'react';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
            </div>
            <div className="text-block">
                <p>For questions or work inquiries, feel free to email me.</p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:brilliantsyah.webdev@gmail.com">
                        brilliantsyah.webdev@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
};

export default Contact;
