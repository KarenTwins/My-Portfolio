import React from 'react';

export interface ContactProps {}

const emailAddress = 'brilliantsyah.webdev@gmail.com';

const Contact: React.FC<ContactProps> = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get('name') || '');
        const email = String(formData.get('email') || '');
        const company = String(formData.get('company') || '');
        const message = String(formData.get('message') || '');
        const body = [
            `Name: ${name}`,
            `Email: ${email}`,
            `Company: ${company || 'Not provided'}`,
            '',
            message,
        ].join('\n');

        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
            `Portfolio contact from ${name}`
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="site-page-content contact-page">
            <style>{`
                .contact-page {
                    box-sizing: border-box;
                    width: calc(100% - 300px);
                    min-width: 0;
                    padding-right: 64px;
                }

                .contact-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 24px;
                    margin-bottom: 12px;
                }

                .contact-header h1 {
                    line-height: 1;
                }

                .contact-socials {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                }

                .contact-social-link {
                    display: inline-flex;
                    width: 42px;
                    height: 42px;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    border: 1px solid #777;
                    color: #333;
                    background: rgba(255, 255, 255, 0.45);
                    text-decoration: none;
                    transition: background-color 120ms ease, transform 120ms ease;
                }

                .contact-social-link:hover,
                .contact-social-link:focus-visible {
                    background: #e7e7e7;
                    transform: translateY(-2px);
                }

                .contact-social-link:focus-visible {
                    outline: 2px solid #174ea6;
                    outline-offset: 2px;
                }

                .contact-social-link svg {
                    width: 22px;
                    height: 22px;
                    fill: currentColor;
                }

                .contact-copy {
                    margin-top: 8px;
                    margin-bottom: 20px;
                    max-width: 860px;
                    text-align: left;
                }

                .contact-email {
                    margin: 0 0 24px;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    width: 100%;
                    max-width: 860px;
                }

                .contact-field {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .contact-field label {
                    font-family: MillenniumBold, 'Times New Roman', Times, serif;
                    font-size: 18px;
                }

                .contact-required {
                    color: #bd302b;
                }

                .contact-field input,
                .contact-field textarea {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 6px 8px;
                    border: 1px solid #777;
                    border-radius: 0;
                    box-shadow: none;
                    background: rgba(255, 255, 255, 0.38);
                    color: #222;
                    font-family: Millennium, 'Times New Roman', Times, serif;
                    font-size: 18px;
                    user-select: text;
                    -webkit-user-select: text;
                }

                .contact-field input {
                    min-height: 36px;
                }

                .contact-field textarea {
                    min-height: 130px;
                    resize: vertical;
                }

                .contact-field input:focus,
                .contact-field textarea:focus {
                    outline: 2px solid #174ea6;
                    outline-offset: 1px;
                    background: #fffef0;
                }

                .contact-form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                    margin-top: 4px;
                }

                .contact-form button {
                    min-height: 34px;
                    padding: 4px 18px;
                    border: 1px solid #777;
                    border-radius: 0;
                    background: #c4c4c4;
                    box-shadow: inset 1px 1px #f8f8f8, inset -1px -1px #888;
                    color: #222;
                    cursor: pointer;
                    font-family: Millennium, 'Times New Roman', Times, serif;
                    font-size: 18px;
                }

                .contact-form button:hover {
                    background: #d7d7d7;
                }

                .contact-form button:active {
                    box-shadow: inset -1px -1px #f8f8f8, inset 1px 1px #888;
                }

                .contact-form button:focus-visible {
                    outline: 2px solid #174ea6;
                    outline-offset: 2px;
                }

                .contact-form-note {
                    margin: 0;
                    color: #333;
                    font-size: 16px;
                    text-align: right;
                }

                .contact-legend {
                    margin: 0;
                    color: #555;
                    font-size: 15px;
                    text-align: right;
                }

                @media (max-width: 900px) {
                    .showcase-window {
                        top: 8px !important;
                        left: 8px !important;
                        width: calc(100vw - 16px) !important;
                        height: calc(100vh - 16px) !important;
                    }

                    .contact-page {
                        padding-right: 24px;
                    }

                    .contact-header {
                        align-items: flex-start;
                        flex-wrap: wrap;
                        gap: 14px;
                    }

                    .contact-header h1 {
                        font-size: 52px;
                    }

                    .contact-socials {
                        width: 100%;
                        justify-content: flex-end;
                    }
                }

                @media (max-width: 600px) {
                    .showcase-page .showcase-navbar {
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                        z-index: 20;
                        display: block !important;
                        width: 100% !important;
                        height: auto !important;
                        max-height: 76px;
                        box-sizing: border-box !important;
                        overflow-x: hidden !important;
                        overflow-y: auto !important;
                        padding: 8px 10px !important;
                        border-bottom: 1px solid #999;
                        background: #fff;
                    }

                    .showcase-navbar-header,
                    .showcase-navbar-spacer,
                    .showcase-navbar-hire {
                        display: none !important;
                    }

                    .showcase-page .showcase-navbar-links {
                        display: flex !important;
                        width: 100%;
                        flex-direction: row !important;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between !important;
                        gap: 4px 8px;
                        margin: 0 !important;
                    }

                    .showcase-navbar-links > a {
                        flex: 0 0 auto;
                        margin: 0 !important;
                    }

                    .showcase-navbar-links .router-link {
                        font-size: 14px;
                    }

                    .contact-page {
                        width: 100%;
                        margin-left: 0;
                        padding: 92px 16px 24px;
                    }

                    .contact-header {
                        gap: 12px;
                    }

                    .contact-socials {
                        justify-content: flex-start;
                    }
                }

                @media (max-width: 480px) {
                    .contact-page {
                        padding-right: 16px;
                        padding-left: 16px;
                    }

                    .contact-social-link {
                        width: 38px;
                        height: 38px;
                    }

                    .contact-form-footer {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .contact-form-note,
                    .contact-legend {
                        text-align: left;
                    }
                }
            `}</style>
            <header className="contact-header">
                <h1>Contact</h1>
                <nav className="contact-socials" aria-label="Social profiles">
                    <a
                        className="contact-social-link"
                        href="https://github.com/KarenTwins"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my GitHub profile (opens in a new tab)"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49v-1.9c-2.85.62-3.45-1.21-3.45-1.21-.46-1.18-1.13-1.5-1.13-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.56 2.4 1.11 2.99.85.09-.66.36-1.11.65-1.37-2.28-.26-4.67-1.14-4.67-5.08 0-1.12.4-2.04 1.06-2.76-.1-.26-.46-1.3.1-2.72 0 0 .86-.28 2.8 1.05a9.7 9.7 0 0 1 5.1 0c1.94-1.33 2.8-1.05 2.8-1.05.56 1.42.2 2.46.1 2.72.66.72 1.06 1.64 1.06 2.76 0 3.95-2.4 4.82-4.69 5.07.37.32.7.95.7 1.92v2.85c0 .27.19.59.71.49A10.2 10.2 0 0 0 12 1.8Z" />
                        </svg>
                    </a>
                    <a
                        className="contact-social-link"
                        href="https://www.linkedin.com/in/brilliantsyah-el-huda-firdaus-guretno/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my LinkedIn profile (opens in a new tab)"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5.2 3.4a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.4 9h3.7v11.6H3.4V9Zm5.9 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v6.2h-3.7v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6H9.3V9Z" />
                        </svg>
                    </a>
                    <a
                        className="contact-social-link"
                        href="https://instagram.com/bryaant_el"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit my Instagram profile (opens in a new tab)"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M7.2 2.5h9.6a4.7 4.7 0 0 1 4.7 4.7v9.6a4.7 4.7 0 0 1-4.7 4.7H7.2a4.7 4.7 0 0 1-4.7-4.7V7.2a4.7 4.7 0 0 1 4.7-4.7Zm0 1.8a2.9 2.9 0 0 0-2.9 2.9v9.6a2.9 2.9 0 0 0 2.9 2.9h9.6a2.9 2.9 0 0 0 2.9-2.9V7.2a2.9 2.9 0 0 0-2.9-2.9H7.2Zm10 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z" />
                        </svg>
                    </a>
                </nav>
            </header>

            <div className="text-block contact-copy">
                <p>
                    I am currently employed, however if you have any
                    opportunities, feel free to reach out — I would love to
                    chat! You can reach me via my personal email, or fill out
                    the form below.
                </p>
            </div>

            <p className="contact-email">
                <b>Email: </b>
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field">
                    <label htmlFor="contact-name">
                        <span className="contact-required" aria-hidden="true">
                            *
                        </span>{' '}
                        Your name:
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        autoComplete="name"
                        required
                    />
                </div>
                <div className="contact-field">
                    <label htmlFor="contact-email">
                        <span className="contact-required" aria-hidden="true">
                            *
                        </span>{' '}
                        Email:
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="contact-field">
                    <label htmlFor="contact-company">Company (optional):</label>
                    <input
                        id="contact-company"
                        name="company"
                        type="text"
                        placeholder="Company"
                        autoComplete="organization"
                    />
                </div>
                <div className="contact-field">
                    <label htmlFor="contact-message">
                        <span className="contact-required" aria-hidden="true">
                            *
                        </span>{' '}
                        Message:
                    </label>
                    <textarea
                        id="contact-message"
                        name="message"
                        placeholder="Message"
                        required
                    />
                </div>
                <div className="contact-form-footer">
                    <button type="submit">Send Message</button>
                    <div>
                        <p className="contact-form-note">
                            Your email app will open with this message addressed
                            to my personal email.
                        </p>
                        <p className="contact-legend">
                            <span className="contact-required">*</span> = required
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;
