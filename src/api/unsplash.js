import axios from 'axios';

export default axios.create({
    baseUrl: 'http://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ChVPr_vNvQPLq-fZnpNXU-CVMBs6jpNFRREQ3mhjYSo'
    }
})