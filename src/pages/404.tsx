import { Link } from 'react-router-dom'

import image from '@/assets/images/404.jpg'

export function NotFound() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="max-w-4xl px-2 text-4xl font-bold">
        404 - Pizza não encontrada. Mas não se preocupe, temos muitas outras
        deliciosas esperando por você!
      </h1>

      <div className="flex h-96 w-96 items-center justify-center overflow-hidden rounded-full border border-violet-500 p-4 dark:via-violet-400">
        <img
          src={image}
          alt="Página não encontrada"
          className="h-92 w-92 rounded-full  object-cover"
        />
      </div>

      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
