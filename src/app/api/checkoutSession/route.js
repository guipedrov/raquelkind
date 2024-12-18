import fetch from 'node-fetch';

export async function POST(req) {
  try {
    const productBody = await req.json();
    const response = await fetch('https://api.prod.easypay.pt/2.0/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'AccountId': '8ce71651-36e6-4361-9c46-c44ae4603f3c',
        'ApiKey': 'b0205239-13fe-4d8f-ab4f-a119800726e2',
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
