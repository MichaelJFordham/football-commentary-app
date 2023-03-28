// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  // Fetch data via GET from external API
  await fetch("https://cat-fact.herokuapp.com/facts")
    .then((response) => response.json())
    .then((data) => res.status(200).json({ fact: data[0].text }));
}
