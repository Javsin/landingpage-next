import axios from "axios";
export default async function handler (req, res) {
    res.setHeader('Cache-Control', 's-maxage=10');
    let config = {
        method: 'post',
        url: `${process.env.api_external}harga`,
        headers: { 
            'Authorization': 'Bearer S3Cu121tyMur4p4YM4d3xByY4yS4ng3X'
        }
    };
    await axios(config)
      .then(function (response) {
        res.status(200).json(JSON.stringify(response.data));
    }).catch(function (error) {
        res.status(500).json(error);
    });  
}