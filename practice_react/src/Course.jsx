const var1 = "Nice to meet you";

function Course(props) {

     if(props.show)
     {
      return (
        <div className="card">
            <h3>Good Morning</h3>
            <p>{var1}</p>
            <h3>{props.name}</h3> {/* Access props.name */}
            <p>{props.designation}</p>
            <p>{props.Exp}</p> {/* Access props.designation */}
            <img src={props.pic} alt="not available" />
        </div>
    );

     }
     else
     { 
       return(
         <div className="card">
          <h1>HELLO WORLD</h1>
         </div>
       );
     }

  Course.defaulProps={
    name:"x",
    designation:'y'
  }
}

export default Course;
