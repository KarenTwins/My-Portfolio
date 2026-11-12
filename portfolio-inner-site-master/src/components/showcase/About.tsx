import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import childhoodPhoto from '../../assets/pictures/workingAtComputer.jpg';
import schoolPhoto from '../../assets/pictures/currentme.jpg';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrentDate(new Date());
        }, 60_000);

        return () => window.clearInterval(interval);
    }, []);

    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Brilliantsyah El</h3>
            <br />
            <div className="text-block">
                <p>
                    As of {formattedDate}, I'm a vocational high school student
                    in Indonesia, learning how to build websites. I'm working
                    toward my dream of becoming a professional web developer
                    within the next five years.
                </p>
                <br />
                <p>
                    Thank you for taking the time to visit my portfolio. I hope
                    you enjoy exploring it as much as I enjoyed building it. If
                    you have any questions or comments, feel free to contact me
                    using <Link to="/contact">this form</Link> or email me at{' '}
                    <a href="mailto:brilliantsyah.webdev@gmail.com">
                        brilliantsyah.webdev@gmail.com
                    </a>
                    .
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I've always been curious about how things work. As a child,
                    I loved building things with LEGO. In middle school, I
                    joined a coding club, where I got my first experience with
                    programming. In 2021, I moved to Salatiga after losing my
                    parents passed away while I was in elementary school, and
                    continued my education there.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={childhoodPhoto}
                        alt="Brilliantsyah as a child"
                        style={styles.image}
                    />
                    <p>
                        <sub>
                            <b>Figure 1:</b> A photo of me as a child.
                        </sub>
                    </p>
                </div>
                <p>
                    I started taking coding more seriously in middle school. I
                    learned on my own by watching YouTube and experimenting
                    with websites. Since then, I've worked on small projects
                    such as workshop projects, simple games, and a cashier
                    application. You can see one of my projects on my{' '}
                    <Link to="/projects/software">Software Projects page</Link>.
                </p>
                <br />
                <h3>My Hobbies</h3>
                <br />
                <p>
                    Outside of coding, I enjoy playing basketball,
                    volleyball, and Billiards, and working out at the gym. I've taken part in
                    two basketball tournaments, and I still enjoy playing even
                    though my teams haven't won a match yet. I also play
                    volleyball with friends on the court near my home. In my
                    free time, I enjoy cooking and playing video games. You can
                    explore more of my interests under the Projects section.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={schoolPhoto}
                        alt="Brilliantsyah in school uniform"
                        style={styles.image}
                    />
                    <p>
                        <sub>
                            <b>Figure 2:</b> Me in February 2022.
                        </sub>
                    </p>
                </div>
                <p>
                    Thanks for reading about me! I hope you enjoy exploring the
                    rest of my portfolio. If you find the Easter egg, let me
                    know at <b>@bryaant_el</b>. Good luck, and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments, I'd be happy to hear
                    from you. You can reach me through the{' '}
                    <Link to="/contact">Contact page</Link> or email me at{' '}
                    <a href="mailto:brilliantsyah.webdev@gmail.com">
                        brilliantsyah.webdev@gmail.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        maxWidth: 480,
        height: 'auto',
    },
};

export default About;
