import saniltyClient from '@sanity/client';

export const client = saniltyClient({
    projectId: 'sd01tic7',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skJVaqwIYjvTmxT3uWST4K3zKiqWm7p7zp5vus0Ymn6wqDjbDvkAkncSWOT67FFEgis7KyZvhMePp0X20Dkufby0Pyp6VQgXOtC2MrJf7WHwS2geTxL1vSFAsmasXQGalHURprNFWLbqQAvHF9azZmWKvBKVA6wFoRXrOllhItr01SZ02UMZ',
    useCdn: false,
    
})
