import fetch from 'node-fetch'

export default async (req) => {
    const BUILD_HOOK = 'https://api.netlify.com/build_hooks/664ce70493cb4b06ea4d6d38'
    await fetch(BUILD_HOOK, {
        method: 'POST'
    }).then(response => {
        console.log('Build hook response:', response)
    });

    const { next_run } = await req.json()
    console.log("Received event! Next invocation at:", next_run)
}

export const config = {
    schedule: "@daily"
}