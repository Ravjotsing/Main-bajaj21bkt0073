//import express module
const express = require('express')
//create router instance
const router = express.Router()
// get api
router.get("/bfhl",(req, res) => {
    console.log('get request')
    res.json({
        "operation_code":1
       })
})
// post api
router.post("/bfhl",(req, res) => {
    const data = req.body.data;

    const numbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[A-Za-z]+$/.test(item)) {
            alphabets.push(item);
        }
    });

    alphabets.sort();
    const highestAlphabet = alphabets[0] ? [alphabets[0]] : [];

    res.json({
        "is_success": true,
        "user_id": "Pavan_Vitesh_Kuncham_07062004",
        "email" : "pavanvitesh_k@srmap.edu.in",
        "roll_number":"AP21110011080",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_alphabet": highestAlphabet
    });
})

//export router
module.exports = router