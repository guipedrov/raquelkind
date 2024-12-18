// src/pages/index.js
"use strict";
"use client";
import { React, useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  async function startEasyPayCheckout() {
    try {
      setLoading(true);

      // Requisição para a API Route que cria a sessão de checkout
      const response = await fetch('/api/checkoutSession', {
        method: 'POST',
      });

      const manifest = await response.json();

      // Inicializa o checkout com o manifest retornado
      if (manifest.session) {
        easypayCheckout.startCheckout(manifest);
      } else {
        console.error('Erro ao obter a sessão de checkout');
      }
    } catch (error) {
      console.error('Erro ao iniciar o checkout', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Minha Loja</h1>
      <button onClick={startEasyPayCheckout} disabled={loading}>
        {loading ? 'Processando...' : 'Finalizar Compra'}
      </button>
    </div>
  );
}
