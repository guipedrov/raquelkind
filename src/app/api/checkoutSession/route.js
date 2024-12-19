import fetch from 'node-fetch';

export async function POST(req) {
  try {
    const productBody = await req.json();
    const response = await fetch('https://api.prod.easypay.pt/2.0/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'AccountId': '',
        'ApiKey': '',
      },
      body: JSON.stringify(productBody),
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Erro no backend:', error);
    return new Response(JSON.stringify({ error: 'Erro ao criar a sessão de checkout via route' }), { status: 500 });
  }
}
