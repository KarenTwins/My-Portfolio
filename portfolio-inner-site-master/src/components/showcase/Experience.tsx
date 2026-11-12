import React from 'react';
import networkTopology from '../../assets/pictures/experience/topologi-jaringan.png';
import fiberSplicing from '../../assets/pictures/experience/fo-splicing.jpg';
import fiberAttenuation from '../../assets/pictures/experience/fo-tes-redaman.jpg';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Experience</h1>
            <p>
                Hands-on experience in computer networking and fiber-optic
                work.
            </p>
            <br />
            <section style={styles.experience}>
                <h2>Network Topology Design</h2>
                <h4>Cisco Packet Tracer</h4>
                <p>
                    I designed and visualized a network topology in Cisco
                    Packet Tracer, connecting computers with switches, routers,
                    and servers. This simulation helped me understand network
                    structure and how devices communicate.
                </p>
                <figure style={styles.mainFigure}>
                    <img
                        src={networkTopology}
                        alt="Network topology designed in Cisco Packet Tracer"
                        style={styles.mainImage}
                    />
                    <figcaption>
                        <p>Network topology simulation in Cisco Packet Tracer</p>
                    </figcaption>
                </figure>
            </section>
            <section style={styles.experience}>
                <h2>Fiber Optic Splicing &amp; Attenuation Testing</h2>
                <p>
                    I practiced joining fiber-optic cable using a fusion
                    splicer, then checked optical power and attenuation with an
                    optical power meter. This gave me practical exposure to
                    fiber-optic splicing and checking the connection.
                </p>
                <div style={styles.gallery}>
                    <figure style={styles.galleryItem}>
                        <img
                            src={fiberSplicing}
                            alt="Practicing fiber-optic cable splicing with a fusion splicer"
                            style={styles.galleryImage}
                        />
                        <figcaption>
                            <p>Fiber-optic cable splicing practice</p>
                        </figcaption>
                    </figure>
                    <figure style={styles.galleryItem}>
                        <img
                            src={fiberAttenuation}
                            alt="Measuring fiber-optic signal power with an optical power meter"
                            style={styles.galleryImage}
                        />
                        <figcaption>
                            <p>Optical power and attenuation measurement</p>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    );
};

const styles: StyleSheetCSS = {
    experience: {
        flexDirection: 'column',
        width: '100%',
        paddingBottom: 24,
        marginBottom: 24,
        borderBottom: '1px solid #808080',
    },
    mainFigure: {
        margin: '16px 0 0',
    },
    mainImage: {
        display: 'block',
        width: '100%',
        maxWidth: 760,
        height: 'auto',
    },
    gallery: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: 16,
        marginTop: 16,
    },
    galleryItem: {
        flex: '1 1 280px',
        minWidth: 0,
        margin: 0,
    },
    galleryImage: {
        display: 'block',
        width: '100%',
        height: 'auto',
    },
};

export default Experience;
