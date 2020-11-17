import React from "react";

const contact = {
  fontSize: "18px",
  color: "grey",
  textAlign: "center",
  padding: "10rem 1rem",
};

function About() {
  return (
    <div style={contact}>
      <p>
        Ummmm, this is my first React App. Trying to know if it will finally
        stick to my head
      </p>
      <p>
        As you can see this contact page displays these dummy texts. Just added
        it so I can learn the React Router kini well(Dynamic Routing inclusive)
      </p>
      <p>
        I used Styled components for the styling though I did a little bit of
        inline too.
      </p>
      <p>
        The code won't obviously be clean cause this even took me time. I'm just
        happy I finally concluded it. Hoping to get better by day
      </p>
      <p>
        I almost forgot to say I also used HOOKS(useState, useEffect) I think
        they are so much btter than class components
      </p>
    </div>
  );
}

export default About;
