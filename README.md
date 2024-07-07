
# Open issues

Problems with routes that use proxy or serverless to APIs:
* Municipios page uses `useSWR` to fetch `https://api.carrismetropolitana.pt/[endpoint]`. works well!
* IPMA has CORS limitations. `useSWR` is not working properly with proxy server, although proxy server is working well for GIRA pages. for IPMA weather, is not working, the JSON being imported from `/public/gira.json`.  
* [MapaBicis](https://github.com/ULHT-PW/next-paginas-soltas/blob/dea99b9f9957826cdc06b45a156032fb70817034/components/MapaBicis/MapaBicis.js#L20)
  * GIRA has CORS limitations. built a proxy server. it fetches correctly. but the page does not manage receive the data. it shows continuously "Loading bikeLanesData..."  
  * created serverless functions in `/app/api` folder. but is not working. for example, for GIRA, route `/api/gira/availability` is not answering, it shows continuously "Loading bikeLanesData..."  


# Paginas soltas, Next.js App

This app is running in Vercel, [https://next-paginas-soltas.vercel.app/](https://next-paginas-soltas.vercel.app/)

<img width="513" alt="image" src="https://github.com/ULHT-PW/next-paginas-soltas/assets/42048382/0a454176-d4ac-418c-aa44-b8733c025314">



## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

* Run the development server: `npm run dev`
* Run the proxy server `node proxy/index.js`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

