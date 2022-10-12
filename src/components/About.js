function About(props) {
    const imageProp = props.image ? props.image : "https://via.placeholder.com/215";

    return (
        <aside>
            <img src={imageProp} alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About;