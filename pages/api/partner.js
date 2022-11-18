import axios from "axios";
export default async function handler (req, res) {
    if(req.method === 'POST') {
        const { name, position, company, address, email, phone, whatsApp } = req.body;
        var data = JSON.stringify({
            "nama": name,
            "jabatan": position,
            "perusahaan": company,
            "alamat": address,
            "no_hp": phone,
            "email": email,
            "whatsapp": whatsApp,
        });

        console.log(data)
        var config = {
            method: 'post',
            url: `${process.env.api_external}sendEmail`,
            headers: { 
                'Authorization': 'Bearer S3Cu121tyMur4p4YM4d3xByY4yS4ng3X', 
                'Content-Type': 'application/json'
            },
            data : data
        };

        await axios(config)
        .then(function (response) {
            res.status(200).json(response.data);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });

    }
}