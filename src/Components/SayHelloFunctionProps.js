import React from "react";

export const SayHello = (props) => { 
    const {name,secondName,children} = props;
    // props.name = Eldoka / ERROR --> propsy sa immutable i nie mozemy ich zmieniac
    return( // musimy dawac w div, bo mozemy zwracac tylko jeden element HTML
    <div> 
        <h1>Hello, my name is {name} and surname is {secondName}</h1>
        {children}
    </div>
    )
}
