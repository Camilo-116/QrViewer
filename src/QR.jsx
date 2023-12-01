import React, { useEffect } from "react";
import { useState } from "react";

function QR() {

  const [jwt, setJwt] = useState(null);

  const [currentQr, setCurrentQr] = useState(null);
  const [newQr, setNewQr] = useState(null);

  useEffect(() => {
    fetch("https://nook-pal-api.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": "alex.zgz@gmail.com",
        "password": "MiClave123*"
      }),
    })
      .then((res) => res.json())
      .then((data) => setJwt(data.access_token));
  }, []);

  setInterval(() => {
    fetch("https://nook-pal-api.onrender.com/company/return/code", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`
      },
    })
      .then((res) => res.json())
      .then((data) => setNewQr(data.code));
  }, 300000);

  useEffect(() => {
    if (currentQr === null && newQr !== null) {
      setCurrentQr(newQr);
    } else if (newQr !== currentQr) {
      setCurrentQr(newQr);
    }
  }, [newQr, currentQr]);

  return (
    <>
      <img id="qr" src={`https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${currentQr}`} alt="QR code" />
    </>
  );
}

export default QR;
