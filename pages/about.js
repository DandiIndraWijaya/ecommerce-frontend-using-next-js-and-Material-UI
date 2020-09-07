import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar';

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/">
                <a href="">Kembali ke Home Page</a>
            </Link>
            <Avatar alt="Pacar" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/ae/ae8f4d22b3c580c53c75783ae41e97b7a0f160c4.jpg" />
        </div>
    )
}

export default About;