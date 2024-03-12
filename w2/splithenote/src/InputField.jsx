import { useState } from "react";

export default function InputField({ label, value, setValue}) {
    return (
        <label>
            {label}
            <input type="number" value={value} onChange={e => setValue(e.target.value)} />
            </label>
    );
}
