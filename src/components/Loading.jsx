import React from "react";

export default function Loading() {
  return (
<center>
<div className="  spinner-grow" style={{width: "3rem", height: "3rem", role:"status",margin:"70px"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="  spinner-grow" style={{width: "3rem", height: "3rem", role:"status",margin:"70px"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="  spinner-grow" style={{width: "3rem", height: "3rem", role:"status",margin:"70px"}}>
      <span className="visually-hidden">Loading...</span>
    </div>
</center>
  );
}
