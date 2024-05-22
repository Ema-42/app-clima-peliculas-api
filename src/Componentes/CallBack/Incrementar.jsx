import React from "react";

const Incrementar = React.memo(({incrementar}) => {
    console.log('me estoy redibujando')
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={()=>incrementar(1)}>
        Incrementar +1
      </button>
    </>
  );
})

export default Incrementar;
