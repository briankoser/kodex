import fetch from 'node-fetch'

export default async () => {
    const BUILD_HOOK = 'https://api.netlify.com/build_hooks/664ce70493cb4b06ea4d6d38'
    
    await fetch(BUILD_HOOK, {
        method: 'POST'
    }).then(response => {
        console.log('Build hook response:', response)
    })
}