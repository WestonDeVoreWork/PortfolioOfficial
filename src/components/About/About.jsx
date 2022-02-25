import 'bootstrap/dist/css/bootstrap.min.css';
import ContactMe from '../contactMe/ContactMe';
import Navbar from '../Navbar/Navbar';
import "./About.css"

const About = () => {
    
    return (
        <div className="mainDivAbout">
            <Navbar />
            <h1 className="text-center pb-3" id="TextAboutMe">ABOUT ME</h1>
            
            <div className='AllTextMainDiv'>
                <div className='AsADeveloperTextDiv'>
                    <div className='AsADeveloperTitle'>
                        <h5>AS A DEVELOPER</h5>
                    </div>
                    <div className='AsADeveloperMainText'>
                        <p id="paragraphText">My name is Weston DeVore. I originally got into programming in 2013 through Minecraft’s “command blocks.” I was in 5th grade. I would spend hours creating what are essentially loops and classes and changing different things about the game to make it operate in new and exciting ways. As I got more into it, I started spending hours every night working on it. I realized that I rather enjoyed coding more broadly, not just making “mini-games” in Minecraft. In 8th grade, I started learning C++. Although, due to a bunch of sudden life changes that were out of my control, it ended up fading out of my life for a few years. Life became more complicated. I didn’t have the time or the energy to spend all night teaching myself how to code. At the end of high school, I decided to try to get back into it for a career. I’m good at at, I enjoy it, to an extent, and it pays fairly well. And so, I joined the Eleven Fifty Academy to start my career as a Web Developer. That was the beginning of my journey.</p>
                    </div>
                </div>

                <div className='OutsideCodingTextDiv'>
                    <div className='OutsideCodingTitle'>
                        <h5>OUTSIDE OF CODING</h5>
                    </div>
                    <div className='OutsideCodingMainText'>
                        <p id="paragraphText">Outside of programming, I have many hobbies. I’m a photographer on the side. I never make any money from it, but it’s a great hobby! Every image you see on this site was a photo that I took and edited using Photoshop or Gimp. Alongside photography comes my love for Video Editing. I love story-crafting. In a way, when editing a film, you are telling a story. From the music choice to the types of transitions you utilize to the pacing, every single cut or fade is a way to communicate a message or envoke an emotion. My love for story-crafting lead me, naturally, to writing. I enjoy writing screenplays, which are scripts for movies and TV shows. Through writing, I’ve learned the importance of color. The simply choice of “Character A is wearing all-white” can communicate a lot. I have found a lot of this is the same with Front-End Development. From the color-choice to the Font-Style to where to put the “More Info” button, it’s all about how you guide the user’s eyes to where you want them to go.</p>
                    </div>
                </div>
            </div>
<br />
        <ContactMe />
        
            
        </div>
    )
}

export default About;