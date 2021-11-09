import React,{useState} from "react";

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: "Black",
        backgroundColor: "white",
        // border: "0.1px solid white",
        borderColor: "white"

        
    })
    const [btntext, setBtntext] = useState("Enable Dark Mode")

    const toggleStyle = ()=>{
       if (myStyle.color === 'white') {
          setMyStyle({
            color: "black",
            backgroundColor: "white",
          }) 
          setBtntext("Enable Dark Mode")
       } 
       else{
           setMyStyle({
            color: "white",
            backgroundColor: "black",
            borderColor: "white"
           }) 
           setBtntext("Enable Light Mode")
       }
    }
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us </h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, magni qui aliquid necessitatibus porro beatae libero accusamus temporibus doloribus excepturi consequatur perspiciatis culpa quas explicabo nisi, ducimus architecto. Cupiditate, molestias.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, nostrum error. Nisi nulla pariatur quam alias suscipit temporibus doloribus soluta reprehenderit sunt, assumenda cumque dolores! Harum minus rerum ullam rem!
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button" style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={myStyle}>
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body" style={myStyle}>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third item's accordion body. Nothing more exciting happening here
              in terms of content, but just filling up the space to make it
              look, at least at first glance, a bit more representative of how
              this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}
