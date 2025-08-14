import React, { useRef, useState } from 'react';
import './Contacts.css';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'motion/react';
import ContactSvg from './ContactSvg';
import { useSectionInView } from '@reusable/useSectionInView';

export default function Contacts() {

  const myContactData = [
    { "platform": "LinkedIn", "url": "https://www.linkedin.com/in/pratyush-kumar/", "logo": "/icons8-linkedin-50.png" },
    { "platform": "Telegram", "url": "https://t.me/MightyThinker", "logo": "/icons8-telegram-50.png" },
    { "platform": "Instagram", "url": "https://www.instagram.com/_pratyush_kumar_/", "logo": "/icons8-instagram-50.png" }
  ];

  const { ref, controls } = useSectionInView({ threshold: 0.3 });
  const myForm = useRef();

  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogType, setDialogType] = useState('success'); // success | error
  const dialogRef = useRef(null);

  const handleDialogClose = () => {
    dialogRef.current?.close();
    myForm.current?.reset(); // clear form inputs
    setDialogMessage('');
  };

  // Modal animation
  const dialogVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
  };

  // Zoom-in from background
  const cSectionLeft = {
    hidden: { scale: 0.8, opacity: 0, z: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      z: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    }
  };

  // Zoom-in from foreground
  const cSectionRight = {
    hidden: { scale: 1.4, opacity: 0, z: 10 },
    visible: {
      scale: 1,
      opacity: 1,
      z: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // Form zoom-in (same as right section, but stagger children)
  const formSection = {
    hidden: { scale: 0.7, opacity: 0, z: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      z: 0,
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.25 }
    }
  };

  const formItem = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  // Email Sending for message from viewer
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        myForm.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setDialogType('success');
          setDialogMessage("Your message has been sent.");
          dialogRef.current?.showModal();
          console.log('SUCCESS!');
        },
        (error) => {
          setDialogType('error');
          setDialogMessage("Your message could not be sent!");
          dialogRef.current?.showModal();
          console.log('FAILED...', error?.text);
        },
      );
  }

  return (
    <React.Fragment>
      <div ref={ref} className="contacts">

        {/* Left Section */}
        <motion.div variants={cSectionLeft} animate={controls} className="cSection">

          {/* Form */}
          <motion.form variants={formSection} animate={controls} ref={myForm} onSubmit={sendEmail}>
            <motion.h1 variants={formItem} className='cTitle'>Let's keep in touch.</motion.h1>
            <motion.div variants={formItem} className="form-item">
              <label htmlFor="name">Name</label>
              <input name='user_name' required type="text" id="name" placeholder='John Doe' />
            </motion.div>
            <motion.div variants={formItem} className="form-item">
              <label htmlFor="email">Email</label>
              <input name='user_email' required type="email" id="email" placeholder='john.doe@example.com' />
            </motion.div>
            <motion.div variants={formItem} className="form-item">
              <label htmlFor="message">Message</label>
              <textarea name='user_message' required rows={5} id="message" placeholder='Write your message...' />
            </motion.div>
            <motion.button variants={formItem} className="form-button">Send</motion.button>
          </motion.form>

          {/* Other Social Connection Option */}
          <motion.h4 className='cTitle' variants={formItem}>or, you can connect with me on</motion.h4>
          <motion.div variants={formItem} className="cSocial">
            {myContactData.map(({ platform, url, logo }) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt={platform} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated SVG */}
        <motion.div variants={cSectionRight} animate={controls} className="cSection">
          <ContactSvg />
        </motion.div>
      </div>
      {/* Native Dialog */}
      <AnimatePresence>
        <dialog
          ref={dialogRef}
          className={`dialog-box ${dialogType}`}
          onClick={(e) => {
            if (e.target === dialogRef.current) {
              handleDialogClose();
            }
          }}
        >
          <motion.div
            className='dialog-content'
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>{dialogMessage}</p>
            <button className={`dialog-btn ${dialogType}`} onClick={handleDialogClose}>OK</button>
          </motion.div>
        </dialog>
      </AnimatePresence>
    </React.Fragment>
  )
}
