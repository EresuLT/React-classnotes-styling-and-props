import Msg from "./Msg";

const Person = ({ name, img, tel }) => {
    // const Person = (props) => {}
    // const{name,img,tel} = props;
    return (
        <div>
            {/* <h1>Merhaba {name}</h1> */}
            <Msg name={name} />
            <img src={img} alt="" />
            <p>{tel}</p>
        </div>
    )
}

export default Person;