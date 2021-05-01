import { useRef, useEffect } from "react";

export default function ContactForm() {
    return (
       <>
        <section id="slide-5" className="block contact slide">
            <div className="wrapper">
                <div className="row">
                <div className="col">
                    <div className="content">
                        <h2 className="title">You have a story to tell. <span className="color-pop">Let's share it.</span></h2>
                        <form action="#">
                        <fieldset>
                            <input type="text" name="name" id="name" placeholder="What is your name?" />
                            <label htmlFor="name">Name</label>
                        </fieldset>
                        <fieldset>
                            <input type="text" name="email" id="email" placeholder="What is your email?" />
                            <label htmlFor="email">Email</label>
                        </fieldset>
                        <fieldset>
                            <textarea name="message" id="message" cols="30" rows="5" placeholder="What's on your mind?"></textarea>
                            <label htmlFor="message">Message</label>
                        </fieldset>
                        <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </section>
       </>
    )
}