import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qCvs-cM3S51bbf0lL7t263SMp8-mtjDVm5tXPDWex_s'
  }
});
