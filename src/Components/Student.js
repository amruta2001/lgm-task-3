export const Student = ({ userData }) => {
    return <div className="studentData">
        <div>
            <img alt='userImage' src={userData.imagelink} className='userImage'></img>
        </div>
        <div className="info">
            <p type='text' name='username' id='username'>Name: {userData.name}</p>
            <p type='text' name='email' id='email'>E-mail: {userData.email}</p>
            <p type='text' name='website' id='website'>Website: {userData.website}</p>
            <p type='text' name='gender' id='gender'>Gender: {userData.gender}</p>
            <p type='text' name='skills' id='skills'>Skills: {userData.skills}</p>
        </div>
    </div>
};