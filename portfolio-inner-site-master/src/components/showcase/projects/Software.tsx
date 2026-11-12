import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import cashier from '../../../assets/pictures/projects/software/sorentho-kasir.mp4';
// @ts-ignore
import boardingHouse from '../../../assets/pictures/projects/software/pengelola-kos.mp4';
import comics from '../../../assets/pictures/projects/software/komik-shiroko.png';
import classWebsite from '../../../assets/pictures/projects/software/web-kelas.png';
// @ts-ignore
import workshop from '../../../assets/pictures/projects/software/workshop.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const additionalProjects = [
    {
        title: 'Kasir App',
        description:
            'A cashier application for recording sales and organizing customer transactions through a digital checkout workflow.',
        preview: cashier,
        kind: 'video',
        caption: 'A preview of my cashier application.',
    },
    {
        title: 'Boarding House Management',
        description:
            'A web project for boarding-house management, designed to organize rental information and support day-to-day property tasks.',
        preview: boardingHouse,
        kind: 'video',
        caption: 'A preview of my boarding-house management project.',
    },
    {
        title: 'Shiroko Comics',
        description:
            'A modern anime and manga reader with a comic catalog, favorites, reading history, and community sections, designed for Indonesian readers.',
        preview: comics,
        kind: 'image',
        alt: 'Shiroko Comics home page',
        caption: 'The Shiroko Comics home page.',
    },
    {
        title: 'X1TKJ Class Website',
        description:
            'A website for the X1TKJ class at SMK Negeri 1 Tuntang, featuring class information, members, a gallery, moments, and a blog.',
        preview: classWebsite,
        kind: 'image',
        alt: 'X1TKJ class website home page',
        caption: 'The X1TKJ class website home page.',
    },
    {
        title: 'Workshop Website',
        description:
            'A website project introducing a workshop and presenting its information in a clear, easy-to-explore format.',
        preview: workshop,
        kind: 'video',
        caption: 'A preview of my workshop website project.',
    },
];

const SoftwareProjects: React.FC<SoftwareProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>brilliantsyahel</h2>
                <br />
                <p>
                    brilliantsyah.com is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2026, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early Agustus and began
                    development early Oktober. I've been developing it alongside
                    many activities/organizations at school, and if 
                    you're reading this, the site is almost finished!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        // href="https://henryheffernan.vercel.app/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
                </p>
                <br />
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on instagram{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://instagram.com/bryaant_el"
                    >
                        @bryaant_el
                    </a>
                </p>
            </div>
            {additionalProjects.map((project, index) => (
                <div className="text-block" key={project.title}>
                    <h2>{project.title}</h2>
                    <br />
                    <p>{project.description}</p>
                    <br />
                    <div className="captioned-image">
                        {project.kind === 'video' ? (
                            <VideoAsset src={project.preview} />
                        ) : (
                            <img
                                src={project.preview}
                                alt={project.alt}
                                style={styles.image}
                            />
                        )}
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure {index + 2}:</b> {project.caption}
                            </sub>
                        </p>
                    </div>
                </div>
            ))}
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
        height: 'auto',
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
