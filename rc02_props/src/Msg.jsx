const Msg = (props) => {
    // console.log(props);

    //! Destructuring
    const { name } = props; //props içinden name'i çıkardık
    
    return (
        <div>
            <h3>Merhaba {name}</h3>
        </div>
    )
}

export default Msg;