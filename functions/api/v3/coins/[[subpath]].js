const TARGET_BASE_URL = 'https://api.coingecko.com/api/v3/coins/'

export async function onRequestGet(context) {
    try {
        // get the api path
        const subpath = context.params.subpath.join('/')

        const originalUrl = new URL(context.request.url)
        const originalParams = originalUrl.searchParams

        const targetUrl = new URL(TARGET_BASE_URL + subpath)

        // Copy all original query params
        for (const [key, value] of originalParams) {
            targetUrl.searchParams.set(key, value)
        }

        // Add the api key
        targetUrl.searchParams.set('x_cg_demo_api_key', context.env.API_KEY)

        // Forward the request to the target API
        const upstreamResponse = await fetch(targetUrl.toString())

        // Stream the response body back
        return new Response(upstreamResponse.body, {
            status: upstreamResponse.status,
            headers: {
                'Content-Type': upstreamResponse.headers.get('Content-Type'),
                'Cache-Control': 'public, max-age=60',
            },
        })
        // Error handling
    } catch (err) {
        return new Response(
            JSON.stringify({
                error: 'Proxy request failed',
                details: err.message,
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        )
    }
}
