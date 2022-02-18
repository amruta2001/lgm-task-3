import React from 'react';

const StudentInputs = ({ setUserRegistration }) => {

    const handleInput = (event) => {
        event.target.username.value = '';
        event.target.email.value = '';
        event.target.website.value = '';
        event.target.imagelink.value = '';
        event.target.gender.value = '';
        event.target.skills.value = '';
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: event.target.username.value,
            email: event.target.email.value,
            website: event.target.website.value,
            imagelink: event.target.imagelink.value,
            gender: event.target.gender.value,
            skills: event.target.skills.value,

        }
        setUserRegistration((oldData) => {
            console.log([...oldData, data])
            return [...oldData, data]
        })
        handleInput(event);
    }
    return (
        <>

            <h1> STUDENT ENROLLMENT FORM </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Name</label>
                    <input type='text' autoComplete='off' name='username' id='usename' required />
                </div>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input type='text' autoComplete='off' name='email' id='email' required />
                </div>
                <div>
                    <label htmlFor='website'>Website</label>
                    <input type='text' autoComplete='off' name='website' id='website' required />
                </div>
                <div>
                    <label htmlFor='imagelink'>Image Link</label>
                    <input type='text' autoComplete='off' name='imagelink' id='imagelink' required />
                </div>
                <div className='gender' id='gender'>
                    <label htmlFor='gender'>Gender</label>
                    <select name='gender' defaultValue='' required>
                        <option value='' hidden>Select Your Gender</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>

                </div>
                <div className='skills' id='skills'>
                    <label htmlFor='skills'>Skills</label>
                    <select className='skills' name='skills' defaultValue='' required>
                        <option value='' hidden>Select Your Skills</option>
                        <option value='HTML'>HTML</option>
                        <option value='CSS'>CSS</option>
                        <option value='JavaScript'>JavaScript</option>
                    </select>

                </div>

                <button className='firstbutton' type='submit'>Enroll Student</button>
                <button className='secondbutton' type='reset'>Clear</button>
            </form>

        </>
    )
};

export default StudentInputs;