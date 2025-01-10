import React, { useState } from 'react'

const QrCodeGenerator = () => {
    const [qrCode, setQrCode] = useState("")
    const [input, setInput] = useState("");

    function handleGeneraterQrCode() {
        setQrCode(input)
        console.log(setQrCode);
    }

    return (
        <div>
            <h1>Qr code generator</h1>
            <div className="input-info">
                <input type="text" name='qr-code' placeholder='Enter your value' />
                <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGeneraterQrCode} >Generator</button>
            </div>
            <div className="qr-code">
                <QrCodeGenerator id="qrCode-value" />
            </div>
        </div>
    )
}

export default QrCodeGenerator
