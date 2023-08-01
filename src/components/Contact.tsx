import React, {useRef, useState} from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {Earth} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion";
import axios from "axios";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>();

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [result, setResult] = useState({message: 1, error: null})
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const hideModal = () => {
        setModalOpen(false)
        setForm({email: "", message: "", name: ""})
        document.body.classList.remove('overflow-hidden')
        setTimeout(() => {
            setResult({message: null, error: null})
        }, 500)
    }

    const showModal = (result) => {
        setResult(result)
        setModalOpen(true)
        document.body.classList.add('overflow-hidden')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
            service_id: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            template_id: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            user_id: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            template_params:{
                from_name: form.name,
                to_name: "Maksym Zubko",
                from_email: form.email,
                to_email: "makzzubko66@gmail.com",
                message: form.message,
            }
        }).then(result => {
            console.log(result)
            setLoading(false);
            showModal({message: "Thank you. I will get back to you as soon as possible.", error: null})
            setForm({
                name: "",
                email: "",
                message: "",
            });
        }).catch(error=>{
            setLoading(false);
            console.error(error);

            showModal({message: "Ahh, something went wrong. Please try again.", error: error?.response?.data ?? "Something went wrong. Try again."})
        })
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div animate={{
                opacity: modalOpen ? 1 : 0,
                zIndex: modalOpen ? 20 : -1,
                transition: {duration: 0.25, delay: modalOpen ? 0 : 0.25}
            }}
                        initial={{opacity: 0, zIndex: -1}}
                        className={`fixed z-20 h-screen w-screen bg-[#00000080] left-0 bottom-0 flex items-center justify-center overflow-hidden`}>
                <motion.div initial={{scale: 0}} animate={{scale: modalOpen ? 1 : 0}}
                            transition={{duration: 0.25, delay: modalOpen ? 0.25 : 0}}
                            className={"flex flex-col z-10 bg-black-100 p-8 rounded-2xl absolute md:min-w-[240px] sm:w-auto w-[90%] min-w-[120px] gap-10 min-h-[200px]"}>
                    <h3 className={`${styles.sectionHeadText}`}>{result.error ? "Oops.." : "Thanks."}</h3>
                    <p className={`${styles.sectionSubText}`}>{result.error ?? "Thank you. I will get back to you as soon as possible."}</p>
                    <button
                        className='self-center bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                        onClick={hideModal}
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
            <motion.div
                variants={slideIn("left", "tween", 0.7, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    noValidate={true}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8 group'
                >
                    <label className='flex flex-col'>
                        <span
                            className="text-white font-medium mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Your Name</span>
                        <input
                            minLength={2}
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            disabled={loading}
                            required
                            placeholder="What's your good name?"
                            className='name bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium peer'
                        />
                        <p className="mt-2 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible text-pink-600 text-sm">
                            Please provide a valid name.
                        </p>
                    </label>
                    <label className='flex flex-col'>
                        <span
                            className="text-white font-medium mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Your email</span>
                        <input
                            minLength={4}
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            disabled={loading}
                            required
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium peer'
                            pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
                        />
                        <p className="mt-2 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible text-pink-600 text-sm">
                            Please provide a valid email address.
                        </p>
                    </label>
                    <label className='flex flex-col'>
                        <span
                            className="text-white font-medium mb-4 after:content-['*'] after:ml-0.5 after:text-red-500">Your Message</span>
                        <textarea
                            minLength={3}
                            rows={7}
                            name='message'
                            value={form.message}
                            disabled={loading}
                            onChange={handleChange}
                            required
                            placeholder='What you want to say?'
                            className='message sm:max-h-[220px] sm:min-h-[100px] max-h-[100px] bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium peer'
                        />
                        <p className="mt-2 invisible peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible text-pink-600 text-sm">
                            Please tell me more about what you would like to write.
                        </p>
                    </label>

                    <button
                        type='submit'
                        disabled={loading}
                        className='relative bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary group-invalid:pointer-events-none group-invalid:opacity-30 flex items-center justify-center'
                    >
                        <motion.span animate={{opacity: loading ? 0 : 1}} className={''}>
                            {loading ? "Sending..." : "Send"}
                        </motion.span>
                        <motion.span initial={{scale: 0}} animate={{scale: loading ? 1 : 0, rotate: 360}}
                                     transition={{rotate: {type: "tween", duration: 2, repeat: Infinity}}}
                                     className={'rounded-[50%] border-dashed w-[40px] h-[40px] border-2 absolute border-white-100'}>

                        </motion.span>
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] h-max-[calc(screen-200px)]'
            >
                <Earth/>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact", true);
