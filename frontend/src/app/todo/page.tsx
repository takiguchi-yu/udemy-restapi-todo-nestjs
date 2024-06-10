"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from 'axios';
import { useEffect } from 'react';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function TODO() {
  axios.defaults.withCredentials = true
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`)
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/csrf`
      )
      axios.defaults.headers.common['csrf-token'] = data.csrfToken
    }
    getCsrfToken()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
