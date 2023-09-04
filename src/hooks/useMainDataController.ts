import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useMainDataController = () => {
    const [formData, setFormData] = useState({
        sentence1: "",
        sentence2: ""
    });

    const [result, setResult] = useState("");

    const onSubmit = () => {
        const sample1 = formData.sentence1.trim().replace(/ /g, "").split("");
        const sample2 = formData.sentence2.trim().replace(/ /g, "").split("");
        const buffer = [];
        let outp = sample1.filter(letter1 => {
            let isValid = sample2.includes(letter1) && !buffer.includes(letter1);
            if(isValid === true) {
                buffer.push(letter1);
            }

            return isValid;
        })

        outp = outp.join("");

        setResult(outp);
    }

    return { formData, setFormData, result, onSubmit };
}

export default useMainDataController;